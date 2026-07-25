"use client";

// ==========================================
// 1. TEMPLATE LIBRARY DATA
// ==========================================
export type TemplateItem = {
  name: string;
  input: string;
  separator: string;
  count: number;
};

export const TEMPLATE_CATEGORIES: Record<string, TemplateItem[]> = {
  Love: [
    { name: "❤️ Love Spam", input: "I Love You ❤️", separator: " ", count: 200 },
    { name: "😍 Crush Spam", input: "I can't stop thinking about you... 😍", separator: " ", count: 50 },
    { name: "💖 Heartbeats", input: "💓 Love You 💓", separator: "\n", count: 100 },
    { name: "🌹 Miss You", input: "I miss you so much! 🌹", separator: " ", count: 10 }
  ],
  Emoji: [
    { name: "😂 Laugh Spam", input: "😂🔥🎉💯✨😍", separator: " ", count: 100 },
    { name: "🔥 Fire Stream", input: "🔥", separator: "\n", count: 50 },
    { name: "🥳 Party Wave", input: "🎉🥳🎈", separator: " ", count: 20 }
  ],
  Gaming: [
    { name: "🎮 GG WP", input: "GG WP! 🎮", separator: " ", count: 10 },
    { name: "👽 Noob Alert", input: "What a absolute noob! 🗑️", separator: " ", count: 20 },
    { name: "👑 OP Play", input: "OP! 👑", separator: " ", count: 5 }
  ],
  Instagram: [
    { name: "📸 Photo Caption", input: "Chasing dreams and making memories. ✨", separator: "\n", count: 1 },
    { name: "👤 Cool Bio", input: "Living life one status-style at a time. 🚀", separator: "\n", count: 1 },
    { name: "🏷️ Hashtag Pile", input: "#viral #trending #love #instagood #instadaily", separator: " ", count: 1 },
    { name: "🎁 Giveaway Alert", input: "🎁 GIVEAWAY TIME! Tag 3 friends to win! 🎁", separator: "\n", count: 1 }
  ],
  Business: [
    { name: "⏰ Task Reminder", input: "⏰ Reminder: Meeting starts in 10 minutes. Please dial in.", separator: "\n", count: 1 },
    { name: "⚡ Hot Offer", input: "⚡ SPECIAL OFFER! Get 50% off all options. ⚡", separator: "\n", count: 1 },
    { name: "💰 Promo Discount", input: "Apply code SAVE30 at checkout to save 30%!", separator: "\n", count: 1 }
  ],
  Stylish: [
    { name: "𝓞𝓻𝓴𝓪𝓣𝓸𝓸𝓵", input: "𝓞𝓻𝓴𝓪𝓣𝓸𝓸𝓵", separator: " ", count: 10 },
    { name: "𝔒𝔯𝔨𝔞𝔗𝔬𝔬𝔩", input: "𝔒𝔯𝔨𝔞𝔗𝔬𝔬𝔩", separator: "\n", count: 5 },
    { name: "ⓒⓘⓡⓒⓛⓔ", input: "ⓒⓘⓡⓒⓛⓔ", separator: " ", count: 5 }
  ],
  Symbols: [
    { name: "➖ Thick Bars", input: "▬▬▬▬▬▬▬▬▬", separator: "\n", count: 5 },
    { name: "★ Star Divider", input: "★★★★★★★★★", separator: "\n", count: 5 },
    { name: "─ Thin Divider", input: "──────────", separator: "\n", count: 5 }
  ],
  WhatsApp: [
    { name: "📢 Broadcast Msg", input: "📢 IMPORTANT ANNOUNCEMENT 📢\nRead carefully!", separator: "\n", count: 1 },
    { name: "☀️ Good Morning", input: "Good morning! ☀️ Have a beautiful day!", separator: "\n", count: 5 },
    { name: "🕌 Eid Mubarak", input: "Eid Mubarak! 🌙✨ May blessings overflow!", separator: "\n", count: 3 }
  ],
  TikTok: [
    { name: "🎵 Viral Caption", input: "Wait for the end... 🤫🔥 #viral #trending #fyp", separator: "\n", count: 1 },
    { name: "🕺 Dance Challenge", input: "Who did it better? 🕺 Live now! #dance", separator: "\n", count: 1 }
  ],
  Discord: [
    { name: "🤖 Bot Prefix", input: "!help | view command logs", separator: "\n", count: 1 },
    { name: "💬 Chat Spam", input: "Pinging @everyone 📣", separator: " ", count: 10 }
  ],
  YouTube: [
    { name: "🔔 Subscribe Alert", input: "🔔 Subscribe and hit the bell icon! 🔔", separator: "\n", count: 2 },
    { name: "👍 Like Goal", input: "Can we hit 1,000 likes on this video? 👍", separator: "\n", count: 1 }
  ],
  Coding: [
    { name: "💻 Console Log", input: "console.log('OrkaTool Debug:', data);", separator: "\n", count: 5 },
    { name: "📦 Mock JSON", input: '{\n  "status": "success",\n  "code": 200,\n  "data": {\n    "name": "OrkaTool",\n    "active": true\n  }\n}', separator: "\n", count: 1 }
  ],
  Marketing: [
    { name: "📈 Pitch Email", input: "Subject: Boost your sales with OrkaTool productivity! 🚀", separator: "\n", count: 1 },
    { name: "💎 Premium Access", input: "Unlock premium SaaS access today 💎", separator: "\n", count: 1 }
  ],
  ASCII: [
    { name: "¯\\_(ツ)_/¯ Shrug", input: "¯\\_(ツ)_/¯", separator: " ", count: 5 },
    { name: "Table Flip", input: "(╯°□°）╯︵ ┻━┻", separator: "\n", count: 3 },
    { name: "Table Lenny", input: "( ͡° ͜ʖ ͡°)", separator: " ", count: 10 }
  ],
  Unicode: [
    { name: "Sparkles Box", input: "✧･ﾟ: *✧･ﾟ:* OrkaTool *:･ﾟ✧*:･ﾟ✧", separator: "\n", count: 5 },
    { name: "Bubble Letters", input: "ⓄⓡⓚⓐⓉⓞⓞⓛ", separator: " ", count: 5 }
  ]
};

