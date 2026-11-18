#!/usr/bin/env python3
"""Validate markers.js against the schema in docs/EVIDENCE.md. No network needed.

Usage: python3 tools/validate.py            (exit 1 on errors)
       python3 tools/validate.py --strict   (also fail on missing citations)
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
text = (ROOT / "markers.js").read_text(encoding="utf-8")
body = text[text.index("const MARKERS =") + len("const MARKERS ="):text.rindex("];") + 1]
markers = json.loads(body)

BASES = set("ACGT")
COMP = {"A": "T", "T": "A", "C": "G", "G": "C"}
STATUS = {"ok", "good", "info", "mod", "act"}
GRADES = {"A", "B", "C"}
ANC = {"EUR", "SAS", "EAS", "AFR", "AMR"}
REQUIRED = ["id", "gene", "variant", "category", "grade", "ref", "alt", "genotypes", "effect", "note", "pmids", "guideline", "ancestry"]

errors, warnings, seen = [], [], set()
for m in markers:
    mid = m.get("id", "?")
    def err(msg): errors.append(f"{mid}: {msg}")
    def warn(msg): warnings.append(f"{mid}: {msg}")
    for k in REQUIRED:
        if k not in m: err(f"missing field '{k}'")
    if not re.fullmatch(r"rs\d+", mid): err("id must look like rs123")
    if mid in seen: err("duplicate id")
    seen.add(mid)
    if m.get("grade") not in GRADES: err("grade must be A, B or C")
    ref, alt = m.get("ref"), m.get("alt")
    if ref not in BASES or alt not in BASES or ref == alt: err("ref/alt must be different single bases")
    elif COMP[ref] == alt: warn("A/T or C/G SNP: strand can't be auto-corrected, so double-check the plus-strand alleles")
    g = m.get("genotypes", [])
    if len(g) != 3: err("genotypes must have 3 entries (0, 1, 2 copies of alt)")
    for x in g:
        if x.get("status") not in STATUS: err(f"bad status '{x.get('status')}'")
        if not x.get("text"): err("empty genotype text")
    if not all(isinstance(p, int) and p > 0 for p in m.get("pmids", [])): err("pmids must be positive integers")
    if not m.get("pmids") and m.get("guideline") != "CPIC": warn("citation needed (no PMID)")
    a = m.get("ancestry", {})
    if not isinstance(a.get("mechanistic"), bool): err("ancestry.mechanistic must be true/false")
    bad = set(a.get("replicatedIn", [])) - ANC
    if bad: err(f"unknown ancestry codes {bad}")
    if m.get("grade") == "A" and not m.get("pmids") and m.get("guideline") != "CPIC":
        warn("grade A without a citation: add one before the next release")

print(f"{len(markers)} markers checked: {len(errors)} errors, {len(warnings)} warnings")
for w in warnings: print("  warn ", w)
for e in errors: print("  ERROR", e)
strict = "--strict" in sys.argv and any("citation needed" in w for w in warnings)
sys.exit(1 if errors or strict else 0)
