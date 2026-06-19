# Graph Report - F:/OPS Website  (2026-06-17)

## Corpus Check
- 43 files · ~0 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 43 nodes · 51 edges · 8 communities detected
- Extraction: 57% EXTRACTED · 43% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `Services Section (6 Capability Blocks)` - 10 edges
2. `Navigation Bar (fixed, mobile toggle, Golf link)` - 9 edges
3. `Control Room Section (OPS Control Center 24/7/365)` - 7 edges
4. `OPS Website Overview` - 5 edges
5. `Page Sections Layout` - 5 edges
6. `Capability: CRM Compliance Management (PHMSA, ISA-18.2)` - 5 edges
7. `Capability: SCADA and Automation Engineering` - 4 edges
8. `main()` - 3 edges
9. `Hero Section (Driving efficiency, Ensuring compliance)` - 3 edges
10. `Case Study Section (Midstream Operator Metrics)` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Page Sections Layout` --references--> `Control Room Section (OPS Control Center 24/7/365)`  [INFERRED]
  README.md → index.html
- `Page Sections Layout` --references--> `Case Study Section (Midstream Operator Metrics)`  [INFERRED]
  README.md → index.html
- `OPS Capabilities for Plains All American Doc` --conceptually_related_to--> `Services Section (6 Capability Blocks)`  [INFERRED]
  OPS Capabilities - Plains All American.html → index.html
- `Alarm Rationalization One-Pager (Marketing Sheet)` --conceptually_related_to--> `Capability: CRM Compliance Management (PHMSA, ISA-18.2)`  [INFERRED]
  alarm-rationalization-one-pager.html → index.html
- `OPS Control Room Capabilities Doc` --conceptually_related_to--> `Control Room Section (OPS Control Center 24/7/365)`  [INFERRED]
  OPS Control Room Capabilities.html → index.html

## Hyperedges (group relationships)
- **PHMSA/ISA-18.2 Compliance Services Cluster** — index_crm_compliance, index_compliance_consulting, index_compliance_section, index_ops_expertise, alarm_onepager [INFERRED 0.85]
- **Control Room Operations Cluster** — index_control_room_section, index_monitoring, index_control_room_ops, control_room_caps_doc, control_room_services_doc [INFERRED 0.85]
- **Automation Engineering Cluster** — index_scada_engineering, index_automation_section, index_platform_expertise, automation_caps_doc, automation_services_doc [INFERRED 0.85]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (8): Golf Page (Cushing Classic OPS Golf Tournament), About OPS Section (24/7 control room, SCADA, CRM), Automation Projects Section (5 Featured Panels), Case Study Section (Midstream Operator Metrics), Engineering Section (4 Automation Capability Cards), How We Work Section (6 value proposition cards), Navigation Bar (fixed, mobile toggle, Golf link), Testimonials Section (2 client quotes)

### Community 1 - "Community 1"
Cohesion: 0.32
Nodes (8): Capability: Compliance Consulting (mock audits, PHMSA), Contact Section (email, phone CTA), Capability: Control Room Operations, Hero Section (Driving efficiency, Ensuring compliance), Services Section (6 Capability Blocks), Capability: Purpose-Built Compliance and Operations Software, OPS Capabilities for Plains All American Doc, Page Sections Layout

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (8): Alarm Rationalization One-Pager (Marketing Sheet), OPS Control Room Capabilities Doc, OPS Control Room Services Overview Doc, Compliance Services Section (horizontal scroll), Control Room Section (OPS Control Center 24/7/365), Capability: CRM Compliance Management (PHMSA, ISA-18.2), Capability: 24/7 Monitoring and Callout, Operations Expertise Tags (16 competency tags)

### Community 3 - "Community 3"
Cohesion: 0.4
Nodes (6): CSS Component Classes, DNS / Hosting Configuration, OPS Website Overview, Tech Stack (Tailwind/GSAP/Lucide/GitHub Pages), OPS Web Site Editor (PyQt6 companion app), Robots / Sitemap (www.optimalpipeline.com)

### Community 4 - "Community 4"
Cohesion: 0.4
Nodes (5): OPS Automation Engineering Capabilities Doc, OPS Automation Services Overview Doc, Automation Engineering Section (40yr SCADA, 150+ projects), Platform Expertise (Ignition, ControlLogix, Omni, MQTT), Capability: SCADA and Automation Engineering

### Community 5 - "Community 5"
Cohesion: 0.83
Nodes (3): fetch_sheet(), main(), parse_rows()

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): Apple-Style Design with GSAP Animations, OPS Website Architecture and Operations Guide, Static Site on GitHub Pages Architecture Decision

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **18 isolated node(s):** `OPS Web Site Editor (PyQt6 companion app)`, `Robots / Sitemap (www.optimalpipeline.com)`, `Capability: Control Room Operations`, `Capability: Compliance Consulting (mock audits, PHMSA)`, `Platform Expertise (Ignition, ControlLogix, Omni, MQTT)` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 7`** (1 nodes): `main.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Services Section (6 Capability Blocks)` connect `Community 1` to `Community 0`, `Community 2`, `Community 4`?**
  _High betweenness centrality (0.340) - this node is a cross-community bridge._
- **Why does `Navigation Bar (fixed, mobile toggle, Golf link)` connect `Community 0` to `Community 1`, `Community 2`?**
  _High betweenness centrality (0.239) - this node is a cross-community bridge._
- **Why does `Page Sections Layout` connect `Community 1` to `Community 0`, `Community 2`, `Community 3`?**
  _High betweenness centrality (0.229) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Services Section (6 Capability Blocks)` (e.g. with `Page Sections Layout` and `OPS Capabilities for Plains All American Doc`) actually correct?**
  _`Services Section (6 Capability Blocks)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `Control Room Section (OPS Control Center 24/7/365)` (e.g. with `Page Sections Layout` and `Capability: 24/7 Monitoring and Callout`) actually correct?**
  _`Control Room Section (OPS Control Center 24/7/365)` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Page Sections Layout` (e.g. with `Hero Section (Driving efficiency, Ensuring compliance)` and `Services Section (6 Capability Blocks)`) actually correct?**
  _`Page Sections Layout` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `OPS Web Site Editor (PyQt6 companion app)`, `Robots / Sitemap (www.optimalpipeline.com)`, `Capability: Control Room Operations` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._