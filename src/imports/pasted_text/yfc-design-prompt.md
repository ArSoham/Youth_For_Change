# Figma Design Prompt — "Youth For Change" (YFC) Club Website

> Paste this into Figma AI / Figma Make (or hand to a designer) as the design brief. Design only — layout, visuals, and interactions. Content below is final copy where provided; anything marked `[PLACEHOLDER]` still needs input, and every `[IMAGE: ...]` marks a spot to drop in real media later.

---

## 1. Brand & Style Direction

**Club:** Youth For Change (YFC) — Kathmandu University
**Tone:** Semiformal — credible and institutional enough for a university-affiliated club, but energetic, youthful, and interactive (not stiff/corporate).

**Logo:** `[IMAGE: yfc-logo.png — provided separately, circular emblem]`
- Circular badge split into two halves: warm **gold/amber** (left) and deep **navy blue** (right)
- White silhouette of a leaping/running figure with raised arm at center, holding a small circular object (book/globe motif), with a flowing ribbon/flame swoosh across the gold half and a small star accent at the top
- Use this logo as the anchor for the entire color palette

**Suggested color palette (derived from logo):**
- Primary Gold/Amber: `#F5A623` (adjust to exact logo sample)
- Primary Navy Blue: `#1B3B6F` (adjust to exact logo sample)
- White: `#FFFFFF`
- Neutral dark (text): `#1A1A1A` or navy-tinted charcoal
- Neutral light (backgrounds/cards): `#F7F7F5` or soft off-white

**Typography:**
- Headings: bold, modern sans-serif (e.g., Poppins, Sora, or similar geometric sans) — confident, slightly rounded to match the logo's friendly energy
- Body: clean, highly readable sans-serif (e.g., Inter, Work Sans)

**Overall feel:** Clean grid layout, generous white space, bold color-blocked section dividers (gold/navy), rounded corners on cards/buttons echoing the circular logo, subtle motion/micro-interactions on scroll and hover.

**Interactivity requirements:**
- Sticky/transparent-to-solid navbar on scroll
- Smooth scroll to anchor sections (Home / About / Initiatives / Events / Team / Gallery / Join Us)
- Hover states on all cards (initiatives, events, team, gallery) — subtle lift/scale + shadow
- Scroll-triggered fade/slide-in animations for section content
- Horizontally scrollable/draggable carousel for the Team section (see §6)
- Lightbox/modal image viewer for Gallery (see §7)

---

## 2. Site Navigation

```
Home | About | Initiatives | Events | Team | Gallery | Join Us
```
Logo (left, links to Home) + nav links (right) + a prominent "Join Us" CTA button in the navbar itself, distinct from the nav link.

---

## 3. Home (Hero Section)

- Full-width hero with bold headline and subheadline, gold/navy gradient or color-block background, logo prominent
- Headline: **"Empowering Youth for Social Impact"**
- Sub-line: **"Lead • Learn • Explore"**
- Supporting paragraph: *"Youth For Change – Kathmandu University is a student-led organization established in 2020, dedicated to creating meaningful social impact through youth engagement, intellectual exchange, advocacy, and collaboration."*
- Two CTA buttons: **"Get Involved"** (scrolls to Join Us) and **"Learn More"** (scrolls to About)
- `[IMAGE: hero-banner.jpg — wide action photo of club members/events, or an illustrated gold/navy graphic backdrop]`
- Optional: animated counters teaser (Established 2020 / Initiatives / Years Active) — see About section stats, can be repeated here as a scroll-in strip

---

## 4. About

- Two-column layout: text block (left) + supporting image or stat cards (right)
- Copy: *"Youth For Change – Kathmandu University (YFC-KU) is a student-led organization established in 2020 with the goal of creating meaningful social impact through youth engagement, intellectual exchange, advocacy, and collaboration."*
- **Stat counters** (animated count-up on scroll):
  - 2020 — Established
  - 4 — Initiatives
  - 6+ — Years Active
- **Mission:** *"To promote literacy, inclusivity, youth empowerment, and financial awareness through impactful programs, collaborations, and community engagement."*
- **Vision:** *"To create transformative opportunities for youth, foster innovation and collaboration, and build a more inclusive and empowered community."*
- `[IMAGE: about-team.jpg — group photo of the club]`

---

## 5. Initiatives

4 initiative cards in a responsive grid (2x2 desktop / stacked mobile). Each card: image, title, short description, link-out button.

**Subpage requirement:** Each of the 4 initiatives must have its own basic subpage (e.g. `/initiatives/narrative-nexus`, `/initiatives/project-sanrakshyan`, `/initiatives/nitiverse`, `/initiatives/kumun`). Keep these simple — logo/header, initiative name, short description, cover image, and a clear button linking out to the initiative's Instagram page (or, for Narrative Nexus, its participation form). Design one reusable subpage template rather than 4 fully custom layouts.

1. **Narrative Nexus**
   - Description: *"An event that aims to promote literature at Kathmandu University — featuring poems, storytelling, jokes, book reviews, story reviews, and film reviews, in any form of literature."*
   - CTA: "Participate" → links to Narrative Nexus Participation Form `[PLACEHOLDER: form link]`
   - `[IMAGE: narrative-nexus-cover.jpg]`

