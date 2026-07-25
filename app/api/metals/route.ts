import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/* =====================================================
   Constants
   ===================================================== */
const GOLD_NISAB_GRAMS = 87.48;
const SILVER_NISAB_GRAMS = 612.36;
const TROY_OZ_TO_GRAM = 31.1035; // 1 troy oz = 31.1035 grams

const CACHE_FILE_PATH = path.join(process.cwd(), "data", "metals-cache.json");

/* =====================================================
   Types
   ===================================================== */
interface MetalCacheData {
  goldPerGram: number;
  silverPerGram: number;
  currency: string;
  updatedAt: string;
  date: string;
  source: string;
}

/* =====================================================
   File Cache Helpers
   ===================================================== */
function readCache(): MetalCacheData | null {
  try {
    if (fs.existsSync(CACHE_FILE_PATH)) {
      const content = fs.readFileSync(CACHE_FILE_PATH, "utf8");
      return JSON.parse(content);
    }
  } catch {
    // ignore
  }
  return null;
}

function writeCache(data: MetalCacheData) {
  try {
    const dir = path.dirname(CACHE_FILE_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch {
    // ignore
  }
}

function isValid(gold: number, silver: number): boolean {
  return gold > 10000 && gold < 200000 && silver > 10 && silver < 10000;
}

function buildResponse(gold: number, silver: number, source: string, updatedAt: string, isCachedPastDay: boolean) {
  return {
    goldRate: Math.round(gold),
    silverRate: Math.round(silver),
    goldThreshold: Math.round(gold * GOLD_NISAB_GRAMS),
    silverThreshold: Math.round(silver * SILVER_NISAB_GRAMS),
    lastUpdated: updatedAt,
    source,
    isCachedPastDay,
  };
}

/* =====================================================
   API 1 — Coinbase (free, no key needed)
   Fetches XAU-USD and XAG-USD spot prices
   Converts with USD→PKR from open.er-api.com
   ===================================================== */
async function fetchCoinbase(): Promise<{ goldRate: number; silverRate: number }> {
  const [goldRes, silverRes, fxRes] = await Promise.all([
    fetch("https://api.coinbase.com/v2/prices/XAU-USD/spot", { cache: "no-store" }),
    fetch("https://api.coinbase.com/v2/prices/XAG-USD/spot", { cache: "no-store" }),
    fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" }),
  ]);

  if (!goldRes.ok || !silverRes.ok || !fxRes.ok) {
    throw new Error("Coinbase or FX API request failed");
  }

  const [goldJson, silverJson, fxJson] = await Promise.all([
    goldRes.json(),
    silverRes.json(),
    fxRes.json(),
  ]);

  const goldUSD = Number(goldJson.data?.amount); // troy oz in USD
  const silverUSD = Number(silverJson.data?.amount); // troy oz in USD
  const usdToPkr = Number(fxJson.rates?.PKR);

  if (!goldUSD || !silverUSD || !usdToPkr) throw new Error("Invalid Coinbase response data");

  // Convert troy oz → per gram → PKR
  const goldPKR = (goldUSD / TROY_OZ_TO_GRAM) * usdToPkr;
  const silverPKR = (silverUSD / TROY_OZ_TO_GRAM) * usdToPkr;

  return { goldRate: goldPKR, silverRate: silverPKR };
}

/* =====================================================
   API 2 — Frankfurter + Coinbase fallback
   Alternative FX source with same metal prices
   ===================================================== */
async function fetchCoinbaseWithFrankfurter(): Promise<{ goldRate: number; silverRate: number }> {
  const [goldRes, silverRes, fxRes] = await Promise.all([
    fetch("https://api.coinbase.com/v2/prices/XAU-USD/spot", { cache: "no-store" }),
    fetch("https://api.coinbase.com/v2/prices/XAG-USD/spot", { cache: "no-store" }),
    fetch("https://api.frankfurter.app/latest?from=USD&to=PKR", { cache: "no-store" }),
  ]);

  if (!goldRes.ok || !silverRes.ok || !fxRes.ok) {
    throw new Error("Frankfurter fallback request failed");
  }

  const [goldJson, silverJson, fxJson] = await Promise.all([
    goldRes.json(),
    silverRes.json(),
    fxRes.json(),
  ]);

  const goldUSD = Number(goldJson.data?.amount);
  const silverUSD = Number(silverJson.data?.amount);
  const usdToPkr = Number(fxJson.rates?.PKR);

  if (!goldUSD || !silverUSD || !usdToPkr) throw new Error("Invalid Frankfurter fallback data");

  const goldPKR = (goldUSD / TROY_OZ_TO_GRAM) * usdToPkr;
  const silverPKR = (silverUSD / TROY_OZ_TO_GRAM) * usdToPkr;

  return { goldRate: goldPKR, silverRate: silverPKR };
}

/* =====================================================
   API 3 — exchangerate.host (free, no key)
   ===================================================== */
async function fetchExchangerateHost(): Promise<{ goldRate: number; silverRate: number }> {
  // Get USD→PKR using exchangerate.host
  const fxRes = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=PKR", { cache: "no-store" });
  if (!fxRes.ok) throw new Error("exchangerate.host request failed");
  const fxJson = await fxRes.json();
  if (!fxJson.success) throw new Error("exchangerate.host returned failure");
  const usdToPkr = Number(fxJson.rates?.PKR);
  if (!usdToPkr) throw new Error("exchangerate.host missing PKR rate");

  // Use Coinbase metals prices
  const [goldRes, silverRes] = await Promise.all([
    fetch("https://api.coinbase.com/v2/prices/XAU-USD/spot", { cache: "no-store" }),
    fetch("https://api.coinbase.com/v2/prices/XAG-USD/spot", { cache: "no-store" }),
  ]);
  if (!goldRes.ok || !silverRes.ok) throw new Error("Coinbase metals failed in API3");

  const [goldJson, silverJson] = await Promise.all([goldRes.json(), silverRes.json()]);
  const goldUSD = Number(goldJson.data?.amount);
  const silverUSD = Number(silverJson.data?.amount);
  if (!goldUSD || !silverUSD) throw new Error("Invalid metal data in API3");

  const goldPKR = (goldUSD / TROY_OZ_TO_GRAM) * usdToPkr;
  const silverPKR = (silverUSD / TROY_OZ_TO_GRAM) * usdToPkr;

  return { goldRate: goldPKR, silverRate: silverPKR };
}

/* =====================================================
   GET Route Handler
   ===================================================== */
export async function GET() {
  const todayStr = new Date().toISOString().split("T")[0];
  const cached = readCache();

  // STEP 1: Return today's cache immediately — no API call
  if (cached && cached.date === todayStr && isValid(cached.goldPerGram, cached.silverPerGram)) {
    return NextResponse.json(buildResponse(
      cached.goldPerGram, cached.silverPerGram, cached.source, cached.updatedAt, false
    ));
  }

  const apis = [
    { name: "Coinbase + ExchangeRate-API", fn: fetchCoinbase },
    { name: "Coinbase + Frankfurter", fn: fetchCoinbaseWithFrankfurter },
    { name: "Coinbase + ExchangeRate.host", fn: fetchExchangerateHost },
  ];

  for (const api of apis) {
    try {
      const rates = await api.fn();
      if (isValid(rates.goldRate, rates.silverRate)) {
        const updatedAt = new Date().toISOString();
        writeCache({
          goldPerGram: Math.round(rates.goldRate),
          silverPerGram: Math.round(rates.silverRate),
          currency: "PKR",
          updatedAt,
          date: todayStr,
          source: api.name,
        });
        return NextResponse.json(buildResponse(rates.goldRate, rates.silverRate, api.name, updatedAt, false));
      }
    } catch {
      // try next API
    }
  }

  // STEP 5: All APIs failed — use previous day's cache
  if (cached && isValid(cached.goldPerGram, cached.silverPerGram)) {
    return NextResponse.json(buildResponse(
      cached.goldPerGram, cached.silverPerGram, cached.source, cached.updatedAt, true
    ));
  }

  // No cache, no APIs — return error
  return NextResponse.json(
    { error: "Unable to retrieve today's market prices. Please try again later." },
    { status: 502 }
  );
}