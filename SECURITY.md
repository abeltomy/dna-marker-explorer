# Security and privacy

## Promise

Your genome never leaves your device. The app has:

- **No server.** It's static files opened from your disk.
- **No network.** The Content-Security-Policy is `default-src 'none'; script-src 'self'; connect-src 'none'; form-action 'none'`. Browsers block `fetch`, XHR, WebSocket, beacons, form posts, remote scripts, fonts and images.
- **No storage.** Nothing is written to localStorage, IndexedDB or cookies. Closing the tab clears everything.
- **No dependencies.** No npm packages, CDNs or analytics. You can read all of it: a few hundred lines plus the marker data.

Links to PubMed, dbSNP and CPIC open only when you click them, and they never include your genotypes. `rel="noreferrer"` is set.

## Verify it yourself

1. Check the release zip's SHA-256: `sha256sum dna-marker-explorer-vX.Y.Z.zip`
2. Turn Wi-Fi off, open `index.html`, and load your file. It works fully offline.
3. Open DevTools → Network: no requests are made after the page loads.

## Rules for contributors

- Never commit real genome files. `.gitignore` blocks common raw-data names; tests use `tests/synthetic_23andme.txt` only.
- No new external requests, CDNs or analytics. A pull request that weakens the CSP will be rejected.
- No `eval`, `innerHTML` with unescaped user data, or inline scripts.

## Reporting

Report vulnerabilities privately through GitHub Security Advisories ("Report a vulnerability"), not public issues.