// ==========================================
// 2. EMOJI KEYBOARD DATA
// ==========================================
export const EMOJI_DB: Record<string, string[]> = {
  Smileys: ["😂", "😊", "🤣", "😉", "😍", "🥰", "😎", "🧐", "🥳", "😜", "😀", "😆", "😇", "🤔", "🤫", "🤭", "😬", "😴", "😭", "😡", "😱", "🤯", "🤡", "👽", "😈", "🤠", "🤖", "👻", "👾", "💩"],
  Hearts: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💝", "💟", "♥️", "💌", "👄", "💋"],
  Symbols: ["🔥", "⚡", "💥", "🌈", "☀️", "❄️", "⭐", "🌟", "✨", "💯", "👍", "👎", "👊", "✌️", "👌", "👏", "🙌", "🙋", "❌", "✅", "⚠️", "💡", "⚡", "🔔", "🔑", "🛡️", "⚔️", "💎", "💤"],
  Celebration: ["🎉", "🎈", "🎂", "🎁", "🥂", "🍻", "🍺", "🍟", "🍕", "🍔", "🍦", "🍿", "🍩", "🎊", "🎇", "🎆", "🧁", "🍫", "🍬", "🍭", "🍪", "🍷", "🍹"],
  Islamic: ["🙏", "🤲", "🕌", "🌙", "🕋", "📿", "🕊️", "📖", "📜", "🕯️", "💚", "🌸", "🌍", "🗺️", "🌌", "🧭"],
  Flags: ["🏴‍☠️", "🇺🇸", "🇬🇧", "🇨🇦", "🇩🇪", "🇫🇷", "🇯🇵", "🇵🇰", "🇮🇳", "🇸🇦", "🇹🇷", "🇧🇷", "🌍", "🌎", "🌏", "🌐", "🎌", "🏁", "🚩"],
  Food: ["🍕", "🍔", "🍟", "🌭", "🥪", "🌮", "🌯", "🍳", "🍲", "🍜", "🍣", "🍧", "🍨", "🍦", "🍰", "🍭", "🍯", "🍎", "🍓", "🍉", "🍒", "🍇", "🥑", "🍌"],
  Sports: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🏓", "🏸", "🏒", "🏑", "🥍", "🏹", "🎣", "🥊", "🥋", "🛹", "⛸️", "⛳", "🚲"],
  Travel: ["🚗", "🚕", "🚙", "🚌", "🏎️", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🛵", "🚲", "✈️", "🚀", "🛸", "🚁", "🚢", "⚓", "⛵", "🏔️", "🏖️", "🏨"],
  Animals: ["🐱", "🐶", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆", "🦅", "🦉", "🦄", "🐝"],
  Business: ["💼", "📈", "📉", "📊", "📁", "📂", "📅", "🗒️", "📝", "✉️", "📨", "📧", "📥", "📤", "📦", "🏷️", "💵", "💳", "💰", "💸", "📎"],
  Tech: ["💻", "🖥️", "📱", "⌚", "Keyboard", "🖱️", "🖲️", "🕹️", "🎮", "🔌", "🔋", "💿", "💾", "🧮", "🎬", "📷", "📹", "🎙️", "🎧", "📡", "🎛️", "🎞️", "🔍"]
};

export const EMOJI_KEYWORDS: Record<string, string> = {
  "😂": "laugh, lol, cry, tears, funny, joke",
  "😊": "smile, happy, blush, sweet",
  "🤣": "rofl, laugh, rolling, floor, funny",
  "😉": "wink, friendly, flirt",
  "😍": "crush, love, heart eyes, like, adore",
  "🥰": "hearts, love, crush, warm, blush",
  "😎": "cool, sun, glasses, smart, confidence",
  "🧐": "monocle, index, inspect, intelligence",
  "🥳": "celebrate, party, hat, birthday, horn",
  "😜": "tongue, wink, crazy, silly",
  "😀": "smile, happy, grin",
  "😆": "laugh, squint, happy",
  "😇": "angel, halo, innocent, good",
  "🤔": "thinking, ponder, ask, wonder, hmm",
  "🤫": "quiet, shush, silent, secret",
  "🤭": "giggle, oops, hand",
  "😬": "grimace, awkward, nervous",
  "😴": "sleep, zzz, tired, dream",
  "😭": "sob, cry, sad, tears",
  "😡": "angry, mad, red, furious",
  "😱": "scared, shock, wow, scream",
  "🤯": "mind blown, head explosion, wow",
  "🤡": "clown, funny, joke, circus",
  "👽": "alien, space, ufo",
  "❤️": "heart, love, red, like",
  "🧡": "heart, orange, love",
  "💛": "heart, yellow, love",
  "💚": "heart, green, love, peace, islamic",
  "💙": "heart, blue, love",
  "💜": "heart, purple, love",
  "🖤": "heart, black, love",
  "🤍": "heart, white, love",
  "🤎": "heart, brown, love",
  "💔": "heart, broken, sad, split",
  "❣️": "heart, exclamation, love, red",
  "💕": "hearts, love, matching, pink",
  "💞": "hearts, revolving, spinning, love",
  "💓": "heart, beating, pulse, love, pink",
  "💗": "heart, growing, love, pink",
  "💖": "heart, sparkle, glitter, love, pink",
  "💝": "heart, gift, ribbon, box, love",
  "💟": "heart, decoration, purple, block",
  "♥️": "heart, card, suit, red",
  "💌": "heart, letter, mail, love",
  "🔥": "fire, flame, hot, lit, burn, epic",
  "⚡": "lightning, bolt, flash, electricity, power",
  "💥": "boom, explosion, crash, bang",
  "🌈": "rainbow, sky, color",
  "☀️": "sun, warm, bright, weather, morning",
  "❄️": "snow, winter, cold, freeze",
  "⭐": "star, yellow, gold, favorite, star",
  "🌟": "star, glow, shine, sparkle",
  "✨": "sparkles, glitter, shine, beauty",
  "💯": "100, score, perfect, real, true",
  "👍": "thumbs up, like, yes, agree, good",
  "👎": "thumbs down, dislike, no, bad",
  "👊": "fist, punch, bump, solid",
  "✌️": "peace, victory, hand",
  "👌": "ok, hand, perfect, good",
  "👏": "clap, applause, hands, congratulations",
  "🙌": "hands, celebrate, raise, hooray",
  "🙋": "hand, raise, ask, question",
  "❌": "cross, red, wrong, cancel, close",
  "✅": "check, green, correct, done, success",
  "⚠️": "warning, yellow, caution, danger, alert",
  "💡": "bulb, light, idea, thinking, smart",
  "🎉": "party, popper, celebrate, success, holiday",
  "🎈": "balloon, party, birthday",
  "🎂": "cake, birthday, sweet, candle",
  "🎁": "gift, box, present, birthday, surprise",
  "🕌": "mosque, masjid, prayer, temple, islam, ramadan, Jummah",
  "🕋": "kaaba, mecca, prayer, hajj, islam",
  "🌙": "moon, crescent, crescent moon, ramadan, eid",
  "🤲": "prayer, palms, dua, bless, islam",
  "🙏": "prayer, hands, please, thanks, namaste",
  "📿": "beads, tasbih, prayer, dhikr, islam",
  "🍕": "pizza, cheese, food, slice",
  "🍔": "burger, hamburger, food, beef",
  "🍟": "fries, potato, snack, food",
  "⚽": "soccer, football, ball, sports",
  "🏀": "basketball, ball, sports",
  "🏈": "football, sports, ball",
  "🚗": "car, drive, red, vehicle, taxi",
  "💻": "computer, laptop, monitor, coding, developer, tech",
  "📱": "phone, mobile, smartphone, screen, tech",
  "💼": "briefcase, bag, work, business, job",
  "🐱": "cat, kitty, pet",
  "🐶": "dog, puppy, pet",
  "🌍": "world, earth, globe, land, flag"
};

// ==========================================
// 3. FANCY DECORATIONS LIST
// ==========================================
export type DecorationItem = {
  prefix: string;
  suffix: string;
};

export const DECORATIONS_LIST: DecorationItem[] = [
  { prefix: "✨ ", suffix: " ✨" },
  { prefix: "🔥🔥 ", suffix: " 🔥🔥" },
  { prefix: "❤️❤️ ", suffix: " ❤️❤️" },
  { prefix: "【 ", suffix: " 】" },
  { prefix: "『 ", suffix: " 』" },
  { prefix: "《 ", suffix: " 》" },
  { prefix: "★ ", suffix: " ★" },
  { prefix: "━━ ", suffix: " ━━" },
  { prefix: "════ ", suffix: " ════" },
  { prefix: "•• ", suffix: " ••" },
  { prefix: "🌸 ", suffix: " 🌸" },
  { prefix: "🎯 ", suffix: " 🎯" }
];

// ==========================================
// 4. STYLE TRANSFORMATION FUNCTIONS
// ==========================================
export type StyleItem = {
  id: string;
  name: string;
};

export const STYLES_LIST: StyleItem[] = [
  { id: "normal", name: "Normal" },
  { id: "bold", name: "𝗕𝗼𝗹𝗱" },
  { id: "italic", name: "𝘐𝘵𝘢𝘭𝘪𝙘" },
  { id: "script", name: "𝑺𝒄𝒓𝒊𝒑𝒕" },
  { id: "gothic", name: "𝔊𝔬𝔱𝔥𝔦𝔠" },
  { id: "box", name: "🄱🄾🅇" },
  { id: "circle", name: "ⓒⓘⓡⓒⓛⓔ" },
  { id: "spaced", name: "Ｓｐａｃｅｄ" },
  { id: "smallcaps", name: "ＳＭＡＬＬ ＣＡＰＳ" },
  { id: "monospace", name: "Monospace" },
  { id: "bubble", name: "Bubble" },
  { id: "squared", name: "Squared" },
  { id: "doublestruck", name: "Double Struck" },
  { id: "underline", name: "Underline Style" },
  { id: "strike", name: "Strike Style" },
  { id: "tiny", name: "Tiny Text" },
  { id: "upsidedown", name: "Upside Down" },
  { id: "fullwidth", name: "Full Width" },
  { id: "parenthesized", name: "Parenthesized" }
];

// 4a. Helpers for Unicode mappings
const toBoldChar = (c: string) => {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1D5D4);
  if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x1D5EE);
  if (code >= 48 && code <= 57) return String.fromPoint(code - 48 + 0x1D7EC);
  return c;
};

