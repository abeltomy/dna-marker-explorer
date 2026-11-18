// DNA Marker Explorer — marker database.
// Edit this file to add or change markers; run `python3 tools/validate.py` afterwards.
// Alleles are GRCh37 plus strand. genotypes = [0, 1, 2 copies of alt].
// Schema and grading rules: docs/EVIDENCE.md · docs/ANCESTRY.md
const MARKERS = [
 {
  "id": "rs4244285",
  "gene": "CYP2C19",
  "variant": "*2 (c.681G>A) no function",
  "category": "Drug response",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *2 allele"
   },
   {
    "status": "act",
    "text": "One *2 (no-function) allele"
   },
   {
    "status": "act",
    "text": "Two *2 alleles: poor metaboliser"
   }
  ],
  "effect": "Clopidogrel: reduced activation; CPIC recommends an alternative for IM/PM",
  "note": "*2 is common in South Asians (~30–35% allele frequency). See the combined CYP2C19 call above.",
  "pmids": [
   35034351
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs4986893",
  "gene": "CYP2C19",
  "variant": "*3 (c.636G>A) no function",
  "category": "Drug response",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *3 allele"
   },
   {
    "status": "act",
    "text": "One *3 (no-function) allele"
   },
   {
    "status": "act",
    "text": "Two *3 alleles: poor metaboliser"
   }
  ],
  "effect": "As for *2",
  "note": "Mainly found in East and South Asians.",
  "pmids": [
   35034351
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs12248560",
  "gene": "CYP2C19",
  "variant": "*17 (c.-806C>T) increased function",
  "category": "Drug response",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *17 allele"
   },
   {
    "status": "info",
    "text": "One *17 allele: faster CYP2C19 activity"
   },
   {
    "status": "mod",
    "text": "Two *17 alleles: ultrarapid metaboliser"
   }
  ],
  "effect": "Lower exposure to escitalopram, sertraline, voriconazole and PPIs; CPIC may suggest dose changes or alternatives",
  "note": "",
  "pmids": [
   35034351,
   37032427
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1799853",
  "gene": "CYP2C9",
  "variant": "*2 (Arg144Cys) decreased function",
  "category": "Drug response",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *2 allele"
   },
   {
    "status": "mod",
    "text": "One *2 allele"
   },
   {
    "status": "act",
    "text": "Two *2 alleles"
   }
  ],
  "effect": "Warfarin, phenytoin, NSAIDs (celecoxib, meloxicam…): reduced clearance",
  "note": "Rare in South Asians compared with Europeans.",
  "pmids": [
   28198005,
   32189324
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1057910",
  "gene": "CYP2C9",
  "variant": "*3 (Ile359Leu) strongly decreased function",
  "category": "Drug response",
  "grade": "A",
  "ref": "A",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *3 allele"
   },
   {
    "status": "act",
    "text": "One *3 allele: intermediate metaboliser"
   },
   {
    "status": "act",
    "text": "Two *3 alleles: poor metaboliser"
   }
  ],
  "effect": "Warfarin dose ↓; CPIC: start NSAIDs such as celecoxib/meloxicam at lower doses or use alternatives; phenytoin dose ↓",
  "note": "*3 is the main decreased-function CYP2C9 allele in South Asians (~10%).",
  "pmids": [
   28198005,
   32189324,
   32779747
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs9923231",
  "gene": "VKORC1",
  "variant": "-1639G>A",
  "category": "Drug response",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Standard warfarin sensitivity"
   },
   {
    "status": "mod",
    "text": "Increased warfarin sensitivity: lower dose"
   },
   {
    "status": "act",
    "text": "High warfarin sensitivity: much lower dose"
   }
  ],
  "effect": "Explains ~25% of warfarin dose variation",
  "note": "",
  "pmids": [
   28198005
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs2108622",
  "gene": "CYP4F2",
  "variant": "*3 (Val433Met)",
  "category": "Drug response",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "Slightly higher warfarin dose needed"
   },
   {
    "status": "info",
    "text": "Higher warfarin dose needed (~1 mg/day)"
   }
  ],
  "effect": "Small additional effect on warfarin dose",
  "note": "",
  "pmids": [
   28198005
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs4149056",
  "gene": "SLCO1B1",
  "variant": "*5 / c.521T>C",
  "category": "Drug response",
  "grade": "A",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "Normal statin transport"
   },
   {
    "status": "mod",
    "text": "Decreased function: higher simvastatin myopathy risk (~4×)"
   },
   {
    "status": "act",
    "text": "Poor function: high simvastatin myopathy risk (~17×)"
   }
  ],
  "effect": "CPIC: avoid high-dose simvastatin; consider other statins or doses",
  "note": "",
  "pmids": [
   35152405,
   18650507
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs2231142",
  "gene": "ABCG2",
  "variant": "Gln141Lys (c.421C>A)",
  "category": "Drug response",
  "grade": "A",
  "ref": "G",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "mod",
    "text": "Reduced ABCG2: higher rosuvastatin levels; higher uric acid / gout risk"
   },
   {
    "status": "mod",
    "text": "Two copies: CPIC suggests rosuvastatin ≤20 mg; higher gout risk"
   }
  ],
  "effect": "Gout OR ~1.7 per allele",
  "note": "Common in East Asians, less common in South Asians.",
  "pmids": [
   35152405
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1800460",
  "gene": "TPMT",
  "variant": "*3B (Ala154Thr)",
  "category": "Drug response",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *3B"
   },
   {
    "status": "act",
    "text": "Possible intermediate TPMT activity (often *3A with *3C)"
   },
   {
    "status": "act",
    "text": "Low TPMT activity likely"
   }
  ],
  "effect": "Thiopurines (azathioprine, mercaptopurine): toxicity risk; CPIC dose reduction",
  "note": "",
  "pmids": [
   30447069
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1142345",
  "gene": "TPMT",
  "variant": "*3C (Tyr240Cys)",
  "category": "Drug response",
  "grade": "A",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *3C"
   },
   {
    "status": "act",
    "text": "Intermediate TPMT activity"
   },
   {
    "status": "act",
    "text": "Low TPMT activity"
   }
  ],
  "effect": "Thiopurines: CPIC dose reduction",
  "note": "*3C is the most common TPMT variant in Asians.",
  "pmids": [
   30447069
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs116855232",
  "gene": "NUDT15",
  "variant": "*3 (Arg139Cys)",
  "category": "Drug response",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Normal NUDT15"
   },
   {
    "status": "act",
    "text": "Intermediate: thiopurine dose reduction"
   },
   {
    "status": "act",
    "text": "Poor: thiopurines need drastic dose reduction"
   }
  ],
  "effect": "Major cause of thiopurine toxicity in Asians",
  "note": "Relatively common in South and East Asians (~5–10%).",
  "pmids": [
   30447069
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs3918290",
  "gene": "DPYD",
  "variant": "*2A (c.1905+1G>A)",
  "category": "Drug response",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *2A"
   },
   {
    "status": "act",
    "text": "Intermediate DPD activity: 50% fluoropyrimidine dose"
   },
   {
    "status": "act",
    "text": "DPD deficiency: avoid 5-FU/capecitabine"
   }
  ],
  "effect": "Severe toxicity with 5-FU/capecitabine",
  "note": "Rare (~1%). Arrays don't test other DPYD variants.",
  "pmids": [
   29152729
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs776746",
  "gene": "CYP3A5",
  "variant": "*3 (splice defect)",
  "category": "Drug response",
  "grade": "A",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "info",
    "text": "*1/*1 expresser: may need a higher tacrolimus dose"
   },
   {
    "status": "info",
    "text": "*1/*3 expresser: may need a higher tacrolimus dose"
   },
   {
    "status": "ok",
    "text": "*3/*3 non-expresser (most common outside Africa): standard tacrolimus dosing"
   }
  ],
  "effect": "Tacrolimus dose (transplant)",
  "note": "Effect allele here is *3 (C).",
  "pmids": [
   25801146
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs4148323",
  "gene": "UGT1A1",
  "variant": "*6 (Gly71Arg)",
  "category": "Drug response",
  "grade": "B",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *6"
   },
   {
    "status": "mod",
    "text": "Reduced UGT1A1: mild Gilbert-type bilirubin rise; irinotecan toxicity ↑"
   },
   {
    "status": "act",
    "text": "Reduced UGT1A1: irinotecan toxicity risk"
   }
  ],
  "effect": "Irinotecan neutropenia; atazanavir jaundice",
  "note": "Mainly Asian. *28 (TA repeat) is not reliably called on arrays.",
  "pmids": [
   26417955
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs3892097",
  "gene": "CYP2D6",
  "variant": "*4 (splice defect)",
  "category": "Drug response",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No *4 detected"
   },
   {
    "status": "mod",
    "text": "One *4 (no-function) allele"
   },
   {
    "status": "act",
    "text": "Two *4: likely poor metaboliser (codeine, tramadol ineffective)"
   }
  ],
  "effect": "Codeine, tramadol, many antidepressants and antipsychotics, tamoxifen",
  "note": "Arrays miss CYP2D6 deletions/duplications. Treat this as partial information only.",
  "pmids": [
   33387367
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs5030868",
  "gene": "G6PD",
  "variant": "Mediterranean (c.563C>T, X-linked)",
  "category": "Drug response",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "xLinked": true,
  "genotypes": [
   {
    "status": "ok",
    "text": "No Mediterranean variant"
   },
   {
    "status": "mod",
    "text": "Heterozygous (females): variable deficiency"
   },
   {
    "status": "act",
    "text": "G6PD deficiency (male hemizygous or female homozygous)"
   }
  ],
  "effect": "Haemolysis with primaquine, dapsone, rasburicase, fava beans",
  "note": "Present in parts of India. Other G6PD variants aren't tested; a blood enzyme test is definitive.",
  "pmids": [
   36049896
  ],
  "guideline": "CPIC",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1799971",
  "gene": "OPRM1",
  "variant": "A118G (Asn40Asp)",
  "category": "Drug response",
  "grade": "C",
  "ref": "A",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "May need slightly more opioid for pain relief"
   },
   {
    "status": "info",
    "text": "May need more opioid for pain relief"
   }
  ],
  "effect": "Small; CPIC makes no dosing recommendation",
  "note": "",
  "pmids": [
   33387367
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs429358",
  "gene": "APOE",
  "variant": "Cys112Arg (defines ε4)",
  "category": "Heart & brain",
  "grade": "A",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "No ε4 at this position"
   },
   {
    "status": "mod",
    "text": "One ε4-defining allele"
   },
   {
    "status": "act",
    "text": "Two ε4-defining alleles"
   }
  ],
  "effect": "See the combined APOE call. ε4: Alzheimer's OR ~3 (one copy), ~8–12 (two); higher LDL",
  "note": "",
  "pmids": [
   9343467
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs7412",
  "gene": "APOE",
  "variant": "Arg158Cys (defines ε2)",
  "category": "Heart & brain",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No ε2 at this position"
   },
   {
    "status": "good",
    "text": "One ε2-defining allele"
   },
   {
    "status": "info",
    "text": "Two ε2 alleles"
   }
  ],
  "effect": "ε2: lower Alzheimer's risk; ε2/ε2 can cause type III hyperlipoproteinaemia",
  "note": "",
  "pmids": [
   9343467
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1333049",
  "gene": "9p21 (CDKN2B-AS1)",
  "variant": "Coronary artery disease locus",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "G",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "Lower-risk genotype"
   },
   {
    "status": "mod",
    "text": "Modestly higher coronary disease risk"
   },
   {
    "status": "mod",
    "text": "Higher coronary disease risk"
   }
  ],
  "effect": "OR ~1.2–1.3 per allele (replicated in South Asians)",
  "note": "",
  "pmids": [
   17478681
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "SAS",
    "EAS"
   ]
  }
 },
 {
  "id": "rs10455872",
  "gene": "LPA",
  "variant": "Lp(a) variant",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "A",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "mod",
    "text": "Higher Lp(a) levels"
   },
   {
    "status": "act",
    "text": "Much higher Lp(a)"
   }
  ],
  "effect": "Coronary disease OR ~1.5 per allele",
  "note": "Rare in South Asians, whose high Lp(a) comes from other variants. A one-off Lp(a) blood test is more informative.",
  "pmids": [
   20032323
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs3798220",
  "gene": "LPA",
  "variant": "Ile4399Met",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "mod",
    "text": "Higher Lp(a)"
   },
   {
    "status": "act",
    "text": "Much higher Lp(a)"
   }
  ],
  "effect": "Coronary disease OR ~1.5–2",
  "note": "",
  "pmids": [
   20032323
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs662799",
  "gene": "APOA5",
  "variant": "-1131T>C",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "A",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "mod",
    "text": "Higher triglycerides (~+15%)"
   },
   {
    "status": "mod",
    "text": "Higher triglycerides (~+30%)"
   }
  ],
  "effect": "Triglycerides ↑",
  "note": "More common in South and East Asians.",
  "pmids": [
   11588264
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS",
    "SAS"
   ]
  }
 },
 {
  "id": "rs12740374",
  "gene": "CELSR2/SORT1",
  "variant": "1p13 LDL locus",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "G",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "Typical (common) genotype"
   },
   {
    "status": "good",
    "text": "Lower LDL cholesterol"
   },
   {
    "status": "good",
    "text": "Lower LDL; lower coronary disease risk"
   }
  ],
  "effect": "LDL ~−5 mg/dL per allele",
  "note": "",
  "pmids": [
   20686566
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS",
    "AFR"
   ]
  }
 },
 {
  "id": "rs11591147",
  "gene": "PCSK9",
  "variant": "Arg46Leu loss of function",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "G",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "good",
    "text": "Lower LDL (~−15%); lower coronary disease risk"
   },
   {
    "status": "good",
    "text": "Much lower LDL"
   }
  ],
  "effect": "CHD risk ~−45%",
  "note": "Rare outside Europe.",
  "pmids": [
   16554528
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs6025",
  "gene": "F5",
  "variant": "Factor V Leiden",
  "category": "Heart & brain",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No Factor V Leiden"
   },
   {
    "status": "act",
    "text": "Heterozygous: venous thrombosis risk ~4–5×"
   },
   {
    "status": "act",
    "text": "Homozygous: venous thrombosis risk ~10–50×"
   }
  ],
  "effect": "Relevant to oestrogen pills, surgery, long-haul flights",
  "note": "Rare in South Asians.",
  "pmids": [
   8164741
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1799963",
  "gene": "F2",
  "variant": "Prothrombin G20210A",
  "category": "Heart & brain",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "No prothrombin variant"
   },
   {
    "status": "act",
    "text": "Heterozygous: venous thrombosis risk ~2–3×"
   },
   {
    "status": "act",
    "text": "Homozygous: high thrombosis risk"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   8916933
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1800562",
  "gene": "HFE",
  "variant": "C282Y",
  "category": "Heart & brain",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "No C282Y"
   },
   {
    "status": "info",
    "text": "Carrier (usually harmless)"
   },
   {
    "status": "act",
    "text": "Homozygous: haemochromatosis risk; check ferritin/transferrin saturation"
   }
  ],
  "effect": "",
  "note": "Very rare outside Northern Europe.",
  "pmids": [
   8696333
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1799945",
  "gene": "HFE",
  "variant": "H63D",
  "category": "Heart & brain",
  "grade": "B",
  "ref": "C",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "No H63D"
   },
   {
    "status": "info",
    "text": "Carrier: slightly higher iron indices"
   },
   {
    "status": "info",
    "text": "Homozygous: mildly higher iron; low disease risk"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1801133",
  "gene": "MTHFR",
  "variant": "C677T",
  "category": "Heart & brain",
  "grade": "C",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical enzyme activity"
   },
   {
    "status": "info",
    "text": "~65% activity: usually no consequence"
   },
   {
    "status": "mod",
    "text": "~30% activity: higher homocysteine if folate intake is low"
   }
  ],
  "effect": "Clinical guidelines (ACMG) advise against MTHFR testing for disease risk",
  "note": "",
  "pmids": [
   7647779
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1801131",
  "gene": "MTHFR",
  "variant": "A1298C",
  "category": "Heart & brain",
  "grade": "C",
  "ref": "T",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "Minimal effect"
   },
   {
    "status": "info",
    "text": "Mild reduction; little clinical effect"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs7903146",
  "gene": "TCF7L2",
  "variant": "Type 2 diabetes locus",
  "category": "Metabolism",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Lower-risk genotype"
   },
   {
    "status": "mod",
    "text": "Type 2 diabetes risk ~1.4×"
   },
   {
    "status": "mod",
    "text": "Type 2 diabetes risk ~2×"
   }
  ],
  "effect": "The strongest common T2D variant; replicated in Indians",
  "note": "South Asians already have higher baseline T2D risk; regular HbA1c checks and activity matter more than genotype.",
  "pmids": [
   16415884
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "SAS",
    "EAS",
    "AFR",
    "AMR"
   ]
  }
 },
 {
  "id": "rs13266634",
  "gene": "SLC30A8",
  "variant": "Arg325Trp",
  "category": "Metabolism",
  "grade": "B",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "good",
    "text": "Protective genotype"
   },
   {
    "status": "info",
    "text": "Typical risk"
   },
   {
    "status": "info",
    "text": "Slightly higher T2D risk (~1.15× per allele)"
   }
  ],
  "effect": "Effect allele C (Arg325) is the common one",
  "note": "",
  "pmids": [
   17293876
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS",
    "SAS"
   ]
  }
 },
 {
  "id": "rs5219",
  "gene": "KCNJ11",
  "variant": "Glu23Lys",
  "category": "Metabolism",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "Slightly higher T2D risk (~1.15×)"
   },
   {
    "status": "mod",
    "text": "Higher T2D risk (~1.3×)"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS",
    "SAS"
   ]
  }
 },
 {
  "id": "rs1801282",
  "gene": "PPARG",
  "variant": "Pro12Ala",
  "category": "Metabolism",
  "grade": "B",
  "ref": "C",
  "alt": "G",
  "genotypes": [
   {
    "status": "info",
    "text": "Pro/Pro (common)"
   },
   {
    "status": "good",
    "text": "Ala carrier: ~15% lower T2D risk"
   },
   {
    "status": "good",
    "text": "Ala/Ala: lower T2D risk"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   10973253
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS"
   ]
  }
 },
 {
  "id": "rs10830963",
  "gene": "MTNR1B",
  "variant": "Melatonin receptor locus",
  "category": "Metabolism",
  "grade": "B",
  "ref": "C",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "Slightly higher fasting glucose; T2D OR ~1.1"
   },
   {
    "status": "mod",
    "text": "Higher fasting glucose"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   19060909
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS",
    "SAS"
   ]
  }
 },
 {
  "id": "rs9939609",
  "gene": "FTO",
  "variant": "Obesity locus",
  "category": "Metabolism",
  "grade": "B",
  "ref": "T",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "Lower-risk genotype"
   },
   {
    "status": "info",
    "text": "~+1.2 kg average body weight"
   },
   {
    "status": "mod",
    "text": "~+3 kg average; obesity OR ~1.7"
   }
  ],
  "effect": "Physical activity reduces the effect by ~30%",
  "note": "The effect is weaker in South Asians.",
  "pmids": [
   17434869
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "SAS",
    "EAS"
   ]
  }
 },
 {
  "id": "rs17782313",
  "gene": "MC4R",
  "variant": "Appetite / obesity locus",
  "category": "Metabolism",
  "grade": "B",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "Slightly higher BMI (~+0.2 kg/m²)"
   },
   {
    "status": "info",
    "text": "Higher BMI (~+0.4 kg/m²); associated with higher energy intake"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   18454148
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "SAS",
    "EAS"
   ]
  }
 },
 {
  "id": "rs738409",
  "gene": "PNPLA3",
  "variant": "Ile148Met",
  "category": "Metabolism",
  "grade": "B",
  "ref": "C",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "mod",
    "text": "Higher liver fat / fatty-liver (NAFLD) risk"
   },
   {
    "status": "act",
    "text": "Strong fatty-liver risk (~3× liver fat); worth an ALT check"
   }
  ],
  "effect": "The strongest common NAFLD variant; risk rises with alcohol and weight",
  "note": "Common in South Asians.",
  "pmids": [
   18820647
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "SAS",
    "EAS",
    "AFR",
    "AMR"
   ]
  }
 },
 {
  "id": "rs58542926",
  "gene": "TM6SF2",
  "variant": "Glu167Lys",
  "category": "Metabolism",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "mod",
    "text": "Higher liver fat; lower blood lipids"
   },
   {
    "status": "mod",
    "text": "Higher liver fat"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   24633158
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "AMR"
   ]
  }
 },
 {
  "id": "rs4988235",
  "gene": "LCT/MCM6",
  "variant": "-13910C>T lactase persistence",
  "category": "Nutrition",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "info",
    "text": "Lactase non-persistent: lactose intolerance likely in adulthood"
   },
   {
    "status": "ok",
    "text": "Lactase persistent (dominant)"
   },
   {
    "status": "ok",
    "text": "Lactase persistent"
   }
  ],
  "effect": "",
  "note": "Non-persistence is the global norm and common in South India.",
  "pmids": [
   11788828
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs182549",
  "gene": "LCT/MCM6",
  "variant": "-22018G>A",
  "category": "Nutrition",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "Consistent with non-persistence"
   },
   {
    "status": "ok",
    "text": "Consistent with lactase persistence"
   },
   {
    "status": "ok",
    "text": "Consistent with lactase persistence"
   }
  ],
  "effect": "In strong LD with rs4988235",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs671",
  "gene": "ALDH2",
  "variant": "*2 (Glu504Lys)",
  "category": "Nutrition",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "Normal acetaldehyde clearance"
   },
   {
    "status": "act",
    "text": "Alcohol flush; drinking sharply raises oesophageal cancer risk"
   },
   {
    "status": "act",
    "text": "Severe alcohol intolerance"
   }
  ],
  "effect": "Oesophageal cancer OR ~4–7 in drinkers (one copy)",
  "note": "Mostly East Asian.",
  "pmids": [
   19320537
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": [
    "EAS"
   ]
  }
 },
 {
  "id": "rs1229984",
  "gene": "ADH1B",
  "variant": "*2 (Arg48His)",
  "category": "Nutrition",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "Typical alcohol metabolism (most common outside East Asia)"
   },
   {
    "status": "good",
    "text": "Faster ethanol oxidation: lower alcohol-dependence risk"
   },
   {
    "status": "good",
    "text": "Fast: lower alcohol-dependence risk"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": [
    "EAS",
    "EUR"
   ]
  }
 },
 {
  "id": "rs762551",
  "gene": "CYP1A2",
  "variant": "*1F (-163C>A)",
  "category": "Nutrition",
  "grade": "C",
  "ref": "C",
  "alt": "A",
  "genotypes": [
   {
    "status": "info",
    "text": "Slower caffeine metaboliser"
   },
   {
    "status": "info",
    "text": "Slower caffeine metaboliser"
   },
   {
    "status": "ok",
    "text": "Fast caffeine metaboliser"
   }
  ],
  "effect": "One study linked slow metabolisers drinking ≥4 cups/day to higher MI risk; later studies are mixed",
  "note": "",
  "pmids": [
   16522833
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs2472297",
  "gene": "CYP1A1/CYP1A2",
  "variant": "Coffee-intake locus",
  "category": "Nutrition",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "Tend to drink slightly more coffee (faster clearance)"
   },
   {
    "status": "info",
    "text": "Tend to drink more coffee"
   }
  ],
  "effect": "~+0.2 cups/day per allele",
  "note": "",
  "pmids": [
   21490707
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs2282679",
  "gene": "GC",
  "variant": "Vitamin D binding protein",
  "category": "Nutrition",
  "grade": "B",
  "ref": "T",
  "alt": "G",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical vitamin D levels"
   },
   {
    "status": "info",
    "text": "Slightly lower 25(OH)D"
   },
   {
    "status": "mod",
    "text": "Lower 25(OH)D; higher deficiency risk"
   }
  ],
  "effect": "Deficiency OR ~1.2–1.5 per allele",
  "note": "At high latitudes (e.g. Sweden), winter supplementation matters more than genotype.",
  "pmids": [
   20541252
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS"
   ]
  }
 },
 {
  "id": "rs174547",
  "gene": "FADS1",
  "variant": "Fatty-acid desaturase",
  "category": "Nutrition",
  "grade": "B",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "Efficient omega-3/6 conversion"
   },
   {
    "status": "info",
    "text": "Somewhat lower conversion"
   },
   {
    "status": "info",
    "text": "Lower conversion of plant omega-3 (ALA → EPA); fish/algal sources help"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS"
   ]
  }
 },
 {
  "id": "rs7501331",
  "gene": "BCO1 (BCMO1)",
  "variant": "Arg267Ser",
  "category": "Nutrition",
  "grade": "C",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical beta-carotene → vitamin A conversion"
   },
   {
    "status": "info",
    "text": "~30% lower conversion"
   },
   {
    "status": "info",
    "text": "Lower conversion"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   19103647
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs601338",
  "gene": "FUT2",
  "variant": "Trp154Ter (secretor status)",
  "category": "Nutrition",
  "grade": "B",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "info",
    "text": "Secretor"
   },
   {
    "status": "info",
    "text": "Secretor (one non-secretor allele)"
   },
   {
    "status": "info",
    "text": "Non-secretor: higher B12 levels; resistant to norovirus"
   }
  ],
  "effect": "",
  "note": "In Asians a different non-secretor allele (rs1047781) also occurs.",
  "pmids": [
   18776911
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs2187668",
  "gene": "HLA-DQ2.5 (tag)",
  "variant": "Celiac predisposition",
  "category": "Nutrition",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "DQ2.5 not detected"
   },
   {
    "status": "mod",
    "text": "DQ2.5 carrier: needed for, but rarely causes, celiac disease"
   },
   {
    "status": "mod",
    "text": "Two DQ2.5 copies: higher celiac risk"
   }
  ],
  "effect": "~30% of people carry DQ2/DQ8; ~3% of carriers develop celiac",
  "note": "The tag was validated in Europeans; mainly useful to rule celiac out.",
  "pmids": [
   18509540
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs7454108",
  "gene": "HLA-DQ8 (tag)",
  "variant": "Celiac predisposition",
  "category": "Nutrition",
  "grade": "B",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "DQ8 not detected"
   },
   {
    "status": "mod",
    "text": "DQ8 carrier"
   },
   {
    "status": "mod",
    "text": "Two DQ8 copies"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   18509540
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs1061170",
  "gene": "CFH",
  "variant": "Tyr402His",
  "category": "Eyes, lungs & carrier",
  "grade": "B",
  "ref": "T",
  "alt": "C",
  "genotypes": [
   {
    "status": "ok",
    "text": "Lower AMD risk"
   },
   {
    "status": "mod",
    "text": "Age-related macular degeneration risk ~2.5×"
   },
   {
    "status": "act",
    "text": "AMD risk ~6×"
   }
  ],
  "effect": "Smoking multiplies the risk; not smoking and a diet with leafy greens help",
  "note": "Allele less common in Asians.",
  "pmids": [
   15761122
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS"
   ]
  }
 },
 {
  "id": "rs10490924",
  "gene": "ARMS2",
  "variant": "Ala69Ser",
  "category": "Eyes, lungs & carrier",
  "grade": "B",
  "ref": "G",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "Lower AMD risk"
   },
   {
    "status": "mod",
    "text": "AMD risk ~2.5×"
   },
   {
    "status": "act",
    "text": "AMD risk ~7×"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   16174643
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR",
    "EAS"
   ]
  }
 },
 {
  "id": "rs28929474",
  "gene": "SERPINA1",
  "variant": "Z allele (Glu342Lys)",
  "category": "Eyes, lungs & carrier",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No Z allele"
   },
   {
    "status": "mod",
    "text": "MZ carrier: avoid smoking; slight lung/liver risk"
   },
   {
    "status": "act",
    "text": "ZZ: alpha-1 antitrypsin deficiency"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs17580",
  "gene": "SERPINA1",
  "variant": "S allele (Glu264Val)",
  "category": "Eyes, lungs & carrier",
  "grade": "A",
  "ref": "T",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "No S allele (M)"
   },
   {
    "status": "info",
    "text": "MS: usually no effect"
   },
   {
    "status": "mod",
    "text": "SS: mild reduction"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs334",
  "gene": "HBB",
  "variant": "HbS (Glu6Val), sickle cell",
  "category": "Eyes, lungs & carrier",
  "grade": "A",
  "ref": "T",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "Not a sickle-cell carrier"
   },
   {
    "status": "act",
    "text": "Sickle-cell trait carrier: relevant for family planning"
   },
   {
    "status": "act",
    "text": "Sickle-cell disease genotype"
   }
  ],
  "effect": "",
  "note": "Present in parts of central and southern India (including Wayanad, Kerala).",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs16969968",
  "gene": "CHRNA5",
  "variant": "Asp398Asn",
  "category": "Eyes, lungs & carrier",
  "grade": "B",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "ok",
    "text": "Typical"
   },
   {
    "status": "info",
    "text": "If smoking: heavier dependence, higher lung cancer risk (~1.3×)"
   },
   {
    "status": "mod",
    "text": "If smoking: higher dependence and lung cancer risk"
   }
  ],
  "effect": "Matters only for smokers",
  "note": "",
  "pmids": [
   18385739
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": false,
   "replicatedIn": [
    "EUR"
   ]
  }
 },
 {
  "id": "rs1815739",
  "gene": "ACTN3",
  "variant": "Arg577Ter (R/X)",
  "category": "Traits & fitness",
  "grade": "C",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "RR: more fast-twitch α-actinin-3 (overrepresented in sprinters)"
   },
   {
    "status": "info",
    "text": "RX: mixed profile (most common)"
   },
   {
    "status": "info",
    "text": "XX: no α-actinin-3; slightly overrepresented in endurance athletes"
   }
  ],
  "effect": "Explains only ~2–3% of variation in muscle performance",
  "note": "",
  "pmids": [
   12879365
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs4680",
  "gene": "COMT",
  "variant": "Val158Met",
  "category": "Traits & fitness",
  "grade": "C",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "info",
    "text": "Val/Val: faster dopamine breakdown in the prefrontal cortex"
   },
   {
    "status": "info",
    "text": "Val/Met: intermediate"
   },
   {
    "status": "info",
    "text": "Met/Met: slower breakdown; small effects on pain sensitivity and stress"
   }
  ],
  "effect": "Behavioural effects are small and inconsistent",
  "note": "",
  "pmids": [
   8807664
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs6265",
  "gene": "BDNF",
  "variant": "Val66Met",
  "category": "Traits & fitness",
  "grade": "C",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "Val/Val"
   },
   {
    "status": "info",
    "text": "Val/Met: slightly less activity-dependent BDNF release"
   },
   {
    "status": "info",
    "text": "Met/Met"
   }
  ],
  "effect": "Memory effects are small",
  "note": "",
  "pmids": [
   12553913
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs12913832",
  "gene": "HERC2/OCA2",
  "variant": "Eye colour",
  "category": "Traits & fitness",
  "grade": "A",
  "ref": "A",
  "alt": "G",
  "genotypes": [
   {
    "status": "info",
    "text": "Brown eyes very likely"
   },
   {
    "status": "info",
    "text": "Usually brown/hazel"
   },
   {
    "status": "info",
    "text": "Blue eyes likely"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   18252222
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1426654",
  "gene": "SLC24A5",
  "variant": "Ala111Thr",
  "category": "Traits & fitness",
  "grade": "A",
  "ref": "G",
  "alt": "A",
  "genotypes": [
   {
    "status": "info",
    "text": "Ancestral (darker-pigmentation) allele"
   },
   {
    "status": "info",
    "text": "One lighter-pigmentation allele"
   },
   {
    "status": "info",
    "text": "Two lighter-pigmentation alleles (common in Europe, West and South Asia)"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   16357253
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs16891982",
  "gene": "SLC45A2",
  "variant": "Phe374Leu",
  "category": "Traits & fitness",
  "grade": "B",
  "ref": "C",
  "alt": "G",
  "genotypes": [
   {
    "status": "info",
    "text": "Ancestral allele (darker pigmentation)"
   },
   {
    "status": "info",
    "text": "One European lighter allele"
   },
   {
    "status": "info",
    "text": "Two lighter alleles (typical of Europeans)"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs3827760",
  "gene": "EDAR",
  "variant": "Val370Ala",
  "category": "Traits & fitness",
  "grade": "B",
  "ref": "A",
  "alt": "G",
  "genotypes": [
   {
    "status": "info",
    "text": "Ancestral"
   },
   {
    "status": "info",
    "text": "One East Asian 370A allele: thicker hair, more sweat glands"
   },
   {
    "status": "info",
    "text": "Two 370A alleles (typical East Asian)"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   23415220
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs17822931",
  "gene": "ABCC11",
  "variant": "Gly180Arg",
  "category": "Traits & fitness",
  "grade": "A",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "info",
    "text": "Wet earwax; typical underarm odour"
   },
   {
    "status": "info",
    "text": "Wet earwax"
   },
   {
    "status": "info",
    "text": "Dry earwax; little underarm odour"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   16444273
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1805007",
  "gene": "MC1R",
  "variant": "R151C",
  "category": "Traits & fitness",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No R151C"
   },
   {
    "status": "info",
    "text": "Red-hair allele carrier: more sun sensitivity, freckling"
   },
   {
    "status": "mod",
    "text": "Red hair likely; higher melanoma risk"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   7581459
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 },
 {
  "id": "rs1805008",
  "gene": "MC1R",
  "variant": "R160W",
  "category": "Traits & fitness",
  "grade": "B",
  "ref": "C",
  "alt": "T",
  "genotypes": [
   {
    "status": "ok",
    "text": "No R160W"
   },
   {
    "status": "info",
    "text": "Red-hair allele carrier"
   },
   {
    "status": "mod",
    "text": "Red hair likely"
   }
  ],
  "effect": "",
  "note": "",
  "pmids": [
   7581459
  ],
  "guideline": "",
  "ancestry": {
   "mechanistic": true,
   "replicatedIn": []
  }
 }
];
if (typeof module !== "undefined") module.exports = MARKERS; else window.MARKERS = MARKERS;
