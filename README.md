# OPS Website

The official company website for **Optimal Pipeline Solutions** — a static, single-page site hosted on GitHub Pages.

**Live URL:** https://optimal-pipeline-solutions.github.io/OPS-Website/  
**Production domain (pending DNS flip):** https://www.optimalpipeline.com

---

## Overview

Apple-inspired single-page design with full-section scroll, GSAP ScrollTrigger animations, and a dark/light alternating section layout. No build step — plain HTML, CSS, and JavaScript served directly from GitHub Pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Layout & Utility | Tailwind CSS (CDN) |
| Animations | GSAP 3.12.5 + ScrollTrigger + ScrollToPlugin (CDN) |
| Icons | Lucide Icons (CDN) |
| Hosting | GitHub Pages (`main` branch) |
| DNS | Cloudflare (pending flip from Wix) |

No Node.js, no build pipeline, no dependencies to install. Edit files and push.

---

## File Structure

```
OPS Website/
├── index.html              # Main site — the only file that matters
├── css/
│   └── styles.css          # All custom styles (Tailwind handles utilities)
├── js/
│   └── main.js             # GSAP animations, scroll behavior, mobile menu
├── images/
│   ├── hero-bg.jpg         # Hero section background
│   ├── control-room.jpg    # Control room section background
│   ├── automation.jpg      # Automation section background
│   ├── engineering.jpg     # About / engineering section background
│   ├── pipeline-aerial.jpg # Case study section background
│   ├── logo.png            # OPS logo (used in nav, hero, footer)
│   └── ...                 # Other image assets
├── Plans/
│   └── Website_Architecture.html  # Design reference doc
├── favicon.ico
├── apple-touch-icon.png
├── sitemap.xml
└── robots.txt
```

---

## Page Sections

| Section ID | Theme | Description |
|---|---|---|
| `#hero` | Dark | Full-screen hero with logo, tagline, and CTA buttons |
| `#about-ops` | Dark | Company overview with engineering background image |
| `#services` | Light | What We Deliver — 6 capability blocks |
| `#control-room` | Dark | OPS Control Center features and pill list |
| `#stats` | Light | 4 key differentiator stats |
| *(operations expertise)* | Dark | Operations expertise tag grid |
| *(automation engineering)* | Dark | Automation engineering narrative + industry tags + stats |
| `#engineering` | Light | 4 automation capability cards |
| `#automation` | Dark | 5 featured automation project panels |
| `#compliance` | Light | Compliance services horizontal scroll card row |
| `#case-study` | Dark | Midstream operator case study — metrics, summary, result cards |
| `#testimonials` | Dark | Two client quotes |
| `#how-we-work` | Light | 6 value proposition cards |
| `#contact` | Dark | Contact CTA with email and phone |

---

## Component Classes

Defined in `css/styles.css`:

| Class | Used For |
|---|---|
| `ops-section` | Every section wrapper — applies theme padding and scroll animation targets |
| `ops-card` | Icon + title + text cards (services, compliance) |
| `ops-card--fixed` | Fixed-width card for horizontal scroll rows |
| `ops-pill` | Icon + label row (control room features) |
| `ops-pill-tag` | Small tag badge (platform expertise, operations tags) |
| `ops-panel` | Tag + title + text + visual side panel (automation projects) |
| `ops-quote` | Testimonial block with quote icon |
| `ops-stat` | Big number + label (stats section) |
| `ops-check` | Checkmark + label row |
| `capability-block` | Dark/light themed card with icon (What We Deliver, Engineering) |
| `value-block` | Light-theme card (How We Work) |

Sections use `data-theme="dark"` or `data-theme="light"` to switch between dark (`#111111`) and light (`#F5F5F7`) color schemes. The JS and CSS handle all theming automatically.

---

## Making Changes

1. Edit `index.html` for content changes
2. Edit `css/styles.css` for style changes
3. Edit `js/main.js` for animation or interaction changes
4. Commit and push to `main` — GitHub Pages deploys automatically (usually within 1-2 minutes)

Hard refresh (`Ctrl+Shift+R`) after deployment to bypass browser cache.

---

## DNS / Hosting

The site is currently accessible at the GitHub Pages URL above. The production domain (`www.optimalpipeline.com`) is still pointed at Wix.

**To flip DNS when ready:**
1. In Cloudflare dashboard, change `www` CNAME from `www132.wixdns.net` → `optimal-pipeline-solutions.github.io`
2. Replace existing A records with GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Add a `CNAME` file to the repo root containing: `www.optimalpipeline.com`
4. In GitHub repo Settings → Pages, set custom domain to `www.optimalpipeline.com`

---

## Related

- **OPS Web Site Editor** (`F:\OPS Web Site Editor\`) — PyQt6 desktop app for editing site content through form fields with live preview and one-click push
- **GitHub Repo:** [Optimal-Pipeline-Solutions/OPS-Website](https://github.com/Optimal-Pipeline-Solutions/OPS-Website)