const toItalicChar = (c: string) => {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1D622);
  if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x1D63C);
  return c;
};

const toScriptChar = (c: string) => {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1D4D0);
  if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x1D4EA);
  return c;
};

const toGothicChar = (c: string) => {
  const exceptionsUpper: Record<number, string> = {
    67: "ℭ", 72: "ℌ", 73: "ℑ", 82: "ℜ", 90: "ℨ"
  };
  const code = c.charCodeAt(0);
  if (exceptionsUpper[code]) return exceptionsUpper[code];
  if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1D504);
  if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x1D51E);
  return c;
};

const toCircleChar = (c: string) => {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x24B6);
  if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x24D0);
  if (code >= 48 && code <= 57) return String.fromPoint(code === 48 ? 0x24EA : code - 49 + 0x2460);
  return c;
};

const toParenthesizedChar = (c: string) => {
  const code = c.toLowerCase().charCodeAt(0);
  if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x249C);
  return c;
};

const String = globalThis.String as any; // Safe wrapper for custom polyfill access if needed
if (!String.fromPoint) {
  String.fromPoint = function (cp: number) {
    if (cp > 0xFFFF) {
      cp -= 0x10000;
      return String.fromCharCode((cp >>> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
    }
    return String.fromCharCode(cp);
  };
}

const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ",
  n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
};

const TINY_MAP: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ",
  n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "𝔮", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "𝔽", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ",
  N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "𝒬", R: "ᴿ", S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹"
};

