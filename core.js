// DNA Marker Explorer: analysis core.
// Pure functions with no DOM and no network. Used by index.html and by tests/test.js.
(function (root) {
  "use strict";
  const COMP = { A: "T", T: "A", C: "G", G: "C" };
  const ANCESTRIES = { EUR: "European", SAS: "South Asian", EAS: "East Asian", AFR: "African", AMR: "Latino / admixed American", OTH: "Other / mixed / prefer not to say" };

  // ---- Reading files -------------------------------------------------------
  // Returns the text of the first .txt/.csv/.tsv inside a zip (ArrayBuffer).
  async function unzipFirstText(buf) {
    const dv = new DataView(buf), u8 = new Uint8Array(buf);
    let e = -1;
    for (let i = u8.length - 22; i >= Math.max(0, u8.length - 70000); i--) if (dv.getUint32(i, true) === 0x06054b50) { e = i; break; }
    if (e < 0) throw new Error("Not a valid zip file");
    const n = dv.getUint16(e + 10, true); let p = dv.getUint32(e + 16, true);
    for (let k = 0; k < n; k++) {
      const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true);
      const fl = dv.getUint16(p + 28, true), xl = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true);
      const off = dv.getUint32(p + 42, true);
      const name = new TextDecoder().decode(u8.subarray(p + 46, p + 46 + fl));
      p += 46 + fl + xl + cl;
      if (!/\.(txt|csv|tsv)$/i.test(name) || name.startsWith("__MACOSX")) continue;
      const lfl = dv.getUint16(off + 26, true), lxl = dv.getUint16(off + 28, true);
      const data = u8.subarray(off + 30 + lfl + lxl, off + 30 + lfl + lxl + csize);
      if (method === 0) return new TextDecoder().decode(data);
      if (method !== 8) throw new Error("Unsupported zip compression");
      if (typeof DecompressionStream === "undefined") throw new Error("This browser can't unzip; extract the .txt first");
      const ds = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
      return await new Response(ds).text();
    }
    throw new Error("No .txt file found inside the zip");
  }
  const isZip = buf => { const b = new Uint8Array(buf, 0, 2); return b[0] === 0x50 && b[1] === 0x4b; };

  // Parses 23andMe / AncestryDNA / MyHeritage-style raw files. Keeps only the rsIDs in `wanted`.
  function parseGenome(text, wanted) {
    const out = new Map(); let total = 0;
    for (const line of text.split(/\r?\n/)) {
      if (!line || line[0] === "#") continue;
      const c = line.split(/[\t,]/).map(s => s.replace(/"/g, "").trim());
      if (!/^(rs|i)\d+/i.test(c[0])) continue;
      total++;
      if (!wanted.has(c[0])) continue;
      let gt = c.length >= 5 ? c[3] + c[4] : c[3];
      out.set(c[0], (gt || "").toUpperCase().replace(/0/g, "-"));
    }
    return { genotypes: out, total };
  }

  // ---- Interpretation ------------------------------------------------------
  // Number of copies of the effect (alt) allele: 0, 1, 2, or null if not callable.
  function countAlt(m, gt) {
    if (!gt || gt.includes("-") || /[DI]/.test(gt)) return { k: null, why: "no call" };
    let a = gt.split("");
    const ok = new Set([m.ref, m.alt]), ambiguous = COMP[m.ref] === m.alt;
    if (!a.every(x => ok.has(x))) {
      const f = a.map(x => COMP[x]);
      if (!ambiguous && f.every(x => ok.has(x))) a = f;
      else return { k: null, why: "alleles don't match the reference" };
    }
    let k = a.filter(x => x === m.alt).length;
    if (a.length === 1) k = k ? 2 : 0; // hemizygous (X chromosome in males)
    return { k, shown: a.join("") };
  }

  // Ancestry fit: "replicated" | "biology-general" | "unknown"
  function ancestryFit(m, anc) {
    if (!anc || anc === "OTH") return m.ancestry.mechanistic ? "biology-general" : "unknown";
    if (m.ancestry.replicatedIn.includes(anc)) return "replicated";
    return m.ancestry.mechanistic ? "biology-general" : "unknown";
  }

  function analyse(markers, genotypes) {
    const R = {};
    for (const m of markers) {
      const gt = genotypes.get(m.id);
      if (gt === undefined) { R[m.id] = { status: "na", text: "Not on your chip", gt: "—" }; continue; }
      const c = countAlt(m, gt);
      if (c.k === null) { R[m.id] = { status: "na", text: "Not interpretable (" + c.why + ")", gt }; continue; }
      const g = m.genotypes[c.k];
      R[m.id] = { status: g.status, text: g.text, gt: c.shown, k: c.k };
    }
    return R;
  }

  // Combined calls that need more than one SNP.
  function composites(R) {
    const k = id => (R[id] && R[id].k !== undefined ? R[id].k : null);
    const out = [];
    const e4 = k("rs429358"), e2 = k("rs7412");
    if (e4 !== null && e2 !== null) {
      const t = { "0,0": ["ε3/ε3", "Most common genotype; average risk", "ok"], "0,1": ["ε2/ε3", "Lower Alzheimer's risk; slightly lower LDL", "good"],
        "0,2": ["ε2/ε2", "Low Alzheimer's risk; rare type III hyperlipidaemia risk", "info"], "1,0": ["ε3/ε4", "Alzheimer's risk ~3×; LDL tends higher", "mod"],
        "1,1": ["ε2/ε4", "Roughly average risk", "info"], "2,0": ["ε4/ε4", "Alzheimer's risk ~8–12×; consider genetic counselling", "act"] }[e4 + "," + e2];
      if (t) out.push({ title: "APOE", value: t[0], text: t[1], status: t[2] });
    }
    const c2 = k("rs4244285"), c3 = k("rs4986893"), c17 = k("rs12248560");
    if (c2 !== null && c17 !== null) {
      const nf = c2 + (c3 || 0); let v, d, s;
      if (nf >= 2) { v = "Poor metaboliser"; d = "Clopidogrel likely ineffective; many SSRIs and PPIs need adjusting"; s = "act"; }
      else if (nf === 1) { v = c17 ? "Intermediate (*2/*17)" : "Intermediate metaboliser"; d = "Clopidogrel: CPIC recommends an alternative"; s = "act"; }
      else if (c17 === 2) { v = "Ultrarapid (*17/*17)"; d = "Lower exposure to escitalopram, sertraline, PPIs"; s = "mod"; }
      else if (c17 === 1) { v = "Rapid metaboliser (*1/*17)"; d = "Slightly lower levels of some SSRIs/PPIs; clopidogrel works normally"; s = "info"; }
      else { v = "Normal metaboliser (*1/*1)"; d = "Standard dosing"; s = "ok"; }
      out.push({ title: "CYP2C19", value: v, text: d, status: s });
    }
    const n2 = k("rs1799853"), n3 = k("rs1057910");
    if (n2 !== null && n3 !== null) {
      const as = 2 - 0.5 * n2 - n3; let v, d, s;
      if (as >= 2) { v = "Normal metaboliser"; d = "Standard dosing (activity score 2)"; s = "ok"; }
      else if (as >= 1) { v = "Intermediate metaboliser"; d = "Activity score " + as + ": lower warfarin dose; start NSAIDs low; phenytoin dose ↓"; s = "act"; }
      else { v = "Poor metaboliser"; d = "Activity score " + as + ": large dose cuts or alternatives for NSAIDs, warfarin, phenytoin"; s = "act"; }
      out.push({ title: "CYP2C9", value: v, text: d, status: s });
    }
    // CYP2B6 (CPIC efavirenz): *6 decreased function, *18 no function; *18 is missing from many chips.
    const b6 = k("rs3745274"), b18 = k("rs28399499");
    if (b6 !== null) {
      const n = b6 + (b18 || 0); let v, d, s;
      if (n >= 2) { v = "Poor metaboliser"; d = "Efavirenz: CPIC suggests considering a lower starting dose (400 or 200 mg/day)"; s = "act"; }
      else if (n === 1) { v = "Intermediate metaboliser"; d = "Efavirenz: CPIC suggests considering 400 mg/day instead of 600 mg"; s = "act"; }
      else { v = "Normal metaboliser"; d = "Standard efavirenz dosing" + (b18 === null ? " (*18 not on your chip)" : ""); s = "ok"; }
      out.push({ title: "CYP2B6", value: v, text: d, status: s });
    }
    // DPYD activity score (CPIC fluoropyrimidines): *2A = 0, c.2846A>T and HapB3 = 0.5 each.
    const d2a = k("rs3918290"), d2846 = k("rs67376798"), dhb3 = k("rs75017182");
    if (d2a !== null) {
      const as = Math.max(0, 2 - d2a - 0.5 * ((d2846 || 0) + (dhb3 || 0))); let v, d, s;
      if (as >= 2) { v = "Normal (activity score 2)"; d = "Standard 5-FU/capecitabine dosing. Only 3 DPYD variants are tested, so this doesn't rule out DPD deficiency"; s = "ok"; }
      else if (as >= 1) { v = "Intermediate (activity score " + as + ")"; d = "5-FU/capecitabine: CPIC recommends a reduced starting dose, then adjusting by tolerance"; s = "act"; }
      else { v = "Poor (activity score " + as + ")"; d = "5-FU/capecitabine: CPIC advises avoiding them; if there's no alternative, a strongly reduced dose with drug-level monitoring"; s = "act"; }
      out.push({ title: "DPYD", value: v, text: d, status: s });
    }
    return out;
  }

  function toCSV(markers, R, anc) {
    const rows = [["category", "gene", "variant", "rsid", "effect_allele", "your_genotype", "status", "interpretation", "grade", "ancestry_fit", "pmids"]];
    for (const m of markers) { const r = R[m.id] || {}; rows.push([m.category, m.gene, m.variant, m.id, m.alt, r.gt || "", r.status || "", r.text || "", m.grade, ancestryFit(m, anc), m.pmids.join(" ")]); }
    return rows.map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(",")).join("\n");
  }

  const api = { ANCESTRIES, unzipFirstText, isZip, parseGenome, countAlt, ancestryFit, analyse, composites, toCSV };
  if (typeof module !== "undefined") module.exports = api; else root.DNA = api;
})(this);
