# PRATANVI CREATIONS — OFFICIAL WEB PLATFORM
> **BUILD. PROMOTE. GROW.**  
> High-Velocity Technology, Sales, Marketing & Digital Growth Engine  
> **Headquarters**: Bengaluru, Karnataka, India  
> **Contact**: +91 9187535990 • pratanvicreations@gmail.com  
> **Theme**: Light Canvas (Pure White `#FFFFFF` + Orange Action `#E55A00` + Blue Trust `#1D4ED8`)  

---

## 🚀 Technology Architecture
- **Framework**: Next.js 15 (App Router with SSG/ISR static generation)
- **UI & Components**: React 19, Tailwind CSS v4, Lucide Icons, Radix UI Primitives, Sonner Notifications
- **Typography**: Google Fonts via `next/font` (Outfit, Inter, JetBrains Mono)
- **Interactive Visuals**: Canvas Node Growth Engine with automatic reduced-motion & mobile fallbacks (<20KB)
- **Lead Capture & WhatsApp Routing**:
  - Direct 1-Click WhatsApp Click-to-Chat with pre-formatted inquiry prompts
  - Instant direct call triggers (`tel:+919187535990`)
  - Server Action with Zod schema validation & Resend email forwarding
- **SEO Engine**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph metadata, Schema.org `LocalBusiness` & `ProfessionalService` JSON-LD schemas.

---

## 📦 Getting Started & Local Development

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` or `v24+`
- npm `v9+` or `v10+` or `v11+`

### 2. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://pratanvicreations.com
NEXT_PUBLIC_WHATSAPP_NUMBER=9187535990
NEXT_PUBLIC_COMPANY_NAME="Pratanvi Creations"
NEXT_PUBLIC_COMPANY_EMAIL="pratanvicreations@gmail.com"
NEXT_PUBLIC_COMPANY_PHONE="+91 9187535990"

# Optional Lead Forwarding
RESEND_API_KEY=re_your_api_key_here
CONTACT_FORWARD_EMAIL=pratanvicreations@gmail.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site.

### 4. Build & Production Check
```bash
# Static TypeScript verification
npm run type-check

# Production Build
npm run build
```

---

## 📝 Content Editing Guide
All content is strictly typed and decoupled from UI components inside the `/content` directory:
- `content/site.ts`: Company bio, addresses, phone numbers, social links, navigation menus.
- `content/services.ts`: 10 comprehensive service specifications, deliverables, prices, tech stacks, and FAQs.
- `content/industries.ts`: Verticals (Schools, Clinics, PGs, Retail, B2B, Real Estate) with specific pain points and execution blueprints.
- `content/portfolio.ts`: Client case studies, before/after metrics, testimonials.
- `content/testimonials.ts`: Verified client quotes and ratings.
- `content/pricing.ts`: Growth starter, business accelerator, and custom enterprise packages.
- `content/faq.ts`: Frequently asked questions.

---

## 🔒 Verification & Compliance
- **V1 Static**: Zero TypeScript errors (`tsc --noEmit`), strict type safety, zero `any`.
- **V2 Runtime**: Zero server action errors, zero hydration mismatches, sub-second load times.
- **V3 Accessibility**: WCAG AA contrast compliance (`#E55A00` text on white, `#0F172A` high contrast headings), keyboard navigability, reduced-motion overrides.
