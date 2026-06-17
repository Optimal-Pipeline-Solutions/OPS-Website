# Graph Report - F:/OPS Website  (2026-06-17)

## Corpus Check
- 19 files · ~403,349 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 40 nodes · 49 edges · 7 communities detected
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.86)
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

### Community 0 - "Core Services and Capabilities"
Cohesion: 0.28
Nodes (9): Capability: Compliance Consulting (mock audits, PHMSA), Contact Section (email, phone CTA), Capability: Control Room Operations, Hero Section (Driving efficiency, Ensuring compliance), Capability: 24/7 Monitoring and Callout, Services Section (6 Capability Blocks), Capability: Purpose-Built Compliance and Operations Software, OPS Capabilities for Plains All American Doc (+1 more)

### Community 1 - "Site Navigation and UX Sections"
Cohesion: 0.22
Nodes (9): Golf Page (Cushing Classic OPS Golf Tournament), About OPS Section (24/7 control room, SCADA, CRM), Automation Projects Section (5 Featured Panels), Case Study Section (Midstream Operator Metrics), Compliance Services Section (horizontal scroll), Engineering Section (4 Automation Capability Cards), How We Work Section (6 value proposition cards), Navigation Bar (fixed, mobile toggle, Golf link) (+1 more)

### Community 2 - "Tech Stack and Infrastructure"
Cohesion: 0.4
Nodes (6): CSS Component Classes, DNS / Hosting Configuration, OPS Website Overview, Tech Stack (Tailwind/GSAP/Lucide/GitHub Pages), OPS Web Site Editor (PyQt6 companion app), Robots / Sitemap (www.optimalpipeline.com)

### Community 3 - "Control Room and CRM Compliance"
Cohesion: 0.4
Nodes (6): Alarm Rationalization One-Pager (Marketing Sheet), OPS Control Room Capabilities Doc, OPS Control Room Services Overview Doc, Control Room Section (OPS Control Center 24/7/365), Capability: CRM Compliance Management (PHMSA, ISA-18.2), Operations Expertise Tags (16 competency tags)

### Community 4 - "SCADA and Automation Engineering"
Cohesion: 0.4
Nodes (5): OPS Automation Engineering Capabilities Doc, OPS Automation Services Overview Doc, Automation Engineering Section (40yr SCADA, 150+ projects), Platform Expertise (Ignition, ControlLogix, Omni, MQTT), Capability: SCADA and Automation Engineering

### Community 5 - "Golf Data Sync Scripts"
Cohesion: 0.83
Nodes (3): fetch_sheet(), main(), parse_rows()

### Community 6 - "GSAP Animation Engine"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **16 isolated node(s):** `OPS Web Site Editor (PyQt6 companion app)`, `Robots / Sitemap (www.optimalpipeline.com)`, `Capability: Control Room Operations`, `Capability: Compliance Consulting (mock audits, PHMSA)`, `Platform Expertise (Ignition, ControlLogix, Omni, MQTT)` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `GSAP Animation Engine`** (1 nodes): `main.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Services Section (6 Capability Blocks)` connect `Core Services and Capabilities` to `Site Navigation and UX Sections`, `Control Room and CRM Compliance`, `SCADA and Automation Engineering`?**
  _High betweenness centrality (0.395) - this node is a cross-community bridge._
- **Why does `Navigation Bar (fixed, mobile toggle, Golf link)` connect `Site Navigation and UX Sections` to `Core Services and Capabilities`, `Control Room and CRM Compliance`?**
  _High betweenness centrality (0.277) - this node is a cross-community bridge._
- **Why does `Page Sections Layout` connect `Core Services and Capabilities` to `Site Navigation and UX Sections`, `Tech Stack and Infrastructure`, `Control Room and CRM Compliance`?**
  _High betweenness centrality (0.266) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Services Section (6 Capability Blocks)` (e.g. with `OPS Capabilities for Plains All American Doc` and `Page Sections Layout`) actually correct?**
  _`Services Section (6 Capability Blocks)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `Control Room Section (OPS Control Center 24/7/365)` (e.g. with `Capability: CRM Compliance Management (PHMSA, ISA-18.2)` and `Capability: 24/7 Monitoring and Callout`) actually correct?**
  _`Control Room Section (OPS Control Center 24/7/365)` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Page Sections Layout` (e.g. with `Hero Section (Driving efficiency, Ensuring compliance)` and `Services Section (6 Capability Blocks)`) actually correct?**
  _`Page Sections Layout` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `OPS Web Site Editor (PyQt6 companion app)`, `Robots / Sitemap (www.optimalpipeline.com)`, `Capability: Control Room Operations` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._