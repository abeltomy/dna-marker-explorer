# Contributing

Thanks for helping. The most useful contributions are **better evidence**, not more markers.

## Add or fix a marker

1. Edit `markers.js` (schema in [docs/EVIDENCE.md](docs/EVIDENCE.md)).
2. Use GRCh37 **plus-strand** alleles (check dbSNP).
3. Grade it by the rules in `EVIDENCE.md`, and add at least one PMID.
4. Set `ancestry.replicatedIn` only with evidence ([docs/ANCESTRY.md](docs/ANCESTRY.md)).
5. Run:
   ```bash
   python3 tools/validate.py && node tests/test.js
   ```
6. Open a pull request with the PMIDs and one line on why the grade fits.

## Good first issues

**Citations needed** (`validate.py` lists them): rs1799945 (HFE H63D), rs1801131 (MTHFR A1298C), rs5219 (KCNJ11), rs182549 (LCT), rs1229984 (ADH1B), rs174547 (FADS1), rs28929474 and rs17580 (SERPINA1), rs334 (HBB), rs16891982 (SLC45A2).

**Review the ancestry tags.** v0.1 `replicatedIn` values are a first pass. Confirm or correct them with citations, especially for South Asian, African and Latino populations.

**Per-ancestry allele frequencies** from gnomAD (see the roadmap in `ANCESTRY.md`).

## Don't

- Commit real genomes, even your own.
- Add markers based on a single study as grade A or B.
- Add network calls, CDNs, trackers or build tools.
- Copy text from SNPedia or paywalled sources. Write descriptions in your own words.
