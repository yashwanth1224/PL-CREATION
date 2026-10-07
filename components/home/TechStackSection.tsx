import React from "react";
import { Sparkles, Code2, Database, Shield, Zap, Cpu, Globe2 } from "lucide-react";

const techItems = [
  { name: "Next.js 15 App Router", role: "Hybrid Rendering & Edge Routing", category: "Core Framework" },
  { name: "React 19 & TypeScript", role: "Type-Safe Component Architecture", category: "Frontend" },
  { name: "Tailwind CSS v4 & Motion", role: "Fluid Responsive Design & Animation", category: "Styling & UX" },
  { name: "PostgreSQL & Supabase", role: "Relational Cloud Data Architecture", category: "Database" },
  { name: "Meta WhatsApp Cloud API", role: "Instant 1-Click Automated Chatbots", category: "Communication" },
  { name: "Google Ads & Meta Pixel CAPI", role: "Server-Side Conversion Tracking", category: "Ad Engine" },
  { name: "Cloudflare & Vercel Edge", role: "Sub-Second Global CDN Delivery", category: "Cloud & DevOps" },
  { name: "Razorpay / Easebuzz UPI", role: "Zero-Failure Payment Gateways", category: "Fintech" },
];

export function TechStackSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-blue-200/60">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Engineering Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Enterprise-Grade Tech Without the Complexity
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We use production-proven, ultra-modern tech stacks that ensure zero downtime, rapid mobile rendering, and ironclad security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-500/40 hover:shadow-subtle transition-all"
            >
              <span className="text-[10px] font-bold font-mono uppercase text-orange-600 block mb-1">
                {tech.category}
              </span>
              <h3 className="text-sm font-bold text-slate-900 font-heading">
                {tech.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {tech.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
