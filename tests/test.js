// Run: node tests/test.js   (uses only synthetic data, never a real genome)
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const M = require("../markers.js");
const D = require("../core.js");

const byId = Object.fromEntries(M.map(m => [m.id, m]));
let passed = 0;
const t = (name, fn) => { fn(); passed++; console.log("ok  " + name); };

t("counts alt alleles", () => {
  const m = byId.rs1057910; // CYP2C9*3, ref A alt C
  assert.strictEqual(D.countAlt(m, "AA").k, 0);
  assert.strictEqual(D.countAlt(m, "AC").k, 1);
  assert.strictEqual(D.countAlt(m, "CC").k, 2);
});
t("flips strand for non-ambiguous SNPs", () => {
  const m = byId.rs1801133; // ref G alt A
  const r = D.countAlt(m, "CT"); // minus-strand C/T == plus G/A
  assert.strictEqual(r.k, 1); assert.strictEqual(r.shown, "GA");
});
t("refuses to flip ambiguous A/T or C/G SNPs", () => {
  const m = byId.rs9939609; // ref T alt A (ambiguous)
  assert.strictEqual(D.countAlt(m, "GC").k, null);
});
t("no-calls and indels give no result", () => {
  assert.strictEqual(D.countAlt(byId.rs7903146, "--").k, null);
  assert.strictEqual(D.countAlt(byId.rs7903146, "DD").k, null);
});
t("hemizygous X genotype", () => {
  assert.strictEqual(D.countAlt(byId.rs5030868, "A").k, 2);
  assert.strictEqual(D.countAlt(byId.rs5030868, "G").k, 0);
});
t("APOE composite reads rs7412 correctly (CC = no ε2)", () => {
  const G = new Map([["rs429358", "TT"], ["rs7412", "CC"]]);
  assert.strictEqual(D.composites(D.analyse(M, G)).find(c => c.title === "APOE").value, "ε3/ε3");
  G.set("rs429358", "CT");
  assert.strictEqual(D.composites(D.analyse(M, G)).find(c => c.title === "APOE").value, "ε3/ε4");
  G.set("rs429358", "TT"); G.set("rs7412", "CT");
  assert.strictEqual(D.composites(D.analyse(M, G)).find(c => c.title === "APOE").value, "ε2/ε3");
});
t("CYP2C19 and CYP2C9 composites", () => {
  const G = new Map([["rs4244285", "GG"], ["rs4986893", "GG"], ["rs12248560", "CT"], ["rs1799853", "CC"], ["rs1057910", "AC"]]);
  const c = D.composites(D.analyse(M, G));
  assert.match(c.find(x => x.title === "CYP2C19").value, /Rapid/);
  assert.match(c.find(x => x.title === "CYP2C9").value, /Intermediate/);
});
t("parses the synthetic 23andMe file", () => {
  const txt = fs.readFileSync(path.join(__dirname, "synthetic_23andme.txt"), "utf8");
  const p = D.parseGenome(txt, new Set(M.map(m => m.id)));
  assert.ok(p.total > 0); assert.strictEqual(p.genotypes.get("rs1057910"), "AC");
});
t("parses AncestryDNA format (allele1, allele2 columns)", () => {
  const txt = "#AncestryDNA\nrsid\tchromosome\tposition\tallele1\tallele2\nrs1057910\t10\t96741053\tA\tC\n";
  assert.strictEqual(D.parseGenome(txt, new Set(["rs1057910"])).genotypes.get("rs1057910"), "AC");
});
t("ancestry fit", () => {
  assert.strictEqual(D.ancestryFit(byId.rs7903146, "SAS"), "replicated");
  assert.strictEqual(D.ancestryFit(byId.rs1057910, "SAS"), "biology-general");
  assert.strictEqual(D.ancestryFit(byId.rs2187668, "SAS"), "unknown");
});
t("every marker's genotype texts exist", () => {
  for (const m of M) assert.strictEqual(m.genotypes.length, 3, m.id);
});
console.log(`\n${passed} tests passed`);
