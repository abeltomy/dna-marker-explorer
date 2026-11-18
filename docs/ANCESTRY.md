# Ancestry and study bias

Most genetic association studies were done in people of European ancestry. Results don't always transfer:

- **Single SNP associations** (e.g. TCF7L2, FTO): the direction usually holds across ancestries, but the effect size can differ, and the tagged causal variant may not be the same.
- **Mechanistic variants** (drug-enzyme star alleles, lactase, G6PD, sickle cell): the biology works the same in everyone, but **how common** the allele is differs a lot.
- **Tag SNPs** (e.g. HLA-DQ2.5 via rs2187668): a tag that works in Europeans may tag poorly elsewhere.
- **Polygenic scores**: much less accurate outside European ancestry, so this tool leaves them out.

## How the app shows it

The user optionally picks an ancestry group. Nothing is inferred from their DNA. Each marker then shows one badge:

| Badge | Meaning | Rule |
|---|---|---|
| ✓ **replicated** | The association has been replicated in this group | Group is in `replicatedIn` |
| ~ **biology general** | Not specifically replicated, but the mechanism applies to everyone | `mechanistic: true` |
| ? **unknown** | Found mainly in other groups; the effect here may differ or be absent | Otherwise |

Groups follow the 1000 Genomes / gnomAD super-populations: `EUR`, `SAS`, `EAS`, `AFR`, `AMR`.

## Adding a replication tag

Add a group to `replicatedIn` only with a citation (a PMID in the marker, or in the pull request) showing genome-wide or replicated significance **in that group**, with the same direction of effect. v0.1 tags are a first pass and need review.

## Roadmap

- Per-ancestry allele frequencies from gnomAD, shown next to each marker.
- Ancestry-specific variants (e.g. South Asian–specific diabetes or cardiometabolic loci) where well replicated.