2. **Project Sanrakshyan**
   - Description: `[PLACEHOLDER: short description]`
   - CTA: "Follow on Instagram" → https://www.instagram.com/projectsanrakshan_/
   - `[IMAGE: project-sanrakshyan-cover.jpg]`

3. **Nitiverse**
   - Description: `[PLACEHOLDER: short description]`
   - CTA: "Follow on Instagram" → https://www.instagram.com/nitiverse.official/
   - `[IMAGE: nitiverse-cover.jpg]`

4. **KUMUN**
   - Description: `[PLACEHOLDER: short description — Model United Nations conference]`
   - CTA: "Follow on Instagram" → https://www.instagram.com/kumun_25/
   - `[IMAGE: kumun-cover.jpg]`

---

## 6. Events

Card grid or timeline layout for past/upcoming events. Each card: image, date, title, location, short description, "Learn More" link.

1. **KUMUN** — `[PLACEHOLDER: date/location]` — Model United Nations event. `[IMAGE: event-kumun.jpg]`
2. **Book Talk Session** — *Promoting literacy and intellectual exchange through discussions on recently read books across departments.* `[IMAGE: event-book-talk.jpg]`
3. **Pride Parade & Flash Mob** — *Celebrating diversity and advocating for inclusivity to foster a safe and inclusive campus environment.* `[IMAGE: event-pride-parade.jpg]`
4. **Tejshree Memorial Moot Court** — *Supporting legal excellence and youth advocacy through collaborative competitions and legal education engagement.* `[IMAGE: event-moot-court.jpg]`
5. **Financial Literacy Session** — *Enhancing students' understanding of financial markets, investment concepts, and economic awareness.* `[IMAGE: event-financial-literacy.jpg]`
6. **MoU Initiative** — *Fostering collaboration and long-term youth empowerment through strategic partnerships with international organizations.* `[IMAGE: event-mou.jpg]`

Design note: filter/tabs for "Upcoming" vs "Past" events would be a nice interactive touch if content allows.

---

## 7. Team

**Layout requirement (specific):**
- **President** is featured first — larger, standalone card at the top/center (bigger photo, name, title, short quote/bio), visually distinct from the rest
- Below/after that, **all other executive members** sit in a **horizontally scrollable carousel** (drag or arrow-navigation) — each card: photo, name, role
- `[IMAGE: team-president.jpg]`
- `[IMAGE: team-vp.jpg]`, `[IMAGE: team-treasurer.jpg]`, `[IMAGE: team-soe-rep.jpg]`, plus `[IMAGE: team-member-1.jpg]` through `[IMAGE: team-member-N.jpg]` for remaining committee members
- `[PLACEHOLDER: final list of names/roles/bios for each member]`

---

## 8. Photo Gallery

- A dedicated gallery section/page acting as a **placeholder grid for ~30 photos**
- Masonry or uniform grid layout, responsive (2 cols mobile, 3–4 cols desktop)
- Click-to-expand **lightbox** viewer with next/previous navigation
- `[IMAGE: gallery-01.jpg]` through `[IMAGE: gallery-30.jpg]` — to be uploaded later; design should treat this as a flexible/expandable folder of images, not a fixed count
- `[PLACEHOLDER: exact cPanel file path/folder where gallery photos will be uploaded, e.g. public_html/images/gallery/ — to be confirmed later]` — once set, the gallery section's image source should point to this folder so new photos just need to be dropped in without touching the code

---

## 9. Join Us

- Bold, high-contrast closing section (gold or navy full-bleed background)
- Headline: **"Join the Movement"**
- Copy: *"Are you passionate about social change? Join Youth for Change and be part of a community of young leaders making a difference."*
- Primary CTA button: **"Open Registration Form"** → https://forms.gle/aJwfCzGFUQ5o6mDB7 (opens in new tab)
- Design option: embed the Google Form directly on the page (iframe) as an alternative to a link-out button — flag both options in the Figma file so it can be decided at dev stage

---

## 10. Footer

- Logo + short tagline: *"Empowering youth to create sustainable social impact through innovation and community engagement."*
- Quick Links: About / Initiatives / Events / Team / Gallery / Join Us
- Contact: `[PLACEHOLDER: email]`, `[PLACEHOLDER: phone]`, Kathmandu University, Kavre, Nepal
- Social icons: Instagram, Facebook, LinkedIn/X `[PLACEHOLDER: links]`
- Copyright: © 2026 Youth for Change – Kathmandu University. All rights reserved.

---

## 11. Deliverables Expected from Figma

- Desktop (1440px) and Mobile (375px) frames for all 7 sections/pages
- Component library: buttons, nav bar, cards (initiative/event/team/gallery), footer
- Interaction/prototype flow: nav scroll links, hover states, team carousel drag, gallery lightbox open/close
- Exported style guide: color tokens, type scale, spacing system, button/card states

---

### Notes for next steps
- Once designs are approved in Figma, this will be built as a static HTML/CSS/JS site and deployed via the university's cPanel hosting (see separate deployment doc).
- Remaining `[PLACEHOLDER]` items (initiative descriptions, team bios, contact details, form links) should be filled in before final handoff to development.