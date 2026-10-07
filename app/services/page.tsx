import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { servicesData } from "@/content/services";
import { formatINR, buildWhatsAppUrl } from "@/lib/utils";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle, 
  Layers, 
  Cpu, 
  TrendingUp 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialized Technology & Marketing Services",
  description:
    "Explore all 10 specialized growth engines from Pratanvi Creations: Next.js Web Apps, Performance Marketing, Local SEO, WhatsApp CRM, and School/Clinic systems.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-blue-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Growth Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Technology, Sales &amp; Digital Marketing Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Built with precision in Bengaluru for high-growth businesses across India. Transparent pricing, sprint-based delivery, and measurable ROI.
            </p>
          </div>

          {/* Grid of All 10 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-subtle hover:border-orange-400 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {service.category}
                    </span>
                    <span className="text-xs font-extrabold text-orange-600 font-mono">
                      From {formatINR(service.startingPrice)}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 font-heading group-hover:text-blue-700 transition-colors">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Key Deliverables:
                    </div>
                    {service.deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-orange-gradient px-4 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    <span>View Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={buildWhatsAppUrl(`Hi Pratanvi Creations, I would like to get a quote for ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-600 hover:text-emerald-600 inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
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
