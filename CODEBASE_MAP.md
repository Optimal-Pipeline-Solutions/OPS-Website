# CODEBASE MAP — OPS Website
*Generated: 2026-10-29 03:36*

> AI navigation index. Run `python ~/.claude/tools/map_project.py` to regenerate.

## Overview
The official company website for **Optimal Pipeline Solutions** — a static, single-page site hosted on GitHub Pages.

## Entry Points
- `scripts\disable_golf.py` — Close out the golf/putting contest: set enabled=false in golf-config.json and push.
- `scripts\sync_golf.py`

## Directory Structure
```
OPS Website/
├── .agents
│   └── skills
├── .claude
│   ├── skills
│   └── launch.json
├── .github
│   └── workflows
│       └── golf-sync.yml
├── css
│   └── styles.css
├── graphify-out
│   ├── 2026-07-25
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-07-26
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-07-27
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-07-28
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-07-29
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-07-30
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-07-31
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-01
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-02
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-03
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-04
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-05
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-06
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-07
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-09
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-10
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-11
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-12
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-13
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-14
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-15
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-16
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-17
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-18
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-19
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-21
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-22
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-23
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-25
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-26
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-27
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-28
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-29
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-30
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-08-31
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-01
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-03
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-04
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-05
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-06
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-07
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-08
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-09
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-10
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-11
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-12
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-13
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-14
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-15
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-16
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-17
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-18
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-19
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-20
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-21
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-22
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-23
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-24
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-25
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-26
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-27
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-28
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-29
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-09-30
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-01
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-02
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-03
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-04
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-05
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-06
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-07
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-08
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-09
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-10
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-11
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-12
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-13
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-14
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-15
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-16
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-17
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-18
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-19
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-20
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-22
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-23
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-24
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-25
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-26
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-27
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-28
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── 2026-10-29
│   │   ├── .graphify_labels.json
│   │   ├── graph.json
│   │   ├── GRAPH_REPORT.md
│   │   └── manifest.json
│   ├── cache
│   │   ├── ast
│   │   │   └── v0.9.92-s17-g97e5a2916848
│   │   │       ├── 0f9cef5005b7516cf525e109c4a44741d0122c1b134602bbfcbcb0ed7b419da5.json
│   │   │       ├── 13974f33ed9667398644ad6b9e4127f6729551fe6705074af99d6f2a99922506.json
│   │   │       ├── 1b30138b7d74ddb918b66842ecf4ee1fa3156ef5765e74551a5efa1d017aa35f.json
│   │   │       ├── 1fb29ebb868a655a64a141b8c0964ab0c3c0c82fa8bd987794245da9dc3f761e.json
│   │   │       ├── 1fc56e3587b075d62f01a99cfa542deb93690b7ce70548c426fa08285591d881.json
│   │   │       ├── 27bc955c1b7742f1c9295398cedb614b06c7fd166d962ad7ffe177a68df9f1ea.json
│   │   │       ├── 3438e5bdb61b136f9290afa78ad2011e51914e20be953d28f616273879184fcb.json
│   │   │       ├── 3edc723a953c6ed565a50065c89379777cf11825fdd2b08805d98e701d6a21ed.json
│   │   │       ├── 478a51d51847440bb712e1e865bcf2caf1d9ac3537ae1823bba89010d84d73e2.json
│   │   │       ├── 67c8b00a6d7105beab53823b24716fb7bda49c7905f8afcbb5c56e84c9c9f84a.json
│   │   │       ├── 6988243a01d2bc3048e55865068fd8415eaca1a3f2608430583501ffbb464981.json
│   │   │       ├── 7b64c155d633b45ecac7f1d0e0751bdf440007ea69c06f43ca3780fe5bee0183.json
│   │   │       ├── 7cde0e0a6c9217bac2fbd841bda98409a296633423a1d0b49e4e0222978729a2.json
│   │   │       ├── 7dd5f0bae9f898a307afb7dbe4fa13a7b8248a70fd7d95a5be33fd5ca8077fb7.json
│   │   │       ├── 88d688e9aca099b1afc5dd15c937cc67e25f013f84d7ca5a9b41d4244f399def.json
│   │   │       ├── 898a135751e59dc27f3ad3c38cce8ea85e21d7ac5b24b6921ccce277e8bbb8eb.json
│   │   │       ├── 98e72834d22ff79f00e1bce8f1b061b6729fc879ced8ccd615ec79764bef0d89.json
│   │   │       ├── b428fa3a1cebd40be9b225c977be0dfbadcd1ad2af82f30d94e461c8c8d0156a.json
│   │   │       ├── bb1d207935119f5181743816ba818e8b915611081ac45349c40a3d37e8839497.json
│   │   │       ├── be5700c8def8de2742d8b4145bd0b2906c9389611bd7855433767697fab0e090.json
│   │   │       ├── c190356d10b97b1e08014e6f060ade5bc39f9176af12f8edfec62676897dcdec.json
│   │   │       ├── ca440c62eb3b416da690e4a6516703b0f7a2488d13f6449104bb268cd6f71040.json
│   │   │       ├── d014dcc57d525e7d385f0756bd064a8a425c103a8ab8dc16ddee74ecc575b90a.json
│   │   │       ├── d0afcf94d601e7180ecd8fc3fc9f2141fdc132859402f396615b0e06e477ff6c.json
│   │   │       ├── e1b65fc28cf6cf5b60779ec3f6bc621226b5d988f26cb8bc5bb9f716514c7693.json
│   │   │       ├── eaa74ef2500527bd7c9bbeb69462324eb20ac1016ce631e184e1c7c21d5103a0.json
│   │   │       └── f7641cd6f268cc6dc9bb93ea26f41f32ad5d601c27ebfdbe147c4f8dd0d110a1.json
│   │   ├── 2e5231ff223fff64f413a5de1b4b766a615b55dcce42249ed873d8ad39a5b884.json
│   │   ├── 8aea07ce9b90221548afa07e0b310d41fc1fc2924448e43282942e02bcfb8e20.json
│   │   └── stat-index.json
│   ├── .graphify_labels.json
│   ├── .graphify_labels.json.sig
│   ├── .graphify_root
│   ├── graph.html
│   ├── graph.json
│   ├── GRAPH_REPORT.md
│   └── manifest.json
├── hero-concepts
│   ├── hero-01-living-scada.html
│   ├── hero-02-boot-sequence.html
│   ├── hero-03-field-vs-control.html
│   ├── hero-04-kinetic-type.html
│   ├── hero-05-constellation.html
│   ├── hero-06-midnight-aurora.html
│   ├── hero-07-blueprint.html
│   ├── hero-08-mission-control.html
│   ├── hero-09-night-watch.html
│   ├── hero-10-industrial-editorial.html
│   ├── hero-11-night-split.html
│   ├── hero-12-daybreak-cycle.html
│   ├── hero-13-clean-flow.html
│   ├── hero-14-iso-facility.html
│   ├── hero-15-pipeline-journey.html
│   ├── hero-16-daylight-ops.html
│   ├── hero-17-safety-bold.html
│   ├── hero-18-ops-map.html
│   ├── hero-19-instrument-wall.html
│   ├── hero-20-chaos-to-calm.html
│   ├── hero-21-all-conditions.html
│   ├── hero-22-signals-journey.html
│   ├── hero-23-buried-cutaway.html
│   ├── hero-24-photo-to-pid.html
│   ├── hero-25-lact-skid.html
│   ├── hero-26-pig-pov.html
│   ├── hero-27-hydraulic-profile.html
│   ├── hero-28-console-pov.html
│   ├── hero-29-zoom-dive.html
│   ├── hero-30-tankfarm-dusk.html
│   ├── hero-31-relay-race.html
│   ├── hero-32-jackpot.html
│   ├── hero-33-hype-reel.html
│   ├── hero-34-thermal-torch.html
│   ├── hero-35-mega-gauge.html
│   ├── hero-36-alarm-zapper.html
│   ├── hero-37-glitch-slam.html
│   ├── hero-38-story-cuts.html
│   ├── hero-39-particle-morph.html
│   ├── hero-40-big-red-button.html
│   ├── hero-41-split-flap.html
│   └── index.html
├── images
│   ├── winners
│   ├── audit.avif
│   └── controlroom.avif
├── js
│   └── main.js
├── Plans
│   ├── Site_Upgrade_Concept.html
│   └── Website_Architecture.html
├── scripts
│   ├── disable_golf.py
│   └── sync_golf.py
├── .codebase_map.json
├── .gitignore
├── Alarm_Rationalization_One_Pager.html
├── Alarm_Rationalization_Product_Overview.html
├── CNAME
├── CODEBASE_MAP.md
├── golf-config.json
├── golf-data-thursday.json
├── golf-data.json
├── golf.html
├── index-hero.html
├── index-update.html
├── index.html
├── OPS Automation Capabilities.html
├── OPS Automation Services Overview.html
├── OPS Capabilities - Plains All American.html
├── OPS Control Room Capabilities.html
├── OPS Control Room Services Overview.html
├── README.md
├── robots.txt
├── site-upgraded.html
├── sitemap.xml
├── skills-lock.json
└── winners.json
```

