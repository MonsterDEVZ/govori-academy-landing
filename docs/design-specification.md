# Design Specification - GKIDS Premium Strategic Presentation

## 1. Design Direction & Rationale

**Style:** Premium Luxury Black & Gold  
**Essence:** Sophisticated elegance meets data-driven authority. This presentation combines the gravitas of financial reporting with the refined aesthetics of luxury brands. Deep blacks create dramatic contrast, while strategic gold accents highlight key metrics and achievements. The design communicates confidence, exclusivity, and strategic precision.

**Visual References:**
- **Luxury Finance:** Goldman Sachs annual reports, BlackRock investor presentations (premium data visualization)
- **High-end Tech:** Tesla investor decks, Apple keynote presentations (minimalist sophistication)
- **Luxury Retail:** Dior, Cartier web experiences (elegant typography, generous spacing)

**Why This Direction:**
- **Target Audience:** Executive stakeholders, investors, strategic partners (30-55 age group, high-net-worth decision makers)
- **Content Type:** High-density data requires premium treatment to maintain engagement and credibility
- **Brand Positioning:** GKIDS as premium educational service provider (56,000 som price point) demands elevated presentation
- **Psychological Impact:** Black + gold = exclusivity, authority, success; reduces cognitive load through clear hierarchy

---

## 2. Design Tokens

### 2.1 Color Palette

| Token | Value | Usage | WCAG Validation |
|-------|-------|-------|-----------------|
| **Primary Gold 500** | `#FFD700` | Key metrics, CTAs, highlights | AA+ on black |
| **Primary Gold 700** | `#B8860B` | Hover states, secondary accents | AA on black |
| **Primary Gold 300** | `#FFED4E` | Subtle highlights, borders | AAA on black |
| **Neutral Black 900** | `#000000` | Primary background | - |
| **Neutral Black 800** | `#0A0A0A` | Card backgrounds, elevated surfaces | - |
| **Neutral Gray 700** | `#1A1A1A` | Dividers, subtle borders | - |
| **Neutral Gray 500** | `#4A4A4A` | Body text on black | AA |
| **Neutral Gray 300** | `#9E9E9E` | Secondary text, captions | AA on black |
| **Neutral White** | `#FFFFFF` | Headings, primary text | AAA on black |
| **Success Green** | `#10B981` | Positive metrics (+% growth) | AA on black |
| **Alert Red** | `#EF4444` | Negative indicators (if needed) | AA on black |

