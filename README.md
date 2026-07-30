# Mamikos Clone Landing Page — AI-Assisted Frontend Build

> **Frontend Engineer Technical Test Submission**  
> Candidate: **Dimas Prasetyo**  
> Repository: [https://github.com/dmasspr174/clone_mamikos.git](https://github.com/dmasspr174/clone_mamikos.git)

---

## 📌 Executive Summary

This project is a pixel-perfect, highly responsive frontend clone of the **Mamikos** home page built as part of the **Frontend Engineer Technical Test (AI-Assisted Build)**. The application demonstrates an efficient end-to-end workflow utilizing advanced AI coding assistance to rapidly turn UI mockups and screenshot references into production-grade React components.

---

## 🛠️ Technology Stack & Architecture

| Category | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | **React (Vite)** | High-performance component-driven single-page application |
| **Styling** | **Tailwind CSS** | Custom design tokens, responsive breakpoints & micro-interactions |
| **UI Components** | **shadcn/ui** | Radix UI primitives for accessible Accordion, Sheet, Popover, Dialog, Dropdown Menu |
| **Icons** | **Lucide React** | Lightweight, clean vector icon set |
| **Carousel Engine** | **Embla Carousel & Custom Infinite Loop** | Smooth 60fps infinite scrolling sliders |
| **AI Assistant** | **Antigravity AI (Google DeepMind)** | Iterative prompt engineering, code generation, and rapid debugging |

---

## 🚀 Key Features & Component Breakdown

### 1. **Header & Navigation Bar (`Header.jsx`)**
- **Top Info Bar**: App download and rental shortcuts (Desktop).
- **Interactive Nav Menus**: Dropdowns for *Cari Apa?*, *Lainnya*, and *Profile Avatar* (with unread notification badge).
- **Sheet & Popover Drawers**: Right-side drawer for *Chat* and popover modal for *Notifikasi*.
- **Sticky Header Search Bar**: Automatically activates when scrolling past the hero search section, hiding the brand text and displaying an inline search bar pill.

### 2. **Hero Search Section (`HomeTopSearch.jsx`)**
- Full-width hero banner with interactive tabs (*Kos*, *Singgahsini & Apik*, *Kos Andalan*, *Apartemen*).
- Responsive search input with location placeholder and green *Cari* CTA button.

### 3. **Promo Banner Carousel (`PromoCarousel.jsx`)**
- Full-width hero promo banner slider featuring a 4x infinite loop buffer algorithm, auto-play timer, center-focused scaling, and touch/drag controls.

### 4. **Booking Shortcut Section (`BookingShortcut.jsx`)**
- Dedicated shortcut section displaying brand badges for **Singgahsini** and **Apik** with custom asset logos.

### 5. **Section 1: Promo Ngebut (`PromoNgebutSection.jsx`)**
- Features a real-time countdown timer (*Akan Berakhir dalam waktu...*), inline city selector dropdown, desktop infinite carousel, and mobile 2x2 grid fallback.

### 6. **Section 2: Rekomendasi Kos (`RekomendasiJakartaSection.jsx`)**
- Curated property recommendations with city dropdown selector, desktop carousel, and mobile 2x2 grid layout.

### 7. **Section 3: Promo Kos (`KosPromoSection.jsx`)**
- Discounted property cards featuring rare kost badges, discount pills, and room availability tags.

### 8. **Section 4: Area Kos Terpopuler (`PopularAreasSection.jsx`)**
- 8-card responsive grid layout (4x2 on desktop, 2x4 on mobile) with dark gradient overlays, Unsplash city photography, and a dedicated *Lihat semua →* card.

### 9. **Section 5: Kos Sekitar Kampus (`CampusSection.jsx`)**
- 8-card responsive grid featuring emblem logos for top Indonesian universities (**UGM**, **UNDIP**, **UI**, **UNPAD**, **STAN**, **UB**, **UNAIR**) and a *Lihat semua →* CTA card.

### 10. **Section 6: Artikel & Accordion (`ArticleAccordionSection.jsx`)**
- Built with **shadcn/ui** `@radix-ui/react-accordion` to present key Mamikos features (*Fitur Pencarian*, *Filter Pencarian*, *Chat*, *Sewa Langsung*, *Virtual Tour*, *MamiPoin*, *Kos Review*, etc.).

### 11. **Footer (`Footer.jsx`)**
- Multi-column footer layout matching desktop and mobile specifications, complete with Google Play/App Store badges, SGS ISO 27001 certification badge, and copyright notice.

### 12. **Mobile Navigation & Chat Overlay (`MobileBottomNav.jsx`)**
- **Directional Scroll Auto-Hide**: Hides when scrolling down, slides up when scrolling up.
- **Cari Button**: Smoothly scrolls window to top (`HomeTopSearch`).
- **Chat Button**: Opens a fullscreen mobile chat overlay with an empty state illustration (*Tidak ada percakapan saat ini.*).

---

## 🤖 AI-Assisted Workflow & Engineering Methodology

```
┌──────────────────────────┐    ┌──────────────────────────┐    ┌──────────────────────────┐
│   1. Task Decomposition  │───>│   2. Prompt Engineering  │───>│  3. Quality Control &    │
│  Break UI into 12 sections│    │ Feed screenshots + spec  │    │   Human Code Refinement  │
└──────────────────────────┘    └──────────────────────────┘    └──────────────────────────┘
                                                                             │
                                                                             ▼
┌──────────────────────────┐    ┌──────────────────────────┐    ┌──────────────────────────┐
│   6. Git Commit & Push   │<───│  5. Automated Build Fix  │<───│  4. Accessibility & WCAG │
│  Push to GitHub Main     │    │  Run `vite build` checks │    │  Contrast & ARIA Audit   │
└──────────────────────────┘    └──────────────────────────┘    └──────────────────────────┘
```

---

## 💡 AI Challenges & Human Code Adjustments

### **Observation on AI Behavior**
While AI tools accelerate scaffolding and initial component creation, AI output can occasionally **diverge from the given visual prompt or misinterpret exact styling details**. Rather than accepting raw AI output blindly, active human engineering judgment and code analysis were applied to refine and align the implementation perfectly with the provided design assets.

### **Key Human Code Adjustments Made:**

1. **Typography Weight Alignment (`font-extrabold` → `font-semibold`)**:
   - AI initially generated overly heavy `font-extrabold` weights on multiple section titles.
   - **Human Adjustment**: Analyzed and updated headings in `ArticleAccordionSection.jsx`, `CampusSection.jsx`, `BookingShortcut.jsx`, `PromoNgebutSection.jsx`, and `RekomendasiJakartaSection.jsx` to `font-semibold` / `font-bold` for exact visual fidelity matching Mamikos official branding.

2. **Campus Section Layout Redesign (`CampusSection.jsx`)**:
   - AI initially created a standard image carousel for campus items.
   - **Human Adjustment**: Re-architected the component into a structured **8-Card Grid Layout** (4 columns x 2 rows on Desktop | 2 columns x 4 rows on Mobile) featuring circular emblem logos (**UGM**, **UNDIP**, **UI**, **UNPAD**, **STAN**, **UB**, **UNAIR**) and an integrated *Lihat semua →* action card.

3. **Popular Areas Grid Alignment (`PopularAreasSection.jsx`)**:
   - Replaced carousel wrapper with an 8-card grid featuring centered city name text overlaid on dark image gradients to match the mobile and desktop mockup specifications.

4. **Accessibility & WCAG Compliance Fixes**:
   - Added descriptive `aria-label` tags on interactive buttons and icon controls.
   - Enhanced text contrast ratios across `KosCard.jsx` to ensure compliance with WCAG AA standards (4.5:1 contrast ratio).

---

## 💻 Local Development Setup

Follow these steps to run the application locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/dmasspr174/clone_mamikos.git

# 2. Navigate to the project directory
cd clone_mamikos

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build

To generate the optimized production bundle:

```bash
npm run build
```

The output will be placed in the `dist/` directory ready for deployment.

---

## 👨‍💻 Candidate Info

- **Candidate**: Dimas Prasetyo
- **Repository**: [dmasspr174/clone_mamikos](https://github.com/dmasspr174/clone_mamikos.git)
- **Role**: Frontend Engineer Candidate
