# Evidence rules

Every marker gets one grade. Apply these rules as written; don't grade by gut feeling.

| Grade | Rule | Examples |
|---|---|---|
| **A** | Covered by a clinical guideline (CPIC, DPWG; ClinPGx level 1A/1B), **or** an established single-gene effect with a clear mechanism | CYP2C19 and clopidogrel, Factor V Leiden, lactase persistence |
| **B** | Genome-wide significant (p < 5×10⁻⁸) **and** replicated in an independent cohort; usually a modest effect (OR < 2) | TCF7L2 and type 2 diabetes, FTO and BMI |
| **C** | A single study, older candidate-gene work, or small or inconsistent effects | CYP1A2 and heart attack, COMT and behaviour |

## What goes in

- Well-replicated, commonly genotyped SNPs on consumer arrays (GRCh37).
- Each marker has at least one PMID: the key discovery paper, a large meta-analysis, or the guideline.

## What stays out

| Excluded | Why |
|---|---|
| BRCA1/2, Lynch and other rare pathogenic variants | Consumer arrays have high false-positive rates for rare variants; 23andMe also encodes indels as I/D, which tools misread |
| Polygenic risk scores | Accuracy drops sharply outside European ancestry |
| CYP2D6 full calls | Arrays can't see deletions and duplications; only *4 is shown, and labelled partial |
| Personality, IQ and "warrior gene" claims | Effects too small or not replicated |

## Marker schema (`markers.js`)

```json
{
  "id": "rs1057910",            // rsID
  "gene": "CYP2C9",
  "variant": "*3 (Ile359Leu)",
  "category": "Drug response",
  "grade": "A",
  "ref": "A", "alt": "C",        // GRCh37 PLUS strand; alt = effect allele
  "xLinked": true,               // optional
  "genotypes": [                 // 0, 1, 2 copies of alt
    {"status": "ok",  "text": "..."},
    {"status": "act", "text": "..."},
    {"status": "act", "text": "..."}
  ],
  "effect": "Effect size in plain words",
  "note": "Population notes, caveats",
  "pmids": [32189324],
  "guideline": "CPIC",           // or ""
  "ancestry": {"mechanistic": true, "replicatedIn": ["EUR","SAS"]}
}
```

`status`: `ok` typical · `good` favourable · `info` neutral · `mod` worth attention · `act` clinically relevant.

**Strand.** Alleles must be on the GRCh37 plus strand. The app flips other-strand genotypes automatically, except for A/T and C/G SNPs, where flipping is ambiguous. `validate.py` warns on those so a reviewer double-checks them.
