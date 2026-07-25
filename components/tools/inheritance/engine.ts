import type { InheritanceFormData, InheritanceResult, HeirShare, CalculationTraceStep } from "./types";

/**
 * Main Islamic Inheritance Calculator Engine
 * Calculates shares of net estate based on Faraid rules (Sunni schools).
 */
export function calculateInheritance(form: InheritanceFormData): InheritanceResult {
  const grossEstate = form.estate;
  const funeralExpenses = form.funeral;
  const debts = form.debts;

  // 1. Deduct liabilities first
  const remainingAfterExpenses = Math.max(0, grossEstate - funeralExpenses - debts);
  
  // Wasiyyah is capped at 1/3 of the estate after expenses
  const wasiyyahLimit = remainingAfterExpenses / 3;
  const wasiyyahCapped = form.wasiyyah > wasiyyahLimit;
  const wasiyyah = wasiyyahCapped ? wasiyyahLimit : form.wasiyyah;
  
  const netEstate = Math.max(0, remainingAfterExpenses - wasiyyah);

  const heirs = form.heirs;
  const gender = form.deceasedGender;
  const madhab = form.madhab;
  let raddWarning: string | undefined = undefined;

  const trace: CalculationTraceStep[] = [
    {
      title: "Estate Deductions",
      description: `Gross Estate: ${grossEstate.toLocaleString()} | Funeral: ${funeralExpenses.toLocaleString()} | Debts: ${debts.toLocaleString()} | Wasiyyah: ${form.wasiyyah.toLocaleString()} ${wasiyyahCapped ? "(Capped at 1/3)" : ""}. Net distributable estate is ${netEstate.toLocaleString()}.`,
    },
  ];

  // Helper flags
  const hasSons = heirs.sons > 0;
  const hasDaughters = heirs.daughters > 0;
  const hasChildren = hasSons || hasDaughters;
  
  const hasGrandsons = heirs.grandsons > 0;
  const hasGranddaughters = heirs.granddaughters > 0;
  const hasGrandchildren = hasGrandsons || hasGranddaughters;
  
  const hasDescendants = hasChildren || hasGrandchildren;
  const hasMaleDescendants = hasSons || (heirs.grandsons > 0 && heirs.sons === 0);

  // Initialize all possible heirs status
  const heirsList: {
    key: keyof typeof heirs;
    name: string;
    relation: string;
    count: number;
    shareVal: number; // base fraction (out of 24)
    fractionText: string;
    reason: string;
    isExcluded: boolean;
    excludedBy?: string;
  }[] = [
    { key: "husband", name: "Husband", relation: "Spouse", count: gender === "female" ? heirs.husband : 0, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "wife", name: "Wife", relation: "Spouse", count: gender === "male" ? heirs.wife : 0, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "father", name: "Father", relation: "Parents", count: heirs.father, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "mother", name: "Mother", relation: "Parents", count: heirs.mother, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "sons", name: "Son", relation: "Children", count: heirs.sons, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "daughters", name: "Daughter", relation: "Children", count: heirs.daughters, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "grandsons", name: "Son's Son", relation: "Grandchildren", count: heirs.grandsons, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "granddaughters", name: "Son's Daughter", relation: "Grandchildren", count: heirs.granddaughters, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "paternalGrandfather", name: "Paternal Grandfather", relation: "Grandparents", count: heirs.paternalGrandfather, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "paternalGrandmother", name: "Paternal Grandmother", relation: "Grandparents", count: heirs.paternalGrandmother, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "maternalGrandmother", name: "Maternal Grandmother", relation: "Grandparents", count: heirs.maternalGrandmother, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "fullBrothers", name: "Full Brother", relation: "Siblings", count: heirs.fullBrothers, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "fullSisters", name: "Full Sister", relation: "Siblings", count: heirs.fullSisters, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "consanguineBrothers", name: "Consanguine Brother", relation: "Siblings", count: heirs.consanguineBrothers, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "consanguineSisters", name: "Consanguine Sister", relation: "Siblings", count: heirs.consanguineSisters, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "uterineBrothers", name: "Uterine Brother", relation: "Siblings", count: heirs.uterineBrothers, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
    { key: "uterineSisters", name: "Uterine Sister", relation: "Siblings", count: heirs.uterineSisters, shareVal: 0, fractionText: "0", reason: "", isExcluded: false },
  ];

  // Helper function to find heir record
  const getHeir = (key: keyof typeof heirs) => heirsList.find(h => h.key === key)!;

  // 2. Perform Exclusion (Hajb) Checks
  // Husband/Wife, Father/Mother, Son/Daughter are never excluded.

  // Grandchildren
  if (hasSons) {
    getHeir("grandsons").isExcluded = true;
    getHeir("grandsons").excludedBy = "Son";
    getHeir("granddaughters").isExcluded = true;
    getHeir("granddaughters").excludedBy = "Son";
  } else {
    // If >= 2 daughters, granddaughters are excluded unless a grandson exists to make them Asabah
    if (heirs.daughters >= 2 && !hasGrandsons) {
      getHeir("granddaughters").isExcluded = true;
      getHeir("granddaughters").excludedBy = "Daughters";
    }
  }

  // Grandparents
  if (heirs.father > 0) {
    getHeir("paternalGrandfather").isExcluded = true;
    getHeir("paternalGrandfather").excludedBy = "Father";
    getHeir("paternalGrandmother").isExcluded = true;
    getHeir("paternalGrandmother").excludedBy = "Father";
  }
  if (heirs.mother > 0) {
    getHeir("paternalGrandmother").isExcluded = true;
    getHeir("paternalGrandmother").excludedBy = "Mother";
    getHeir("maternalGrandmother").isExcluded = true;
    getHeir("maternalGrandmother").excludedBy = "Mother";
  }

  // Siblings
  // Hanafi excludes all siblings if paternal grandfather exists.
  // Shafi'i/Maliki/Hanbali does NOT exclude siblings by Grandfather, they share (Muqasamah).
  const isExcludedByGF = madhab === "hanafi" && heirs.paternalGrandfather > 0;

  // Full Siblings
  if (heirs.father > 0 || hasMaleDescendants || isExcludedByGF) {
    let exBy = "Father";
    if (hasMaleDescendants) exBy = hasSons ? "Son" : "Son's Son";
    if (isExcludedByGF) exBy = "Paternal Grandfather (Hanafi)";
    
    getHeir("fullBrothers").isExcluded = true;
    getHeir("fullBrothers").excludedBy = exBy;
    getHeir("fullSisters").isExcluded = true;
    getHeir("fullSisters").excludedBy = exBy;
  }

  // Consanguine Siblings
  const cBro = getHeir("consanguineBrothers");
  const cSis = getHeir("consanguineSisters");

  if (heirs.father > 0 || hasMaleDescendants || isExcludedByGF || heirs.fullBrothers > 0) {
    let exBy = "Father";
    if (hasMaleDescendants) exBy = hasSons ? "Son" : "Son's Son";
    if (isExcludedByGF) exBy = "Paternal Grandfather (Hanafi)";
    if (heirs.fullBrothers > 0) exBy = "Full Brother";

    cBro.isExcluded = true;
    cBro.excludedBy = exBy;
    cSis.isExcluded = true;
    cSis.excludedBy = exBy;
  } else {
    // Excluded by 2 or more full sisters (unless consanguine brother exists to make them Asabah)
    if (heirs.fullSisters >= 2 && heirs.consanguineBrothers === 0) {
      cSis.isExcluded = true;
      cSis.excludedBy = "Full Sisters";
    }
  }

  // Uterine Siblings (excluded by any child/grandchild, father, or grandfather)
  const uBro = getHeir("uterineBrothers");
  const uSis = getHeir("uterineSisters");
  if (hasDescendants || heirs.father > 0 || heirs.paternalGrandfather > 0) {
    let exBy = "Father";
    if (hasDescendants) exBy = "Children/Grandchildren";
    if (heirs.paternalGrandfather > 0) exBy = "Paternal Grandfather";

    uBro.isExcluded = true;
    uBro.excludedBy = exBy;
    uSis.isExcluded = true;
    uSis.excludedBy = exBy;
  }

  trace.push({
    title: "Heir Exclusions (Hajb)",
    description: heirsList
      .filter(h => h.count > 0)
      .map(h => `${h.name}: ${h.isExcluded ? `Excluded by ${h.excludedBy}` : "Active"}`)
      .join(", "),
  });

  // 3. Allocate Fixed Shares (Zawil Furud) out of base 24
  let baseScale = 24;
  
  // Spouse
  const husNode = getHeir("husband");
  if (husNode.count > 0 && !husNode.isExcluded) {
    if (hasDescendants) {
      husNode.shareVal = 6; // 1/4
      husNode.reason = "1/4 because the deceased has children or grandchildren.";
    } else {
      husNode.shareVal = 12; // 1/2
      husNode.reason = "1/2 because the deceased has no children or grandchildren.";
    }
  }

  const wifeNode = getHeir("wife");
  if (wifeNode.count > 0 && !wifeNode.isExcluded) {
    if (hasDescendants) {
      wifeNode.shareVal = 3; // 1/8
      wifeNode.reason = `1/8 (shared equally: ${(1 / (8 * wifeNode.count)).toFixed(3)} each) because the deceased has children or grandchildren.`;
    } else {
      wifeNode.shareVal = 6; // 1/4
      wifeNode.reason = `1/4 (shared equally: ${(1 / (4 * wifeNode.count)).toFixed(3)} each) because the deceased has no children or grandchildren.`;
    }
  }

  // Parents
  const fatNode = getHeir("father");
  if (fatNode.count > 0 && !fatNode.isExcluded) {
    if (hasMaleDescendants) {
      fatNode.shareVal = 4; // 1/6
      fatNode.reason = "1/6 fixed share because the deceased has male children/grandchildren.";
    } else if (hasDescendants) {
      // inherits both fixed 1/6 and Asaba
      fatNode.shareVal = 4;
      fatNode.reason = "1/6 fixed share + remainder (as Asabah) because the deceased only has female children/grandchildren.";
    } else {
      // purely Asabah (gets no fixed share but remainder)
      fatNode.shareVal = 0;
      fatNode.reason = "Inherits remainder (as Asabah) because there are no children/grandchildren.";
    }
  }

  const motNode = getHeir("mother");
  if (motNode.count > 0 && !motNode.isExcluded) {
    const totalSiblingsCount = heirs.fullBrothers + heirs.fullSisters + heirs.consanguineBrothers + heirs.consanguineSisters + heirs.uterineBrothers + heirs.uterineSisters;
    
    // Check Umariyyatain
    const isUmariyyatainHusband = gender === "female" && heirs.husband === 1 && heirs.father === 1 && !hasDescendants && totalSiblingsCount === 0;
    const isUmariyyatainWife = gender === "male" && heirs.wife > 0 && heirs.father === 1 && !hasDescendants && totalSiblingsCount === 0;

    if (hasDescendants || totalSiblingsCount >= 2) {
      motNode.shareVal = 4; // 1/6
      motNode.reason = "1/6 because the deceased has children/grandchildren or 2+ siblings.";
    } else if (isUmariyyatainHusband) {
      // 1/3 of remainder (Husband gets 12/24. Remainder is 12. Mother gets 1/3 of 12 = 4/24)
      motNode.shareVal = 4;
      motNode.reason = "1/3 of remainder (Umariyyatein rule: Husband + Mother + Father).";
    } else if (isUmariyyatainWife) {
      // 1/3 of remainder (Wives get 6/24. Remainder is 18. Mother gets 1/3 of 18 = 6/24)
      motNode.shareVal = 6;
      motNode.reason = "1/3 of remainder (Umariyyatein rule: Wife + Mother + Father).";
    } else {
      motNode.shareVal = 8; // 1/3
      motNode.reason = "1/3 because the deceased has no children/grandchildren and fewer than 2 siblings.";
    }
  }

  // Grandparents
  const gfNode = getHeir("paternalGrandfather");
  if (gfNode.count > 0 && !gfNode.isExcluded) {
    if (madhab === "hanafi" || (heirs.fullBrothers === 0 && heirs.fullSisters === 0 && heirs.consanguineBrothers === 0 && heirs.consanguineSisters === 0)) {
      // Standard Grandfather rules (acted like Father)
      if (hasMaleDescendants) {
        gfNode.shareVal = 4; // 1/6
        gfNode.reason = "1/6 fixed share because the deceased has male children/grandchildren.";
      } else if (hasDescendants) {
        gfNode.shareVal = 4;
        gfNode.reason = "1/6 fixed share + remainder (as Asabah) because the deceased only has female children/grandchildren.";
      } else {
        gfNode.shareVal = 0;
        gfNode.reason = "Inherits remainder (as Asabah) because there are no children/grandchildren.";
      }
    } else {
      // Shafi'i/Maliki/Hanbali: Grandfather shares with siblings (Muqasamah) or gets 1/3 of remainder or 1/6 of whole.
      // This is handled in the residuary section since it is dynamic.
      gfNode.shareVal = 0;
      gfNode.reason = "Grandfather shares with siblings (Muqasamah/1-3rd remainder/1-6th whole) under non-Hanafi rules.";
    }
  }

  // Grandmothers share 1/6 (4 out of 24)
  const pgmNode = getHeir("paternalGrandmother");
  const mgmNode = getHeir("maternalGrandmother");
  const pgmActive = pgmNode.count > 0 && !pgmNode.isExcluded;
  const mgmActive = mgmNode.count > 0 && !mgmNode.isExcluded;

  if (pgmActive && mgmActive) {
    pgmNode.shareVal = 2; // 1/12
    pgmNode.reason = "1/12 (shared 1/6 with maternal grandmother) because mother and father are deceased.";
    mgmNode.shareVal = 2;
    mgmNode.reason = "1/12 (shared 1/6 with paternal grandmother) because mother is deceased.";
  } else {
    if (pgmActive) {
      pgmNode.shareVal = 4;
      pgmNode.reason = "1/6 because mother and father are deceased.";
    }
    if (mgmActive) {
      mgmNode.shareVal = 4;
      mgmNode.reason = "1/6 because mother is deceased.";
    }
  }

  // Daughters (if no Sons)
  const dauNode = getHeir("daughters");
  if (dauNode.count > 0 && !dauNode.isExcluded && !hasSons) {
    if (dauNode.count === 1) {
      dauNode.shareVal = 12; // 1/2
      dauNode.reason = "1/2 share because she is an only daughter and there is no son.";
    } else {
      dauNode.shareVal = 16; // 2/3
      dauNode.reason = "2/3 share (shared equally) because there are 2+ daughters and no son.";
    }
  }

  // Granddaughters (if no Sons, no Daughters, no Grandsons)
  const gdauNode = getHeir("granddaughters");
  if (gdauNode.count > 0 && !gdauNode.isExcluded && !hasSons && !hasGrandsons) {
    if (heirs.daughters === 0) {
      if (gdauNode.count === 1) {
        gdauNode.shareVal = 12; // 1/2
        gdauNode.reason = "1/2 share because she is the only granddaughter and there is no closer heir.";
      } else {
        gdauNode.shareVal = 16; // 2/3
        gdauNode.reason = "2/3 share (shared equally) because there are 2+ granddaughters and no closer heirs.";
      }
    } else if (heirs.daughters === 1) {
      gdauNode.shareVal = 4; // 1/6 (completing 2/3 with single daughter)
      gdauNode.reason = "1/6 (completing 2/3) because there is exactly one daughter and no son/grandson.";
    }
  }

  // Uterine Siblings
  const utBNode = getHeir("uterineBrothers");
  const utSNode = getHeir("uterineSisters");
  const utBActive = utBNode.count > 0 && !utBNode.isExcluded;
  const utSActive = utSNode.count > 0 && !utSNode.isExcluded;

  if (utBActive || utSActive) {
    const totalUtCount = (utBActive ? utBNode.count : 0) + (utSActive ? utSNode.count : 0);
    if (totalUtCount === 1) {
      if (utBActive) {
        utBNode.shareVal = 4; // 1/6
        utBNode.reason = "1/6 because there is only 1 uterine sibling and no child/father.";
      } else {
        utSNode.shareVal = 4; // 1/6
        utSNode.reason = "1/6 because there is only 1 uterine sibling and no child/father.";
      }
    } else {
      // 1/3 shared equally between brothers and sisters
      const sharedShare = 8;
      if (utBActive) {
        utBNode.shareVal = (sharedShare / totalUtCount) * utBNode.count;
        utBNode.reason = `1/3 (shared equally 1:1 ratio: ${(1 / (3 * totalUtCount)).toFixed(3)} each) because there are 2+ uterine siblings.`;
      }
      if (utSActive) {
        utSNode.shareVal = (sharedShare / totalUtCount) * utSNode.count;
        utSNode.reason = `1/3 (shared equally 1:1 ratio: ${(1 / (3 * totalUtCount)).toFixed(3)} each) because there are 2+ uterine siblings.`;
      }
    }
  }

  // Full Sisters (if no Brother, no child/grandchild, no father/grandfather)
  const fSisNode = getHeir("fullSisters");
  if (fSisNode.count > 0 && !fSisNode.isExcluded && heirs.fullBrothers === 0 && !hasDescendants && heirs.father === 0 && (madhab === "hanafi" || heirs.paternalGrandfather === 0)) {
    if (fSisNode.count === 1) {
      fSisNode.shareVal = 12; // 1/2
      fSisNode.reason = "1/2 fixed share because she is a single sister with no brother or descendants.";
    } else {
      fSisNode.shareVal = 16; // 2/3
      fSisNode.reason = "2/3 fixed share (shared equally) because there are 2+ sisters, no brother or descendants.";
    }
  }

  // Consanguine Sisters
  const cSisNode = getHeir("consanguineSisters");
  if (cSisNode.count > 0 && !cSisNode.isExcluded && heirs.consanguineBrothers === 0 && !hasDescendants && heirs.father === 0 && (madhab === "hanafi" || heirs.paternalGrandfather === 0)) {
    const fSisSharedCount = heirs.fullSisters;
    if (fSisSharedCount === 0) {
      if (cSisNode.count === 1) {
        cSisNode.shareVal = 12;
        cSisNode.reason = "1/2 fixed share because she is a single consanguine sister with no siblings or descendants.";
      } else {
        cSisNode.shareVal = 16;
        cSisNode.reason = "2/3 fixed share (shared equally) because there are 2+ consanguine sisters, no brothers or descendants.";
      }
    } else if (fSisSharedCount === 1 && heirs.fullBrothers === 0) {
      cSisNode.shareVal = 4; // 1/6 (completing 2/3)
      cSisNode.reason = "1/6 fixed share (completing 2/3) because there is exactly one full sister.";
    }
  }

  // 4. Check Sum of Fixed Shares
  const sumShares = heirsList.reduce((acc, curr) => acc + curr.shareVal, 0);

  trace.push({
    title: "Zawil Furud (Fixed Shares) Summation",
    description: `Sum of fixed shares is ${sumShares}/${baseScale}. Active shares: ` + heirsList
      .filter(h => h.count > 0 && h.shareVal > 0)
      .map(h => `${h.name}: ${h.shareVal}/${baseScale}`)
      .join(", "),
  });

  // 5. Check Awl (Shares sum > 24)
  if (sumShares > baseScale) {
    // Scale divisor up
    const newDivisor = sumShares;
    trace.push({
      title: "Awl (Increase of Denominator)",
      description: `Sum of shares (${sumShares}/${baseScale}) exceeds 1. The denominator increases to ${newDivisor} to scale shares down proportionally.`,
    });
    baseScale = newDivisor;
  } 
  // 6. Otherwise if sum < 24, determine Residue / Asabah distribution
  else if (sumShares < baseScale) {
    const residue = baseScale - sumShares;
    
    // Check if there are Residuaries (Asabah)
    // Priority checklist:
    // 1. Sons (sharing 2:1 with daughters)
    // 2. Grandsons (sharing 2:1 with granddaughters - if no sons)
    // 3. Father (gets remaining Asabah if only female descendants or no descendants)
    // 4. Paternal Grandfather (under Hanafi - gets remainder if no father / no descendants)
    // 5. Full Brothers (sharing 2:1 with full sisters)
    //    - OR Full Sisters if they become Asabah ma'al Ghair with daughters (heirs.daughters > 0 || heirs.granddaughters > 0)
    // 6. Consanguine Brothers (sharing 2:1 with consanguine sisters)
    //    - OR Consanguine Sisters if they become Asabah ma'al Ghair with daughters
    
    let asabaFound = false;

    // Check Sons & Daughters
    if (heirsList.find(h => h.key === "sons")!.count > 0) {
      asabaFound = true;
      const sonN = getHeir("sons");
      const dauN = getHeir("daughters");
      
      const parts = (sonN.count * 2) + dauN.count;
      sonN.shareVal += (residue / parts) * (sonN.count * 2);
      sonN.reason = `Residuary Asabah: Shares remainder of estate with daughters in 2:1 ratio.`;
      
      if (dauN.count > 0) {
        dauN.shareVal = (residue / parts) * dauN.count;
        dauN.reason = `Residuary Asabah: Shares remainder of estate with sons in 1:2 ratio.`;
      }
    }
    // Check Grandsons & Granddaughters
    else if (heirsList.find(h => h.key === "grandsons")!.count > 0 && !getHeir("grandsons").isExcluded) {
      asabaFound = true;
      const gsonN = getHeir("grandsons");
      const gdauN = getHeir("granddaughters");
      
      const parts = (gsonN.count * 2) + gdauN.count;
      gsonN.shareVal += (residue / parts) * (gsonN.count * 2);
      gsonN.reason = `Residuary Asabah: Shares remainder of estate with granddaughters in 2:1 ratio.`;

      if (gdauN.count > 0 && !gdauN.isExcluded) {
        gdauN.shareVal = (residue / parts) * gdauN.count;
        gdauN.reason = `Residuary Asabah: Shares remainder of estate with grandsons in 1:2 ratio.`;
      }
    }
    // Check Father in presence of Daughters/Granddaughters (gets fixed 1/6 + Asaba)
    else if (heirs.father > 0 && (hasDaughters || hasGranddaughters)) {
      asabaFound = true;
      const fatN = getHeir("father");
      fatN.shareVal += residue;
      fatN.reason = `Fixed Share 1/6 + Residuary Asabah: Receives remainder because there are female descendants but no male heirs.`;
    }
    // Check Father in absence of descendants (gets full remainder)
    else if (heirs.father > 0 && !hasDescendants) {
      asabaFound = true;
      const fatN = getHeir("father");
      fatN.shareVal = residue;
      fatN.reason = `Residuary Asabah: Receives 100% of remainder because there are no descendants.`;
    }
    // Check Paternal Grandfather (Hanafi or no siblings exists)
    else if (heirs.paternalGrandfather > 0 && !getHeir("paternalGrandfather").isExcluded && (madhab === "hanafi" || (heirs.fullBrothers === 0 && heirs.fullSisters === 0 && heirs.consanguineBrothers === 0 && heirs.consanguineSisters === 0))) {
      asabaFound = true;
      const gfN = getHeir("paternalGrandfather");
      gfN.shareVal += residue;
      gfN.reason = `Residuary Asabah: Receives remainder because there is no father.`;
    }
    // Check non-Hanafi Paternal Grandfather Muqasamah with Siblings
    else if (heirs.paternalGrandfather > 0 && !getHeir("paternalGrandfather").isExcluded && madhab !== "hanafi") {
      asabaFound = true;
      const gfN = getHeir("paternalGrandfather");
      const fBroN = getHeir("fullBrothers");
      const fSisN = getHeir("fullSisters");
      const cBroN = getHeir("consanguineBrothers");
      const cSisN = getHeir("consanguineSisters");

      // Compare three options for grandfather's share:
      // Option 1: 1/6 of whole estate (standard)
      const op1 = baseScale * (1 / 6);
      // Option 2: 1/3 of residue
      const op2 = residue / 3;
      // Option 3: Muqasamah (division as a brother)
      // Active siblings count:
      const sibBroCount = (fBroN.count > 0 && !fBroN.isExcluded) ? fBroN.count : ((cBroN.count > 0 && !cBroN.isExcluded) ? cBroN.count : 0);
      const sibSisCount = (fSisN.count > 0 && !fSisN.isExcluded) ? fSisN.count : ((cSisN.count > 0 && !cSisN.isExcluded) ? cSisN.count : 0);
      
      const parts = 2 + (sibBroCount * 2) + sibSisCount; // Grandfather acts as a brother (2 parts)
      const op3 = (residue / parts) * 2;

      // Choose maximum
      const bestShareVal = Math.max(op1, op2, op3);
      gfN.shareVal = bestShareVal;

      const remainingResidue = Math.max(0, residue - bestShareVal);

      // Remaining goes to siblings:
      if (remainingResidue > 0) {
        if (fBroN.count > 0 || fSisN.count > 0) {
          const sibParts = (fBroN.count * 2) + fSisN.count;
          if (sibParts > 0) {
            if (fBroN.count > 0) {
              fBroN.shareVal = (remainingResidue / sibParts) * (fBroN.count * 2);
              fBroN.reason = `Shared residue with Paternal Grandfather (Muqasamah) in Shafi'i/Maliki/Hanbali.`;
            }
            if (fSisN.count > 0) {
              fSisN.shareVal = (remainingResidue / sibParts) * fSisN.count;
              fSisN.reason = `Shared residue with Paternal Grandfather (Muqasamah) in Shafi'i/Maliki/Hanbali.`;
            }
          }
        } else if (cBroN.count > 0 || cSisN.count > 0) {
          const sibParts = (cBroN.count * 2) + cSisN.count;
          if (sibParts > 0) {
            if (cBroN.count > 0) {
              cBroN.shareVal = (remainingResidue / sibParts) * (cBroN.count * 2);
              cBroN.reason = `Shared residue with Paternal Grandfather (Muqasamah) in Shafi'i/Maliki/Hanbali.`;
            }
            if (cSisN.count > 0) {
              cSisN.shareVal = (remainingResidue / sibParts) * cSisN.count;
              cSisN.reason = `Shared residue with Paternal Grandfather (Muqasamah) in Shafi'i/Maliki/Hanbali.`;
            }
          }
        }
      }

      if (bestShareVal === op3) {
        gfN.reason = `Muqasamah (Best Option): Shares remainder with siblings, treated as a brother.`;
      } else if (bestShareVal === op2) {
        gfN.reason = `1/3 of Remainder (Best Option): Receives 1/3 of remaining assets after spouse shares.`;
      } else {
        gfN.reason = `1/6 of Estate (Best Option): Receives 1/6 minimum guaranteed share of gross estate.`;
      }
    }
    // Check Full Brothers / Full Sisters Asaba
    else if (heirs.fullBrothers > 0 && !getHeir("fullBrothers").isExcluded) {
      asabaFound = true;
      const fBroN = getHeir("fullBrothers");
      const fSisN = getHeir("fullSisters");
      
      const parts = (fBroN.count * 2) + fSisN.count;
      fBroN.shareVal = (residue / parts) * (fBroN.count * 2);
      fBroN.reason = `Residuary Asabah: Shares remainder with sisters in 2:1 ratio.`;

      if (fSisN.count > 0 && !fSisN.isExcluded) {
        fSisN.shareVal = (residue / parts) * fSisN.count;
        fSisN.reason = `Residuary Asabah: Shares remainder with brothers in 1:2 ratio.`;
      }
    }
    // Check Full Sister Asabah ma'al Ghair (with daughters)
    else if (heirs.fullSisters > 0 && !getHeir("fullSisters").isExcluded && hasDaughters) {
      asabaFound = true;
      const fSisN = getHeir("fullSisters");
      fSisN.shareVal = residue; // gets all remainder
      fSisN.reason = `Residuary Asabah ma'al Ghair: Shares remainder of estate due to presence of daughters.`;
    }
    // Check Consanguine Brothers / Consanguine Sisters Asaba
    else if (heirs.consanguineBrothers > 0 && !getHeir("consanguineBrothers").isExcluded) {
      asabaFound = true;
      const cBroN = getHeir("consanguineBrothers");
      const cSisN = getHeir("consanguineSisters");
      
      const parts = (cBroN.count * 2) + cSisN.count;
      cBroN.shareVal = (residue / parts) * (cBroN.count * 2);
      cBroN.reason = `Residuary Asabah: Shares remainder with consanguine sisters in 2:1 ratio.`;

      if (cSisN.count > 0 && !cSisN.isExcluded) {
        cSisN.shareVal = (residue / parts) * cSisN.count;
        cSisN.reason = `Residuary Asabah: Shares remainder with consanguine brothers in 1:2 ratio.`;
      }
    }
    // Check Consanguine Sister Asabah ma'al Ghair (with daughters)
    else if (heirs.consanguineSisters > 0 && !getHeir("consanguineSisters").isExcluded && hasDaughters) {
      asabaFound = true;
      const cSisN = getHeir("consanguineSisters");
      cSisN.shareVal = residue;
      cSisN.reason = `Residuary Asabah ma'al Ghair: Shares remainder of estate due to presence of daughters.`;
    }

    if (asabaFound) {
      trace.push({
        title: "Residue Allocation (Asabah)",
        description: `Remaining residue of ${residue}/${baseScale} was distributed to the residuary heirs (Asabah).`,
      });
    }

    // 7. If no Asaba was found, we must apply Radd (Return to fixed share heirs)
    if (!asabaFound && residue > 0) {
      // Spouse does not get Radd under standard Sunni rules unless there are no other heirs.
      // Filter out Husband, Wife, and any excluded heirs.
      const raddHeirs = heirsList.filter(h => h.count > 0 && !h.isExcluded && h.key !== "husband" && h.key !== "wife" && h.shareVal > 0);
      
      if (raddHeirs.length > 0) {
        const sumRaddShares = raddHeirs.reduce((acc, curr) => acc + curr.shareVal, 0);
        
        raddHeirs.forEach(h => {
          const raddBonus = (h.shareVal / sumRaddShares) * residue;
          h.shareVal += raddBonus;
          h.reason += ` + Radd share (Receives proportional share of remainder ${residue}/${baseScale} because there are no residuaries).`;
        });

        trace.push({
          title: "Radd (Return of Remainder)",
          description: `Remainder of ${residue}/${baseScale} was distributed back to non-spouse fixed share heirs proportionally.`,
        });
      } else {
        // If only spouse is left, Radd is applied selectively based on Madhab.
        const spouseHeir = heirsList.find(h => h.count > 0 && (h.key === "husband" || h.key === "wife"));
        if (spouseHeir) {
          if (madhab === "maliki") {
            spouseHeir.shareVal += residue;
            spouseHeir.reason += ` + Receives remainder as Radd (Maliki rule) since no other heirs exist.`;
            trace.push({
              title: "Radd to Spouse",
              description: `Remainder of ${residue}/${baseScale} was returned to the spouse under Maliki rules since no other heirs exist.`,
            });
          } else {
            // Hanafi, Shafi'i, Hanbali: Do NOT assign residue to spouse
            raddWarning = "This scenario follows classical fiqh where distant relatives (Dhawul Arham) may inherit the remaining estate. Please consult a qualified Islamic scholar.";
            trace.push({
              title: "Radd to Spouse Not Allowed",
              description: `Remainder of ${residue}/${baseScale} was not returned to the spouse under ${madhab.toUpperCase()} rules. Distant relatives (Dhawul Arham) inherit the remainder.`,
            });
          }
        }
      }
    }
  }

  // Convert scaling shares down to percentages and amounts
  const resultingShares: HeirShare[] = heirsList
    .filter(h => h.count > 0)
    .map(h => {
      const parentName = h.name;
      const relation = h.relation;
      const count = h.count;
      const isExcluded = h.isExcluded;
      
      let pct = 0;
      let amt = 0;
      let fracText = "0";

      if (!isExcluded && h.shareVal > 0) {
        pct = (h.shareVal / baseScale) * 100;
        amt = (h.shareVal / baseScale) * netEstate;
        
        // Helper to simplify fractions
        const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
        // Standardize numerator / denominator
        // Round to nearest integer for simple display if very close
        const approxNumerator = Math.round(h.shareVal * 240);
        const approxDenominator = Math.round(baseScale * 240);
        const commonDiv = gcd(approxNumerator, approxDenominator);
        
        const num = approxNumerator / commonDiv;
        const den = approxDenominator / commonDiv;

        fracText = num === den ? "1" : `${num}/${den}`;
        
        // Adjust for multiple heirs in group
        if (count > 1) {
          pct = pct / count;
          amt = amt / count;
          fracText = `${fracText} (divided by ${count})`;
        }
      }

      return {
        id: h.key,
        name: count > 1 ? `${parentName}s (Each)` : parentName,
        relation,
        fraction: fracText,
        percentage: parseFloat(pct.toFixed(2)),
        amount: Math.round(amt),
        reason: isExcluded ? `Excluded by ${h.excludedBy}.` : h.reason,
        isExcluded,
        excludedBy: h.excludedBy,
      };
    });

  const totalDistributed = resultingShares
    .filter(s => !s.isExcluded)
    .reduce((acc, curr) => acc + (curr.amount * (heirs[curr.id as keyof typeof heirs] || 1)), 0);

  const remainingEstate = Math.max(0, netEstate - totalDistributed);

  return {
    grossEstate,
    funeralExpenses,
    debts,
    wasiyyah,
    wasiyyahCapped,
    netEstate,
    totalDistributed,
    remainingEstate,
    heirsCount: heirsList.filter(h => h.count > 0 && !h.isExcluded).reduce((acc, curr) => acc + curr.count, 0),
    shares: resultingShares,
    trace,
    raddWarning,
  };
}