**WCAG Key Pairings:**
- White (#FFFFFF) on Black (#000000): 21:1 (AAA)
- Gold (#FFD700) on Black (#000000): 11.2:1 (AAA)
- Gray 300 (#9E9E9E) on Black (#000000): 5.8:1 (AA)

### 2.2 Typography

| Token | Family | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|--------|--------|------|-------------|----------------|-------|
| **Display 1** | Playfair Display / Cormorant Garamond | 700 | 72px / 4.5rem | 1.1 | -0.02em | Hero headlines |
| **Display 2** | Playfair Display / Cormorant Garamond | 600 | 56px / 3.5rem | 1.15 | -0.015em | Section titles |
| **Heading 1** | Montserrat / Inter | 700 | 48px / 3rem | 1.2 | -0.01em | Primary headings |
| **Heading 2** | Montserrat / Inter | 600 | 36px / 2.25rem | 1.25 | 0 | Subsection headings |
| **Heading 3** | Montserrat / Inter | 600 | 24px / 1.5rem | 1.3 | 0 | Card titles |
| **Body Large** | Inter / Source Sans Pro | 400 | 20px / 1.25rem | 1.6 | 0 | Large body text |
| **Body** | Inter / Source Sans Pro | 400 | 16px / 1rem | 1.6 | 0 | Standard text |
| **Body Small** | Inter / Source Sans Pro | 400 | 14px / 0.875rem | 1.5 | 0 | Captions, labels |
| **Number Display** | Montserrat / Inter | 700 | 64px / 4rem | 1.1 | -0.02em | Large metrics |
| **Number Metric** | Montserrat / Inter | 600 | 32px / 2rem | 1.2 | -0.01em | Data cards |

**Font Pairing Strategy:** Serif display (Playfair/Cormorant) for luxury headlines + geometric sans (Montserrat/Inter) for data credibility

**Scale:** Golden Ratio (1.618) — luxury positioning
**Baseline:** 8pt grid for vertical rhythm

### 2.3 Spacing

| Token | Value | Usage |
|-------|-------|-------|
| **spacing-xs** | 8px | Tight internal padding |
| **spacing-sm** | 16px | Card internal elements |
| **spacing-md** | 24px | Component gaps |
| **spacing-lg** | 32px | Section internal padding |
| **spacing-xl** | 48px | Card padding, generous spacing |
| **spacing-2xl** | 64px | Section vertical spacing |
| **spacing-3xl** | 96px | Major section dividers |
| **spacing-4xl** | 128px | Hero padding, major breaks |

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| **radius-sm** | 4px | Small elements |
| **radius-md** | 8px | Buttons |
| **radius-lg** | 12px | Cards, data containers |
| **radius-xl** | 16px | Large cards, hero elements |

### 2.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| **shadow-card** | `0 4px 12px rgba(0,0,0,0.4)` | Elevated cards |
| **shadow-card-hover** | `0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,215,0,0.2)` | Card hover state with gold glow |
| **shadow-glow-gold** | `0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.15)` | Gold accent glow |
| **shadow-text-gold** | `0 2px 8px rgba(255,215,0,0.4)` | Text shadow for gold elements |

### 2.6 Animation

| Token | Value | Usage |
|-------|-------|-------|
| **duration-fast** | 200ms | Small interactions |
| **duration-base** | 300ms | Standard transitions |
| **duration-slow** | 400ms | Luxury feel, section reveals |
| **duration-luxury** | 600ms | Hero animations |
| **easing-luxury** | cubic-bezier(0.4, 0, 0.2, 1) | Elegant easing |

---

## 3. Component Specifications

### 3.1 Hero Section

**Structure:**
- Full viewport height (min-height: 600px, max-height: 100vh)
- Centered content container (max-width: 1200px)
- Layered background: solid black base + subtle gold gradient overlay (top-right corner, 10% opacity)
- Optional: Geometric golden lines pattern (diagonal, low opacity ~5%)

**Tokens:**
- Background: `neutral-black-900` with optional gold gradient overlay
- Display 1 (72px, Playfair Display 700, white, -0.02em tracking)
- Body Large (20px, Inter 400, gray-300) for subtitle
- CTA button: 56px height, gold-500 background, black text, radius-md
- Spacing: padding-4xl (128px vertical), padding-xl (48px horizontal on mobile)

**States:**
- Initial: Title fades in with 600ms duration
- Scroll indicator: subtle gold animation (pulse effect)

**Design Note:** Hero must establish premium tone immediately. Generous spacing (128px padding), large typography (72px), and strategic gold accent create executive presentation feel.

### 3.2 Data Card (Metric Display)

**Structure:**
- Card container: background neutral-black-800, radius-lg (12px), padding-xl (48px)
- Number display (64px or 32px depending on hierarchy, Montserrat 700, gold-500)
- Label text (16px, Inter 400, gray-300)
- Optional: Icon in gold-500 (24px)
- Border: 1px solid gray-700

**Tokens:**
- Background: `neutral-black-800`
- Number: `number-display` (64px) or `number-metric` (32px), color `gold-500`
- Label: `body` (16px), color `gray-300`
- Border: 1px `gray-700`
- Shadow: `shadow-card`
- Padding: `spacing-xl` (48px)
- Border radius: `radius-lg` (12px)

**States:**
- Default: subtle shadow
- Hover: lift (translateY -4px), `shadow-card-hover` with gold glow, scale 1.02
- Transition: 300ms ease-out

**Responsive:**
- Desktop: 3-4 columns grid, gap 32px
- Tablet: 2 columns
- Mobile: 1 column, reduced padding (32px)

**Design Note:** Cards must "float" on black background. Gold numbers draw attention to key metrics. Hover lift + gold glow reinforces premium interactivity.

### 3.3 Section Header

**Structure:**
- Section number in gold (optional, 14px uppercase, letter-spacing +0.1em)
- Heading 1 or Display 2 (48-56px, white)
- Divider line (1px gold-500, width 64px, below title)
- Body text (16px, gray-300, max-width 720px)

**Tokens:**
- Section number: `body-small` (14px) uppercase, `gold-500`, tracking +0.1em
- Heading: `heading-1` (48px) or `display-2` (56px), `white`
- Divider: 1px height, 64px width, `gold-500`, spacing-md (24px) below title
- Body: `body` (16px), `gray-300`, max-width 720px

**Spacing:**
- Vertical: spacing-3xl (96px) above section, spacing-2xl (64px) below header
- Divider: spacing-md (24px) margin top/bottom

**Design Note:** Gold divider + large typography + generous spacing = executive presentation. Section numbers in gold uppercase create wayfinding without clutter.

### 3.4 CTA Button

**Structure:**
- Primary button: 56px height (desktop), 48px (mobile)
- Padding: 32px horizontal, 16px vertical
- Background: gold-500, text: black, weight 600
- Border radius: radius-md (8px)

**Tokens:**
- Primary background: `gold-500`, text: `neutral-black-900`, weight 600, size 18px
- Secondary (if needed): border 2px `gold-500`, background transparent, text `gold-500`
- Height: 56px (desktop), 48px (mobile)
- Padding: 32px horizontal
- Border radius: `radius-md` (8px)

**States:**
- Default: gold background
- Hover: `gold-700` background, lift (translateY -2px), `shadow-glow-gold`
- Active: scale 0.98
- Transition: 200ms

**Design Note:** High contrast (gold on black) ensures visibility. Large touch target (56px). Gold glow on hover adds luxury feel.

### 3.5 Table / Comparison Grid

**Structure:**
- Container: background `black-800`, border 1px `gray-700`, radius-lg
- Header row: background `gray-700`, text `white`, weight 600, 16px
- Data rows: text `gray-300`, 16px
- Dividers: 1px `gray-700`
- Highlighted cells (key metrics): text `gold-500`, weight 600

**Tokens:**
- Container background: `neutral-black-800`
- Border: 1px `gray-700`
- Header: background `gray-700`, text `white`, weight 600
- Body text: `gray-300`, size 16px
- Highlight: `gold-500`, weight 600
- Padding: 16px cells, 24px rows
- Border radius: `radius-lg`

**Responsive:**
- Desktop: Full table
- Tablet: Horizontal scroll
- Mobile: Stacked cards (transform table rows to vertical cards)

**Design Note:** Tables must maintain readability on black background. Gold highlights for key data points. Generous padding (24px rows) for luxury feel.

### 3.6 Timeline / Roadmap

**Structure:**
- Vertical timeline on desktop, horizontal scroll on mobile
- Golden line (2px width) connecting milestones
- Milestone nodes: 16px circle, gold-500 fill, white border 2px
- Card per milestone: background `black-800`, padding-lg (32px), radius-lg
- Week/month label: 14px uppercase, gold-500, tracking +0.1em
- Task list: 16px, gray-300, checkmark icon gold-500

**Tokens:**
- Timeline line: 2px width, `gold-500`
- Nodes: 16px circle, background `gold-500`, border 2px `white`
- Card background: `neutral-black-800`, padding `spacing-lg` (32px)
- Label: `body-small` (14px) uppercase, `gold-500`
- Tasks: `body` (16px), `gray-300`
- Icon: gold-500, 20px

**Spacing:**
- Gap between cards: spacing-lg (32px)
- Padding: spacing-lg (32px) cards

**Design Note:** Gold timeline creates visual thread. Nodes + cards = clear progression. Uppercase labels in gold reinforce structure.

---

## 4. Layout & Responsive Strategy

**Reference:** content-structure-plan.md for 9-section SPA structure

### 4.1 Global Layout Patterns

**Container System:**
- Max-width: 1400px (luxury spaciousness)
- Content-width: 1200px (reading comfort)
- Narrow-width: 720px (body text optimal)
- Padding: 48px horizontal (desktop), 24px (tablet), 16px (mobile)

**Section Pattern (all 9 sections):**
1. **Vertical spacing:** 96px between sections (desktop), 64px (tablet), 48px (mobile)
2. **Section header:** Apply §3.3 pattern (number + title + divider + description)
3. **Content area:** Varies per section (see below)
4. **Background treatment:** Alternating solid black (#000000) and elevated black (#0A0A0A) creates subtle depth

### 4.2 Section-by-Section Layout Mapping

**Section 1 - Hero:**
- Pattern: Full-viewport hero (§3.1)
- Height: 600-800px
- Content: Centered title (Display 1, 72px) + subtitle (Body Large, 20px) + CTA button (§3.4)
- Visual: Optional diagonal gold lines pattern (low opacity background)

**Section 2 - Current Situation:**
- Pattern: 4-column data card grid (§3.2)
- Content: 4 key metrics (Лиды 300/нед, Конверсия 7.35%, CPL $0.59, Потенциальная выручка 1,232,000 сом)
- Grid: 4 columns → 2 columns (tablet) → 1 column (mobile)
- Gap: 32px

**Section 3 - Market Analysis:**
- Pattern: 2-column asymmetric split (60/40)
- Left (60%): Text block with key numbers (население, аудитория, емкость рынка)
- Right (40%): Stacked data cards (3-4 small metric cards)
- Responsive: Stack vertically on tablet/mobile

**Section 4 - Competitor Analysis:**
- Pattern: Table/comparison grid (§3.5) or horizontal card carousel
- Content: 7 competitors with key attributes (название, цены, позиционирование)
- Desktop: Full table with 5-6 columns
- Tablet/Mobile: Transform to card carousel with horizontal scroll

**Section 5 - Scaling Strategy:**
- Pattern: Icon grid (3 rows × 2-3 icons per row = 7 channels total)
- Content: 7 каналов (YouTube Shorts, TikTok, Instagram, Telegram, etc.) each with icon (gold), title, 1-line description
- Grid: 3 columns → 2 columns (tablet) → 1 column (mobile)
- Gap: 48px

**Section 6 - 1-Month Plan:**
- Pattern: Timeline/roadmap (§3.6) — 4 weeks horizontal
- Content: Week 1-4 milestones with tasks per week
- Desktop: Horizontal timeline with 4 cards
- Mobile: Vertical timeline with stacked cards

**Section 7 - 3-6 Month Plan:**
- Pattern: 2-phase roadmap (Phase 1: Мес 1-3, Phase 2: Мес 4-6)
- Content: Each phase as large card (§3.2) with bullet list of goals
- Layout: 2 columns (50/50 split) on desktop, stack on mobile
- Visual: Gold divider between phases

**Section 8 - Expected Results:**
- Pattern: Large metric cards (§3.2) — 3 key results
- Content: 3 metrics (лиды к 6 мес, конверсия к 6 мес, ROI 300-500%)
- Grid: 3 columns → 1 column (tablet/mobile)
- Numbers: Extra large (Number Display, 64px, gold)
- Visual: Optional gold glow effect on numbers

**Section 9 - Conclusion + CTA:**
- Pattern: Centered CTA block
- Content: Summary statement (2-3 sentences) + large CTA button (§3.4)
- Layout: Max-width 720px, centered
- Spacing: 128px padding vertical

### 4.3 Responsive Breakpoints

| Breakpoint | Width | Columns | Padding | Typography Scale |
|------------|-------|---------|---------|------------------|
| **Desktop (xl)** | ≥1440px | 12 | 48px | 100% |
| **Desktop (lg)** | 1024-1439px | 12 | 48px | 100% |
| **Tablet (md)** | 768-1023px | 8 | 32px | 90% (scale headings) |
| **Mobile (sm)** | 375-767px | 4 | 24px | 85% (scale headings) |
| **Mobile (xs)** | <375px | 4 | 16px | 80% (scale headings) |

**Responsive Adaptations:**
- **Typography:** Scale down Display/Heading sizes by 10-15% on tablet, 15-20% on mobile
- **Spacing:** Reduce section gaps from 96px → 64px (tablet) → 48px (mobile)
- **Cards:** Full-width on mobile, reduce padding from 48px → 32px
- **Grid:** 4-col → 2-col → 1-col progressive collapse
- **Tables:** Transform to stacked cards or horizontal scroll on mobile

### 4.4 Grid System

**Desktop:**
- 12-column grid, gap 32px
- Container: max-width 1400px
- Sections use 8-12 columns depending on content type

**Tablet:**
- 8-column grid, gap 24px
- Container: max-width 1024px

**Mobile:**
- 4-column grid, gap 16px
- Container: full-width with 16-24px padding

---

## 5. Interaction & Animation Standards

**Animation Philosophy:** Luxury = controlled, elegant motion. Avoid "jumpy" effects. Favor subtle lifts, fades, and glows.

### 5.1 Scroll Animations

**Scroll-triggered reveals (sections 2-8):**
- Fade-in from bottom: translateY(24px) → 0, opacity 0 → 1, duration 600ms
- Stagger children: 100ms delay between cards in grid
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Parallax (optional, hero only):**
- Background pattern moves slower than content (0.5x scroll speed)
- Limit: max 16px offset to avoid motion sickness

### 5.2 Interactive States

**Cards (§3.2):**
- Hover: lift (translateY -4px), shadow upgrade, scale 1.02, gold glow
- Duration: 300ms

**Buttons (§3.4):**
- Hover: background darken (gold-700), lift (translateY -2px), glow
- Active: scale 0.98
- Duration: 200ms

**Timeline nodes (§3.6):**
- Hover: scale 1.2, pulse effect
- Duration: 300ms

### 5.3 Performance Rules

**Transform/Opacity Only:**
- ✅ Animate: `transform`, `opacity`
- ❌ Never animate: `width`, `height`, `margin`, `padding`, `color` (use CSS transitions)

**Prefers-Reduced-Motion:**
- Disable all animations if `prefers-reduced-motion: reduce` is set
- Replace with instant state changes

### 5.4 Loading States

**Initial page load:**
- Hero title fades in: 600ms delay, 600ms duration
- Sections lazy-load as user scrolls (intersection observer)

**Data cards:**
- Numbers count-up animation (0 → target value, 1000ms duration) on first view
- Trigger: when card enters viewport

---

## Summary & Design Checklist

**✅ Compliance:**
- **4pt Grid:** All spacing multiples of 4px (prefer 8px: 8, 16, 24, 32, 48, 64, 96, 128)
- **Token-Based:** All colors, spacing, radius, shadows from defined tokens (§2)
- **Performance:** Animate only `transform` and `opacity`
- **Responsive:** Works 375px-2560px, touch targets ≥48px on mobile
- **WCAG:** Key pairings ≥4.5:1 (validated in §2.1)
- **Reduced Motion:** Supported via CSS `prefers-reduced-motion`

**🎨 Luxury Differentiation:**
- **Surface Depth:** Black (#000000) background + elevated cards (#0A0A0A) + gold accents = 3 layers
- **Hero Moment:** 600px height, 72px display title, 56px CTA, 128px padding
- **Spatial Generosity:** Sections 96px apart, cards 48px padding (never 16px), line-height 1.6
- **Subtle Details:** Gold glow on hover, 600ms luxury timing, layered shadows with gold tint
- **Premium Components:** Large metrics (64px), generous cards (48px padding), hover lift + gold glow

**📐 Layout Summary:**
- 9 sections per content-structure-plan.md
- SPA with smooth scroll between sections
- Section patterns: Hero → 4-col grid → 2-col split → table → icon grid → timeline → 2-phase roadmap → 3-col metrics → centered CTA
- Responsive: 12-col → 8-col → 4-col grid collapse

**🎭 Color Discipline:**
- Primary: Black (#000000, #0A0A0A) 90% of design
- Accent: Gold (#FFD700, #B8860B) 5-8% strategic highlights
- Support: Gray (#9E9E9E, #4A4A4A) 5% text/dividers
- No neon, no electric colors — restrained luxury palette

**Final Note:** This specification provides design intent, constraints, and content mapping. Engineers should extract exact values from research materials and implement visual patterns defined here. Focus = premium, data-driven, executive presentation that commands attention through restraint and strategic gold accents.
