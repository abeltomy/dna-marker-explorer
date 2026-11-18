# DNA Marker Explorer

Look up what well-studied genetic markers say about **your own raw DNA file**: privately, offline, in your browser.

- 🔒 **Local only.** Your file is read in browser memory and never uploaded. A Content-Security-Policy blocks every network request.
- 📚 **Evidence-graded.** Each marker has an A/B/C grade from [fixed rules](docs/EVIDENCE.md) and PubMed references.
- 🌍 **Ancestry-aware.** Most genetics studies are on Europeans. Each marker shows whether its finding was replicated in *your* ancestry group ([details](docs/ANCESTRY.md)).
- 🧩 **Simple.** Five plain files, no install, no build step, no dependencies.

> ⚠️ **Not medical advice.** Consumer raw data is for research and education. Confirm anything actionable with a clinical test.

## Use it

1. Download the latest release zip and check its SHA-256 against the release page.
2. Unzip, then open `index.html` in Chrome, Firefox, Edge or Safari. You can turn Wi-Fi off first.
3. Pick your ancestry (optional) and drop in your raw file: a 23andMe `.zip` or `.txt`, or an AncestryDNA or MyHeritage `.txt`.

Don't use a hosted copy you didn't check yourself. Opening the file you downloaded is the point.

## What's covered (v0.1: 69 markers)

| Category | Examples |
|---|---|
| Drug response (18) | CYP2C19, CYP2C9, VKORC1, SLCO1B1, TPMT, NUDT15, DPYD, G6PD |
| Heart & brain (14) | APOE, 9p21, LPA, Factor V Leiden, HFE |
| Metabolism (9) | TCF7L2, FTO, PNPLA3 |
| Nutrition (13) | Lactase, ALDH2, caffeine (CYP1A2), vitamin D (GC), celiac HLA tags |
| Eyes, lungs & carrier (6) | CFH, ARMS2, SERPINA1, HbS |
| Traits & fitness (10) | ACTN3, eye colour, earwax |

**Deliberately excluded:** BRCA1/2 and other rare disease mutations (arrays give frequent false positives) and polygenic scores (poor accuracy outside European ancestry). See [docs/EVIDENCE.md](docs/EVIDENCE.md).

## Files

| File | What it is |
|---|---|
| `index.html`, `style.css`, `app.js` | The page |
| `core.js` | Parsing and interpretation (pure functions, tested) |
| `markers.js` | The marker database: edit this to add markers |
| `tools/validate.py` | Schema and rule checks (no network) |
| `tools/verify_pmids.py` | Checks every PMID exists and mentions the gene; writes `docs/REFERENCES.md` |
| `tests/` | Node tests with a **synthetic** genome |

## Develop

```bash
node tests/test.js              # unit tests
python3 tools/validate.py       # data checks
python3 tools/verify_pmids.py   # needs internet; CI runs it
```

To add a marker, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Status

v0.1 is an early release. **10 markers still need a citation**, and the ancestry-replication tags are a first pass. Both are listed as good first issues. PMIDs are checked against PubMed by CI.

## Licence

Code and data: MIT. References link to PubMed, dbSNP and CPIC; no third-party text is copied.
