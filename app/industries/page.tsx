import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { industriesData } from "@/content/industries";
import { servicesData } from "@/content/services";
import { buildWhatsAppUrl } from "@/lib/utils";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle, 
  Building, 
  AlertCircle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Transform | Schools, Clinics, PGs, Retail & B2B",
  description:
    "Tailored digital growth systems engineered for Indian educational institutions, healthcare clinics, paying guest hostels, retail stores, and manufacturing firms.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Targeted Sector Expertise</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Industries We Power Across India
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Generic marketing and templates fail. We implement industry-proven blueprints engineered around your specific operational workflows.
            </p>
          </div>

          {/* Industry Cards Full Breakdown */}
          <div className="space-y-12">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                id={ind.slug}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-subtle scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-3 inline-block">
                      {ind.stat.label}: {ind.stat.value}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                      {ind.title}
                    </h2>
                    <p className="text-sm font-semibold text-orange-600 mt-1">
                      {ind.tagline}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="mt-6">
                      <a
                        href={buildWhatsAppUrl(`Hi Pratanvi Creations, I would like to discuss solutions for our ${ind.title} business.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-orange-gradient px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Get Sector Strategy Plan</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-100">
                    {/* Pain Points */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider font-mono mb-3">
                        <AlertCircle className="w-4 h-4" />
                        <span>Common Bottlenecks</span>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.painPoints.map((pain, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="text-red-400 font-bold">•</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pratanvi Solutions */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono mb-3">
                        <Lightbulb className="w-4 h-4" />
                        <span>Pratanvi Execution</span>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.solutions.map((sol, i) => (
                          <li key={i} className="text-xs text-slate-700 font-medium flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