## Module Reference

### `scripts\disable_golf.py`
**Purpose:** Close out the golf/putting contest: set enabled=false in golf-config.json and push.

**Functions:**
- `run(args)`
- `main()`

### `scripts\sync_golf.py`

**Functions:**
- `fetch_sheet()`
- `parse_rows(data)`
- `main()`

## Non-Python Files

| File | Type |
|------|------|
| `.claude/launch.json` | JSON |
| `.codebase_map.json` | JSON |
| `.github/workflows/golf-sync.yml` | YML |
| `Alarm_Rationalization_One_Pager.html` | HTML |
| `Alarm_Rationalization_Product_Overview.html` | HTML |
| `CODEBASE_MAP.md` | MD |
| `css/styles.css` | CSS |
| `golf-config.json` | JSON |
| `golf-data-thursday.json` | JSON |
| `golf-data.json` | JSON |
| `golf.html` | HTML |
| `graphify-out/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-25/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-25/graph.json` | JSON |
| `graphify-out/2026-07-25/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-25/manifest.json` | JSON |
| `graphify-out/2026-07-26/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-26/graph.json` | JSON |
| `graphify-out/2026-07-26/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-26/manifest.json` | JSON |
| `graphify-out/2026-07-27/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-27/graph.json` | JSON |
| `graphify-out/2026-07-27/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-27/manifest.json` | JSON |
| `graphify-out/2026-07-28/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-28/graph.json` | JSON |
| `graphify-out/2026-07-28/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-28/manifest.json` | JSON |
| `graphify-out/2026-07-29/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-29/graph.json` | JSON |
| `graphify-out/2026-07-29/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-29/manifest.json` | JSON |
| `graphify-out/2026-07-30/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-30/graph.json` | JSON |
| `graphify-out/2026-07-30/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-30/manifest.json` | JSON |
| `graphify-out/2026-07-31/.graphify_labels.json` | JSON |
| `graphify-out/2026-07-31/graph.json` | JSON |
| `graphify-out/2026-07-31/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-07-31/manifest.json` | JSON |
| `graphify-out/2026-08-01/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-01/graph.json` | JSON |
| `graphify-out/2026-08-01/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-01/manifest.json` | JSON |
| `graphify-out/2026-08-02/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-02/graph.json` | JSON |
| `graphify-out/2026-08-02/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-02/manifest.json` | JSON |
| `graphify-out/2026-08-03/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-03/graph.json` | JSON |
| `graphify-out/2026-08-03/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-03/manifest.json` | JSON |
| `graphify-out/2026-08-04/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-04/graph.json` | JSON |
| `graphify-out/2026-08-04/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-04/manifest.json` | JSON |
| `graphify-out/2026-08-05/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-05/graph.json` | JSON |
| `graphify-out/2026-08-05/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-05/manifest.json` | JSON |
| `graphify-out/2026-08-06/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-06/graph.json` | JSON |
| `graphify-out/2026-08-06/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-06/manifest.json` | JSON |
| `graphify-out/2026-08-07/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-07/graph.json` | JSON |
| `graphify-out/2026-08-07/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-07/manifest.json` | JSON |
| `graphify-out/2026-08-09/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-09/graph.json` | JSON |
| `graphify-out/2026-08-09/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-09/manifest.json` | JSON |
| `graphify-out/2026-08-10/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-10/graph.json` | JSON |
| `graphify-out/2026-08-10/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-10/manifest.json` | JSON |
| `graphify-out/2026-08-11/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-11/graph.json` | JSON |
| `graphify-out/2026-08-11/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-11/manifest.json` | JSON |
| `graphify-out/2026-08-12/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-12/graph.json` | JSON |
| `graphify-out/2026-08-12/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-12/manifest.json` | JSON |
| `graphify-out/2026-08-13/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-13/graph.json` | JSON |
| `graphify-out/2026-08-13/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-13/manifest.json` | JSON |
| `graphify-out/2026-08-14/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-14/graph.json` | JSON |
| `graphify-out/2026-08-14/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-14/manifest.json` | JSON |
| `graphify-out/2026-08-15/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-15/graph.json` | JSON |
| `graphify-out/2026-08-15/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-15/manifest.json` | JSON |
| `graphify-out/2026-08-16/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-16/graph.json` | JSON |
| `graphify-out/2026-08-16/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-16/manifest.json` | JSON |
| `graphify-out/2026-08-17/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-17/graph.json` | JSON |
| `graphify-out/2026-08-17/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-17/manifest.json` | JSON |
| `graphify-out/2026-08-18/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-18/graph.json` | JSON |
| `graphify-out/2026-08-18/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-18/manifest.json` | JSON |
| `graphify-out/2026-08-19/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-19/graph.json` | JSON |
| `graphify-out/2026-08-19/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-19/manifest.json` | JSON |
| `graphify-out/2026-08-21/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-21/graph.json` | JSON |
| `graphify-out/2026-08-21/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-21/manifest.json` | JSON |
| `graphify-out/2026-08-22/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-22/graph.json` | JSON |
| `graphify-out/2026-08-22/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-22/manifest.json` | JSON |
| `graphify-out/2026-08-23/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-23/graph.json` | JSON |
| `graphify-out/2026-08-23/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-23/manifest.json` | JSON |
| `graphify-out/2026-08-25/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-25/graph.json` | JSON |
| `graphify-out/2026-08-25/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-25/manifest.json` | JSON |
| `graphify-out/2026-08-26/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-26/graph.json` | JSON |
| `graphify-out/2026-08-26/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-26/manifest.json` | JSON |
| `graphify-out/2026-08-27/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-27/graph.json` | JSON |
| `graphify-out/2026-08-27/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-27/manifest.json` | JSON |
| `graphify-out/2026-08-28/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-28/graph.json` | JSON |
| `graphify-out/2026-08-28/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-28/manifest.json` | JSON |
| `graphify-out/2026-08-29/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-29/graph.json` | JSON |
| `graphify-out/2026-08-29/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-29/manifest.json` | JSON |
| `graphify-out/2026-08-30/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-30/graph.json` | JSON |
| `graphify-out/2026-08-30/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-30/manifest.json` | JSON |
| `graphify-out/2026-08-31/.graphify_labels.json` | JSON |
| `graphify-out/2026-08-31/graph.json` | JSON |
| `graphify-out/2026-08-31/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-08-31/manifest.json` | JSON |
| `graphify-out/2026-09-01/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-01/graph.json` | JSON |
| `graphify-out/2026-09-01/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-01/manifest.json` | JSON |
| `graphify-out/2026-09-03/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-03/graph.json` | JSON |
| `graphify-out/2026-09-03/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-03/manifest.json` | JSON |
| `graphify-out/2026-09-04/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-04/graph.json` | JSON |
| `graphify-out/2026-09-04/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-04/manifest.json` | JSON |
| `graphify-out/2026-09-05/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-05/graph.json` | JSON |
| `graphify-out/2026-09-05/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-05/manifest.json` | JSON |
| `graphify-out/2026-09-06/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-06/graph.json` | JSON |
| `graphify-out/2026-09-06/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-06/manifest.json` | JSON |
| `graphify-out/2026-09-07/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-07/graph.json` | JSON |
| `graphify-out/2026-09-07/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-07/manifest.json` | JSON |
| `graphify-out/2026-09-08/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-08/graph.json` | JSON |
| `graphify-out/2026-09-08/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-08/manifest.json` | JSON |
| `graphify-out/2026-09-09/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-09/graph.json` | JSON |
| `graphify-out/2026-09-09/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-09/manifest.json` | JSON |
| `graphify-out/2026-09-10/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-10/graph.json` | JSON |
| `graphify-out/2026-09-10/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-10/manifest.json` | JSON |
| `graphify-out/2026-09-11/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-11/graph.json` | JSON |
| `graphify-out/2026-09-11/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-11/manifest.json` | JSON |
| `graphify-out/2026-09-12/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-12/graph.json` | JSON |
| `graphify-out/2026-09-12/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-12/manifest.json` | JSON |
| `graphify-out/2026-09-13/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-13/graph.json` | JSON |
| `graphify-out/2026-09-13/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-13/manifest.json` | JSON |
| `graphify-out/2026-09-14/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-14/graph.json` | JSON |
| `graphify-out/2026-09-14/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-14/manifest.json` | JSON |
| `graphify-out/2026-09-15/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-15/graph.json` | JSON |
| `graphify-out/2026-09-15/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-15/manifest.json` | JSON |
| `graphify-out/2026-09-16/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-16/graph.json` | JSON |
| `graphify-out/2026-09-16/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-16/manifest.json` | JSON |
| `graphify-out/2026-09-17/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-17/graph.json` | JSON |
| `graphify-out/2026-09-17/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-17/manifest.json` | JSON |
| `graphify-out/2026-09-18/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-18/graph.json` | JSON |
| `graphify-out/2026-09-18/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-18/manifest.json` | JSON |
| `graphify-out/2026-09-19/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-19/graph.json` | JSON |
| `graphify-out/2026-09-19/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-19/manifest.json` | JSON |
| `graphify-out/2026-09-20/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-20/graph.json` | JSON |
| `graphify-out/2026-09-20/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-20/manifest.json` | JSON |
| `graphify-out/2026-09-21/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-21/graph.json` | JSON |
| `graphify-out/2026-09-21/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-21/manifest.json` | JSON |
| `graphify-out/2026-09-22/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-22/graph.json` | JSON |
| `graphify-out/2026-09-22/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-22/manifest.json` | JSON |
| `graphify-out/2026-09-23/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-23/graph.json` | JSON |
| `graphify-out/2026-09-23/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-23/manifest.json` | JSON |
| `graphify-out/2026-09-24/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-24/graph.json` | JSON |
| `graphify-out/2026-09-24/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-24/manifest.json` | JSON |
| `graphify-out/2026-09-25/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-25/graph.json` | JSON |
| `graphify-out/2026-09-25/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-25/manifest.json` | JSON |
| `graphify-out/2026-09-26/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-26/graph.json` | JSON |
| `graphify-out/2026-09-26/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-26/manifest.json` | JSON |
| `graphify-out/2026-09-27/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-27/graph.json` | JSON |
| `graphify-out/2026-09-27/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-27/manifest.json` | JSON |
| `graphify-out/2026-09-28/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-28/graph.json` | JSON |
| `graphify-out/2026-09-28/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-28/manifest.json` | JSON |
| `graphify-out/2026-09-29/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-29/graph.json` | JSON |
| `graphify-out/2026-09-29/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-29/manifest.json` | JSON |
| `graphify-out/2026-09-30/.graphify_labels.json` | JSON |
| `graphify-out/2026-09-30/graph.json` | JSON |
| `graphify-out/2026-09-30/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-09-30/manifest.json` | JSON |
| `graphify-out/2026-10-01/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-01/graph.json` | JSON |
| `graphify-out/2026-10-01/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-01/manifest.json` | JSON |
| `graphify-out/2026-10-02/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-02/graph.json` | JSON |
| `graphify-out/2026-10-02/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-02/manifest.json` | JSON |
| `graphify-out/2026-10-03/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-03/graph.json` | JSON |
| `graphify-out/2026-10-03/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-03/manifest.json` | JSON |
| `graphify-out/2026-10-04/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-04/graph.json` | JSON |
| `graphify-out/2026-10-04/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-04/manifest.json` | JSON |
| `graphify-out/2026-10-05/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-05/graph.json` | JSON |
| `graphify-out/2026-10-05/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-05/manifest.json` | JSON |
| `graphify-out/2026-10-06/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-06/graph.json` | JSON |
| `graphify-out/2026-10-06/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-06/manifest.json` | JSON |
| `graphify-out/2026-10-07/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-07/graph.json` | JSON |
| `graphify-out/2026-10-07/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-07/manifest.json` | JSON |
| `graphify-out/2026-10-08/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-08/graph.json` | JSON |
| `graphify-out/2026-10-08/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-08/manifest.json` | JSON |
| `graphify-out/2026-10-09/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-09/graph.json` | JSON |
| `graphify-out/2026-10-09/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-09/manifest.json` | JSON |
| `graphify-out/2026-10-10/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-10/graph.json` | JSON |
| `graphify-out/2026-10-10/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-10/manifest.json` | JSON |
| `graphify-out/2026-10-11/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-11/graph.json` | JSON |
| `graphify-out/2026-10-11/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-11/manifest.json` | JSON |
| `graphify-out/2026-10-12/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-12/graph.json` | JSON |
| `graphify-out/2026-10-12/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-12/manifest.json` | JSON |
| `graphify-out/2026-10-13/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-13/graph.json` | JSON |
| `graphify-out/2026-10-13/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-13/manifest.json` | JSON |
| `graphify-out/2026-10-14/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-14/graph.json` | JSON |
| `graphify-out/2026-10-14/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-14/manifest.json` | JSON |
| `graphify-out/2026-10-15/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-15/graph.json` | JSON |
| `graphify-out/2026-10-15/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-15/manifest.json` | JSON |
| `graphify-out/2026-10-16/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-16/graph.json` | JSON |
| `graphify-out/2026-10-16/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-16/manifest.json` | JSON |
| `graphify-out/2026-10-17/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-17/graph.json` | JSON |
| `graphify-out/2026-10-17/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-17/manifest.json` | JSON |
| `graphify-out/2026-10-18/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-18/graph.json` | JSON |
| `graphify-out/2026-10-18/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-18/manifest.json` | JSON |
| `graphify-out/2026-10-19/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-19/graph.json` | JSON |
| `graphify-out/2026-10-19/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-19/manifest.json` | JSON |
| `graphify-out/2026-10-20/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-20/graph.json` | JSON |
| `graphify-out/2026-10-20/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-20/manifest.json` | JSON |
| `graphify-out/2026-10-22/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-22/graph.json` | JSON |
| `graphify-out/2026-10-22/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-22/manifest.json` | JSON |
| `graphify-out/2026-10-23/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-23/graph.json` | JSON |
| `graphify-out/2026-10-23/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-23/manifest.json` | JSON |
| `graphify-out/2026-10-24/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-24/graph.json` | JSON |
| `graphify-out/2026-10-24/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-24/manifest.json` | JSON |
| `graphify-out/2026-10-25/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-25/graph.json` | JSON |
| `graphify-out/2026-10-25/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-25/manifest.json` | JSON |
| `graphify-out/2026-10-26/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-26/graph.json` | JSON |
| `graphify-out/2026-10-26/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-26/manifest.json` | JSON |
| `graphify-out/2026-10-27/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-27/graph.json` | JSON |
| `graphify-out/2026-10-27/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-27/manifest.json` | JSON |
| `graphify-out/2026-10-28/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-28/graph.json` | JSON |
| `graphify-out/2026-10-28/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-28/manifest.json` | JSON |
| `graphify-out/2026-10-29/.graphify_labels.json` | JSON |
| `graphify-out/2026-10-29/graph.json` | JSON |
| `graphify-out/2026-10-29/GRAPH_REPORT.md` | MD |
| `graphify-out/2026-10-29/manifest.json` | JSON |
| `graphify-out/cache/2e5231ff223fff64f413a5de1b4b766a615b55dcce42249ed873d8ad39a5b884.json` | JSON |
| `graphify-out/cache/8aea07ce9b90221548afa07e0b310d41fc1fc2924448e43282942e02bcfb8e20.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/0f9cef5005b7516cf525e109c4a44741d0122c1b134602bbfcbcb0ed7b419da5.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/13974f33ed9667398644ad6b9e4127f6729551fe6705074af99d6f2a99922506.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/1b30138b7d74ddb918b66842ecf4ee1fa3156ef5765e74551a5efa1d017aa35f.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/1fb29ebb868a655a64a141b8c0964ab0c3c0c82fa8bd987794245da9dc3f761e.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/1fc56e3587b075d62f01a99cfa542deb93690b7ce70548c426fa08285591d881.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/27bc955c1b7742f1c9295398cedb614b06c7fd166d962ad7ffe177a68df9f1ea.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/3438e5bdb61b136f9290afa78ad2011e51914e20be953d28f616273879184fcb.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/3edc723a953c6ed565a50065c89379777cf11825fdd2b08805d98e701d6a21ed.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/478a51d51847440bb712e1e865bcf2caf1d9ac3537ae1823bba89010d84d73e2.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/67c8b00a6d7105beab53823b24716fb7bda49c7905f8afcbb5c56e84c9c9f84a.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/6988243a01d2bc3048e55865068fd8415eaca1a3f2608430583501ffbb464981.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/7b64c155d633b45ecac7f1d0e0751bdf440007ea69c06f43ca3780fe5bee0183.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/7cde0e0a6c9217bac2fbd841bda98409a296633423a1d0b49e4e0222978729a2.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/7dd5f0bae9f898a307afb7dbe4fa13a7b8248a70fd7d95a5be33fd5ca8077fb7.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/88d688e9aca099b1afc5dd15c937cc67e25f013f84d7ca5a9b41d4244f399def.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/898a135751e59dc27f3ad3c38cce8ea85e21d7ac5b24b6921ccce277e8bbb8eb.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/98e72834d22ff79f00e1bce8f1b061b6729fc879ced8ccd615ec79764bef0d89.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/b428fa3a1cebd40be9b225c977be0dfbadcd1ad2af82f30d94e461c8c8d0156a.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/bb1d207935119f5181743816ba818e8b915611081ac45349c40a3d37e8839497.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/be5700c8def8de2742d8b4145bd0b2906c9389611bd7855433767697fab0e090.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/c190356d10b97b1e08014e6f060ade5bc39f9176af12f8edfec62676897dcdec.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/ca440c62eb3b416da690e4a6516703b0f7a2488d13f6449104bb268cd6f71040.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/d014dcc57d525e7d385f0756bd064a8a425c103a8ab8dc16ddee74ecc575b90a.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/d0afcf94d601e7180ecd8fc3fc9f2141fdc132859402f396615b0e06e477ff6c.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/e1b65fc28cf6cf5b60779ec3f6bc621226b5d988f26cb8bc5bb9f716514c7693.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/eaa74ef2500527bd7c9bbeb69462324eb20ac1016ce631e184e1c7c21d5103a0.json` | JSON |
| `graphify-out/cache/ast/v0.9.92-s17-g97e5a2916848/f7641cd6f268cc6dc9bb93ea26f41f32ad5d601c27ebfdbe147c4f8dd0d110a1.json` | JSON |
| `graphify-out/cache/stat-index.json` | JSON |
| `graphify-out/graph.html` | HTML |
| `graphify-out/graph.json` | JSON |
| `graphify-out/GRAPH_REPORT.md` | MD |
| `graphify-out/manifest.json` | JSON |
| `hero-concepts/hero-01-living-scada.html` | HTML |
| `hero-concepts/hero-02-boot-sequence.html` | HTML |
| `hero-concepts/hero-03-field-vs-control.html` | HTML |
| `hero-concepts/hero-04-kinetic-type.html` | HTML |
| `hero-concepts/hero-05-constellation.html` | HTML |
| `hero-concepts/hero-06-midnight-aurora.html` | HTML |
| `hero-concepts/hero-07-blueprint.html` | HTML |
| `hero-concepts/hero-08-mission-control.html` | HTML |
| `hero-concepts/hero-09-night-watch.html` | HTML |
| `hero-concepts/hero-10-industrial-editorial.html` | HTML |
| `hero-concepts/hero-11-night-split.html` | HTML |
| `hero-concepts/hero-12-daybreak-cycle.html` | HTML |
| `hero-concepts/hero-13-clean-flow.html` | HTML |
| `hero-concepts/hero-14-iso-facility.html` | HTML |
| `hero-concepts/hero-15-pipeline-journey.html` | HTML |
| `hero-concepts/hero-16-daylight-ops.html` | HTML |
| `hero-concepts/hero-17-safety-bold.html` | HTML |
| `hero-concepts/hero-18-ops-map.html` | HTML |
| `hero-concepts/hero-19-instrument-wall.html` | HTML |
| `hero-concepts/hero-20-chaos-to-calm.html` | HTML |
| `hero-concepts/hero-21-all-conditions.html` | HTML |
| `hero-concepts/hero-22-signals-journey.html` | HTML |
| `hero-concepts/hero-23-buried-cutaway.html` | HTML |
| `hero-concepts/hero-24-photo-to-pid.html` | HTML |
| `hero-concepts/hero-25-lact-skid.html` | HTML |
| `hero-concepts/hero-26-pig-pov.html` | HTML |
| `hero-concepts/hero-27-hydraulic-profile.html` | HTML |
| `hero-concepts/hero-28-console-pov.html` | HTML |
| `hero-concepts/hero-29-zoom-dive.html` | HTML |
| `hero-concepts/hero-30-tankfarm-dusk.html` | HTML |
| `hero-concepts/hero-31-relay-race.html` | HTML |
| `hero-concepts/hero-32-jackpot.html` | HTML |
| `hero-concepts/hero-33-hype-reel.html` | HTML |
| `hero-concepts/hero-34-thermal-torch.html` | HTML |
| `hero-concepts/hero-35-mega-gauge.html` | HTML |
| `hero-concepts/hero-36-alarm-zapper.html` | HTML |
| `hero-concepts/hero-37-glitch-slam.html` | HTML |
| `hero-concepts/hero-38-story-cuts.html` | HTML |
| `hero-concepts/hero-39-particle-morph.html` | HTML |
| `hero-concepts/hero-40-big-red-button.html` | HTML |
| `hero-concepts/hero-41-split-flap.html` | HTML |
| `hero-concepts/index.html` | HTML |
| `index-hero.html` | HTML |
| `index-update.html` | HTML |
| `index.html` | HTML |
| `js/main.js` | JS |
| `OPS Automation Capabilities.html` | HTML |
| `OPS Automation Services Overview.html` | HTML |
| `OPS Capabilities - Plains All American.html` | HTML |
| `OPS Control Room Capabilities.html` | HTML |
| `OPS Control Room Services Overview.html` | HTML |
| `Plans/Site_Upgrade_Concept.html` | HTML |
| `Plans/Website_Architecture.html` | HTML |
| `README.md` | MD |
| `robots.txt` | TXT |
| `site-upgraded.html` | HTML |
| `sitemap.xml` | XML |
| `skills-lock.json` | JSON |
| `winners.json` | JSON |
