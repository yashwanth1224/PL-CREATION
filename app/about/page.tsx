import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl, buildCallUrl } from "@/lib/utils";
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Technology, Sales & Digital Growth Agency Bengaluru",
  description:
    "Learn about Pratanvi Creations: our engineering philosophy, Bengaluru headquarters, leadership team, and mission to empower Indian SMBs with high-velocity digital infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* About Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-4 border border-orange-200/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story &amp; Purpose</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                Engineering Measurable Growth for Modern Indian Businesses
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Headquartered in Bengaluru, {siteConfig.name} was founded on a simple realization: Indian SMBs, schools, clinics, and enterprises don&apos;t just need pretty websites — they need complete, revenue-generating technology and sales ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars of Execution */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  1. Speed &amp; Technical Precision
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  We write clean, typed Next.js and TypeScript code. No bloated page-builders that take 6 seconds to load on mobile 4G networks.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  2. ROI &amp; Conversion First
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Every pixel, button, and headline is engineered to route high-intent leads straight to your WhatsApp and sales CRM.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  3. Total Transparency &amp; Ownership
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  You own 100% of your source code, ad accounts, and databases. Transparent pricing with zero hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Office Details */}
        <section className="py-20 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-subtle">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold font-mono uppercase text-orange-600 mb-2 block">
                    Headquarters
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
                    Operating from the Heart of Bengaluru
                  </h2>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    We collaborate closely with founders, business owners, doctors, and educational directors across Karnataka and pan-India.
                  </p>

                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>{siteConfig.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{siteConfig.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{siteConfig.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                      <span>{siteConfig.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg font-bold font-heading text-white">
                    Need an in-person or video consultation?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Our strategy team is available for in-person meetings in Bengaluru or video calls across any timezone.
                  </p>
                  <div className="mt-6">
                    <a
                      href={buildWhatsAppUrl("Hi Pratanvi Creations, I would like to schedule an in-person or video meeting.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-orange-gradient w-full py-3 px-4 rounded-xl text-xs font-bold text-center inline-flex items-center justify-center gap-2"
                    >
                      <span>Schedule Meeting on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
