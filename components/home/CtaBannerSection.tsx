import React from "react";
import Link from "next/link";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";
import { Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold font-mono uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Your Growth Engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Ready to Accelerate Your Business Revenue?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Book a free 30-minute growth strategy consultation with our senior engineers and marketers in Bengaluru. We&apos;ll audit your existing presence and deliver an actionable revenue roadmap.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="btn-orange-gradient px-8 py-4 rounded-xl text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-orangeGlow"
              >
                <Sparkles className="w-4 h-4 text-orange-100" />
                <span>Request Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={buildWhatsAppUrl("Hi Pratanvi Creations, I would like to schedule a free 30-minute growth consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-7 py-4 rounded-xl text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Call / Chat</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Obligation Consultation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Confidential IP Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Response in &lt; 2 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
