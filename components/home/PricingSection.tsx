"use client";

import React, { useState } from "react";
import Link from "next/link";
import { pricingTiers } from "@/content/pricing";
import { formatINR, buildWhatsAppUrl } from "@/lib/utils";
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "onetime">("monthly");

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Simple, Transparent ROI Packages
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No surprise fees. No long-term lock-in traps. Complete source code ownership for custom builds.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Growth Retainers (Monthly)
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("onetime")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                billingCycle === "onetime"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              One-Time Project Builds
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingTiers.map((tier) => {
            const price = billingCycle === "monthly" ? tier.priceMonthly : (tier.priceOneTime || tier.priceMonthly * 2);
            const periodLabel = billingCycle === "monthly" ? "/ month + GST" : "one-time + GST";

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? "bg-white border-2 border-orange-500 shadow-elevated md:-translate-y-2"
                    : "bg-white border border-slate-200 shadow-subtle hover:shadow-card"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-extrabold uppercase tracking-wider font-mono shadow-md">
                    {tier.badge || "Most Popular"}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 min-h-[36px] leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                        {formatINR(price)}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-1 block">
                      {periodLabel}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      What&apos;s Included:
                    </div>
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={buildWhatsAppUrl(tier.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center inline-flex items-center justify-center gap-2 transition-all ${
                      tier.popular
                        ? "btn-orange-gradient shadow-orangeGlow"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{tier.ctaLabel}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Sub-Text */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>Need a tailored ERP, hospital multi-branch setup, or specialized SaaS?</span>{" "}
          <Link href="/contact" className="font-bold text-orange-600 hover:text-orange-700 underline">
            Request custom RFP &amp; architecture scope →
          </Link>
        </div>
      </div>
    </section>
  );
}
