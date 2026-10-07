"use client";

import React, { useState } from "react";
import { formatINR, buildWhatsAppUrl } from "@/lib/utils";
import { Calculator, Sparkles, MessageCircle, ArrowRight, Check } from "lucide-react";

export function InteractiveRoiCalculator() {
  const [businessType, setBusinessType] = useState<string>("Healthcare / Clinic");
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(60);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(3500);

  // Growth estimation formula
  // With Pratanvi (Next.js speed + local SEO + WhatsApp routing + performance ads):
  // Estimated +45% inquiries lift and +35% conversion lift
  const currentMonthlyRevenue = monthlyInquiries * avgCustomerValue;
  const estimatedNewInquiries = Math.round(monthlyInquiries * 1.6);
  const estimatedMonthlyRevenue = Math.round(currentMonthlyRevenue * 1.75);
  const monthlyRevenueLift = estimatedMonthlyRevenue - currentMonthlyRevenue;
  const annualRevenueLift = monthlyRevenueLift * 12;

  const businessOptions = [
    { label: "Healthcare / Clinic", defaultInquiries: 80, defaultValue: 2500 },
    { label: "School / Education", defaultInquiries: 45, defaultValue: 45000 },
    { label: "PG / Co-Living", defaultInquiries: 50, defaultValue: 12000 },
    { label: "Retail / Showroom", defaultInquiries: 120, defaultValue: 6500 },
    { label: "B2B / Industrial", defaultInquiries: 25, defaultValue: 75000 },
    { label: "Real Estate", defaultInquiries: 30, defaultValue: 150000 },
  ];

  const handleBusinessTypeChange = (opt: typeof businessOptions[0]) => {
    setBusinessType(opt.label);
    setMonthlyInquiries(opt.defaultInquiries);
    setAvgCustomerValue(opt.defaultValue);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Estimate Your Revenue Lift with Pratanvi
          </h2>
          <p className="mt-3 text-base text-slate-600">
            See how much additional revenue a high-velocity digital presence and optimized sales engine can generate for your business.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Business Category Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                  Select Industry Vertical:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {businessOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleBusinessTypeChange(opt)}
                      className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                        businessType === opt.label
                          ? "bg-white border-orange-500 text-orange-600 shadow-sm"
                          : "bg-white/60 border-slate-200 text-slate-700 hover:bg-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Inquiries Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                    Current Monthly Inquiries / Leads:
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 font-mono px-2 py-0.5 rounded bg-white border border-slate-200">
                    {monthlyInquiries} inquiries/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
              </div>

              {/* Average Deal / Ticket Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                    Average Customer / Order Value (₹):
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 font-mono px-2 py-0.5 rounded bg-white border border-slate-200">
                    {formatINR(avgCustomerValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="200000"
                  step="1000"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Projected Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-elevated border border-slate-800">
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-orange-400 mb-1">
                Projected Annual Impact
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                +{formatINR(annualRevenueLift)}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Estimated additional annual revenue lift
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> New Leads/Month:
                  </span>
                  <span className="font-bold text-white font-mono">~{estimatedNewInquiries} inquiries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Monthly Growth:
                  </span>
                  <span className="font-bold text-emerald-400 font-mono">+{formatINR(monthlyRevenueLift)} /mo</span>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl(`Hi Pratanvi Creations, based on your ROI calculator for my ${businessType} business, I would like to discuss generating +${formatINR(monthlyRevenueLift)}/month.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full btn-orange-gradient py-3 px-4 rounded-xl text-xs font-bold text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Verify with Strategy Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