const UPSIDE_DOWN_MAP: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ",
  n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ſ", K: "ʞ", L: "˥", M: "W",
  N: "N", O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "┴", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6", "0": "0",
  ".": "˙", ",": "'", "'": ",", "\"": "„", "?": "¿", "!": "¡", "(": ")", ")": "(", "[": "]", "]": "[",
  "{": "}", "}": "{", "<": ">", ">": "<", "_": "‾"
};

export const applyTextStyle = (text: string, styleId: string): string => {
  if (!text) return "";
  
  switch (styleId) {
    case "bold":
      return text.split("").map(toBoldChar).join("");
    case "italic":
      return text.split("").map(toItalicChar).join("");
    case "script":
      return text.split("").map(toScriptChar).join("");
    case "gothic":
      return text.split("").map(toGothicChar).join("");
    case "box":
      return text.split("").map(c => {
        const up = c.toUpperCase();
        const code = up.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1F130);
        return c;
      }).join("");
    case "circle":
      return text.split("").map(toCircleChar).join("");
    case "spaced":
      return text.split("").map(c => c === " " ? "  " : c + " ").join("").trim();
    case "smallcaps":
      return text.split("").map(c => SMALL_CAPS_MAP[c.toLowerCase()] || c).join("");
    case "monospace":
      return text.split("").map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1D670);
        if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x1D68A);
        if (code >= 48 && code <= 57) return String.fromPoint(code - 48 + 0x1D7F6);
        return c;
      }).join("");
    case "bubble":
      // Negative circled capital letters start at U+1F150
      return text.split("").map(c => {
        const code = c.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1F150);
        return c;
      }).join("");
    case "squared":
      // Negative squared capital letters start at U+1F170
      return text.split("").map(c => {
        const code = c.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1F170);
        return c;
      }).join("");
    case "doublestruck":
      const exceptionsDouble: Record<number, string> = {
        67: "ℂ", 72: "ℍ", 78: "ℕ", 80: "ℙ", 81: "ℚ", 82: "ℝ", 90: "ℤ"
      };
      return text.split("").map(c => {
        const code = c.charCodeAt(0);
        if (exceptionsDouble[code]) return exceptionsDouble[code];
        if (code >= 65 && code <= 90) return String.fromPoint(code - 65 + 0x1D538);
        if (code >= 97 && code <= 122) return String.fromPoint(code - 97 + 0x1D552);
        return c;
      }).join("");
    case "underline":
      return text.split("").map(c => c + "\u0332").join("");
    case "strike":
      return text.split("").map(c => c + "\u0336").join("");
    case "tiny":
      return text.split("").map(c => TINY_MAP[c] || c).join("");
    case "upsidedown":
      return text.split("").reverse().map(c => UPSIDE_DOWN_MAP[c] || c).join("");
    case "fullwidth":
      return text.split("").map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCharCode(code - 65 + 0xFF21);
        if (code >= 97 && code <= 122) return String.fromCharCode(code - 97 + 0xFF41);
        if (code >= 48 && code <= 57) return String.fromCharCode(code - 48 + 0xFF10);
        return c;
      }).join("");
    case "parenthesized":
      return text.split("").map(toParenthesizedChar).join("");
    default:
      return text;
  }
};

export const getEmojiMatches = (query: string): string[] => {
  const qRange = query.toLowerCase().trim();
  if (!qRange) return [];
  const results: string[] = [];
  
  for (const cat of Object.keys(EMOJI_DB)) {
    for (const em of EMOJI_DB[cat]) {
      const kw = EMOJI_KEYWORDS[em] || "";
      if (
        em.includes(qRange) || 
        kw.toLowerCase().includes(qRange) ||
        cat.toLowerCase().includes(qRange)
      ) {
        if (!results.includes(em)) {
          results.push(em);
        }
      }
    }
  }
  return results;
};

