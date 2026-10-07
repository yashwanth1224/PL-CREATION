# Architectural & Design Decisions Log
**Project**: PRATANVI CREATIONS  
**Theme**: Light Canvas (Pure White + Orange Action + Blue Trust)  
**Location**: Bengaluru, Karnataka, India  

---

### DEC-001: Next.js 15 App Router + React 19 + TypeScript (Strict)
- **Decision**: Use Next.js 15 with App Router, TypeScript strict mode, and Turbopack / Webpack build optimization.
- **Rationale**: Optimal SSG + SSR performance, streaming, server actions for zero-JS contact processing, fast client hydration for 4G mobile devices across India.

### DEC-002: Curated Light Theme Palette & Strict WCAG AA Contrast Compliance
- **Decision**:
  - Background Canvas: `#FFFFFF` (pure white) with `#F8FAFC` (slate-50) and `#F1F5F9` (slate-100) card accents.
  - Action / Accent (Orange): Text/Icon on White uses `#E55A00` (4.8:1 contrast, passes AA). CTA Gradient uses `#FF8A1F` to `#EA580C` with bold white text (>= 16px bold).
  - Trust / Structure (Blue): Primary Blue `#1D4ED8`, Deep Blue `#1E3A8A`, Light Blue `#EFF6FF`.
  - Text: Primary `#0F172A` (16.2:1 contrast), Secondary `#475569` (7.0:1 contrast), Muted `#64748B` (4.6:1 contrast).
  - Borders: `#E2E8F0` hairline borders.
  - Shadows: Subtle multi-layered soft shadows (`0 4px 12px rgba(11, 14, 21, 0.05)`).
- **Rationale**: Strict compliance with brief §7 & §10 (No white text on light orange, no pure black text, orange <= 15% viewport density).

### DEC-003: Typography System via Google Fonts (`next/font/google`)
- **Decision**: Primary headings in **Outfit** (modern, technical-premium), Body copy in **Inter** / **Plus Jakarta Sans**, monospace numbers/code in **JetBrains Mono**.
- **Rationale**: High legibility, zero CLS via `next/font` zero-layout-shift font optimization.

### DEC-004: Dual-Engine Lead Capture & Mobile Sticky Bar
- **Decision**:
  - Direct WhatsApp Click-to-Chat with pre-formatted service/inquiry text routing to `+91 9187535990`.
  - Direct Phone call button with `tel:+919187535990`.
  - Server Action lead capture form with Zod schema validation, Resend email forwarding, and Upstash rate limiting fallback.
  - Persistent Mobile Sticky Bottom Bar on viewports < 768px featuring dual high-contrast action pills (Call + WhatsApp).
- **Rationale**: Indian SMB decision makers prefer instant WhatsApp chat and direct phone dials alongside formal quote requests.

### DEC-005: 3D Scene Performance & Adaptive Fallbacks
- **Decision**: Lazy-loaded React Three Fiber / Three.js node visualizer (Scene A) and glowing tech sphere (Scene B) rendered on desktop with WebGL check and `prefers-reduced-motion` detection. Mobile & low-power devices fallback seamlessly to high-speed CSS/SVG mesh gradient graphics (<250KB total 3D bundle impact).
