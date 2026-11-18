// DNA Marker Explorer: user interface. All processing happens in this tab.
(function () {
  "use strict";
  const VERSION = "0.1.0";
  const M = window.MARKERS, D = window.DNA;
  const CATS = [...new Set(M.map(m => m.category))];
  const LABEL = { ok: "Typical", good: "Favourable", info: "Info", mod: "Attention", act: "Clinically relevant", na: "No result" };
  const FIT = { replicated: "✓ replicated", "biology-general": "~ biology general", unknown: "? unknown" };
  const $ = id => document.getElementById(id);
  let G = null, R = {}, anc = "OTH";
  const filt = { cat: "All", ev: "ABC", q: "", notable: false };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  $("anc").innerHTML = Object.entries(D.ANCESTRIES).map(([k, v]) => `<option value="${k}"${k === "OTH" ? " selected" : ""}>${v}</option>`).join("");
  $("ver").textContent = VERSION; $("count").textContent = M.length;

  function refs(m) {
    const a = [`<a href="https://www.ncbi.nlm.nih.gov/snp/${m.id}" target="_blank" rel="noopener noreferrer">dbSNP</a>`];
    if (m.guideline === "CPIC") a.push(`<a href="https://cpicpgx.org/guidelines/" target="_blank" rel="noopener noreferrer">CPIC</a>`);
    for (const p of m.pmids) a.push(`<a href="https://pubmed.ncbi.nlm.nih.gov/${p}/" target="_blank" rel="noopener noreferrer">PMID ${p}</a>`);
    if (!m.pmids.length) a.push(`<span class="small">citation needed</span>`);
    return a.join("<br>");
  }

  function renderCats() {
    $("cats").innerHTML = ["All", ...CATS].map(c => `<span class="chip ${filt.cat === c ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</span>`).join("");
  }

  function render() {
    let h = ""; const q = filt.q.toLowerCase();
    for (const cat of CATS) {
      if (filt.cat !== "All" && filt.cat !== cat) continue;
      const rows = M.filter(m => m.category === cat && filt.ev.includes(m.grade))
        .filter(m => !q || [m.id, m.gene, m.variant, m.effect, m.note, ...m.genotypes.map(g => g.text)].join(" ").toLowerCase().includes(q))
        .filter(m => !filt.notable || (G && R[m.id] && !["ok", "info", "na"].includes(R[m.id].status)));
      if (!rows.length) continue;
      h += `<tr class="cat"><td colspan="6">${esc(cat)} · ${rows.length}</td></tr>`;
      for (const m of rows) {
        const r = R[m.id], fit = D.ancestryFit(m, anc);
        const gts = [m.ref + m.ref, m.ref + m.alt, m.alt + m.alt];
        const all = m.genotypes.map((g, i) => `<span><b>${gts[i]}</b>: ${esc(g.text)}</span>`).join("");
        const you = G ? (r ? `<span class="gt">${esc(r.gt)}</span>` : "—") : `<span class="small">load file</span>`;
        const lit = G && r ? `<span class="badge s-${r.status}">${LABEL[r.status]}</span> ${esc(r.text)}<div class="all">All genotypes: ${all}</div>` : `<div class="all mt0">${all}</div>`;
        const repl = m.ancestry.replicatedIn.length ? "Replicated in: " + m.ancestry.replicatedIn.join(", ") : "";
        h += `<tr><td><b>${esc(m.gene)}</b><div>${esc(m.variant)}</div><div class="rs">${m.id} · effect allele ${m.alt}${m.xLinked ? " · X-linked" : ""}</div></td>
          <td class="gt">${you}</td>
          <td>${lit}${m.note ? `<div class="note">${esc(m.note)}</div>` : ""}</td>
          <td class="h-eff small">${esc(m.effect)}</td>
          <td><span class="ev ev${m.grade}">${m.grade}</span><div class="mt4"><span class="fit fit-${fit}" title="${esc(repl)}">${FIT[fit]}</span></div></td>
          <td class="refs">${refs(m)}</td></tr>`;
      }
    }
    $("tb").innerHTML = h || `<tr><td colspan="6" class="small">No markers match.</td></tr>`;
  }

  function renderSummary() {
    if (!G) { $("summary").hidden = true; return; }
    const v = Object.values(R), n = s => v.filter(r => r.status === s).length;
    let h = `<div class="card"><div class="k">Coverage</div><div class="v">${v.filter(r => r.status !== "na").length} / ${M.length}</div><div class="d">markers found in your file</div></div>
      <div class="card"><div class="k">Flags</div><div class="v">${n("act")} <span class="badge s-act">relevant</span> ${n("mod")} <span class="badge s-mod">attention</span></div><div class="d">${n("good")} favourable · ${n("ok")} typical</div></div>`;
    for (const c of D.composites(R)) h += `<div class="card"><div class="k">${esc(c.title)}</div><div class="v">${esc(c.value)} <span class="badge s-${c.status}">${LABEL[c.status]}</span></div><div class="d">${esc(c.text)}</div></div>`;
    $("cards").innerHTML = h; $("summary").hidden = false;
  }
  const setButtons = () => ["copyBtn", "dlBtn", "clearBtn"].forEach(id => ($(id).hidden = !G));

  async function load(file) {
    const st = $("status");
    try {
      st.textContent = "Reading " + file.name + " locally…";
      const buf = await file.arrayBuffer();
      const text = D.isZip(buf) ? await D.unzipFirstText(buf) : new TextDecoder().decode(buf);
      const p = D.parseGenome(text, new Set(M.map(m => m.id)));
      if (!p.total) throw new Error("no genotype rows found. Is this a raw data file?");
      G = p.genotypes; R = D.analyse(M, G);
      renderSummary(); render(); setButtons();
      st.textContent = `Loaded ${p.total.toLocaleString()} SNPs from ${file.name}. Processed in this tab only; nothing was uploaded.`;
    } catch (e) { st.textContent = "Couldn't read the file: " + e.message; }
  }

  const drop = $("drop"), fi = $("file");
  fi.addEventListener("change", e => e.target.files[0] && load(e.target.files[0]));
  ["dragenter", "dragover"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add("hover"); }));
  ["dragleave", "drop"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove("hover"); }));
  drop.addEventListener("drop", e => e.dataTransfer.files[0] && load(e.dataTransfer.files[0]));
  $("anc").addEventListener("change", e => { anc = e.target.value; render(); });
  $("cats").addEventListener("click", e => { const c = e.target.dataset.cat; if (c) { filt.cat = c; renderCats(); render(); } });
  document.querySelectorAll("[data-ev]").forEach(ch => ch.addEventListener("click", () => {
    filt.ev = ch.dataset.ev; document.querySelectorAll("[data-ev]").forEach(x => x.classList.toggle("on", x === ch)); render();
  }));
  $("q").addEventListener("input", e => { filt.q = e.target.value; render(); });
  $("notable").addEventListener("change", e => { filt.notable = e.target.checked; render(); });
  $("copyBtn").addEventListener("click", async () => {
    const t = D.toCSV(M, R, anc);
    try { await navigator.clipboard.writeText(t); $("status").textContent = "Results copied to the clipboard as CSV."; }
    catch { const ta = $("copyOut"); ta.hidden = false; ta.value = t; ta.select(); $("status").textContent = "Copy blocked. Select the text below and copy it."; }
  });
  $("dlBtn").addEventListener("click", () => {
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([D.toCSV(M, R, anc)], { type: "text/csv" }));
    a.download = "my_dna_markers.csv"; document.body.appendChild(a); a.click(); a.remove();
  });
  $("clearBtn").addEventListener("click", () => {
    G = null; R = {}; fi.value = ""; $("copyOut").hidden = true; $("copyOut").value = "";
    renderSummary(); render(); setButtons(); $("status").textContent = "Cleared. Your data has been removed from this tab.";
  });
  renderCats(); render();
})();
