"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/content/portfolio";
import { Sparkles, ArrowRight, CheckCircle, TrendingUp, Star, MapPin } from "lucide-react";

export function PortfolioShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Technology", "Marketing", "Sales", "Digital Growth"];

  const filteredItems = activeFilter === "All"
    ? portfolioData
    : portfolioData.filter((item) => item.serviceCategory === activeFilter);

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-emerald-200/60">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Results in Bengaluru &amp; India</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Case Studies &amp; Verified Client Outcomes
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Real projects engineered for Indian clinics, schools, PGs, retail showrooms, and B2B enterprises.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle hover:border-orange-400 hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {item.industry}
                  </span>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {item.summary}
                </p>

                {/* Results Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  {item.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 font-heading">
                        {res.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Quote if available */}
                {item.testimonial && (
                  <div className="mt-5 p-4 rounded-xl bg-orange-50/50 border border-orange-100 text-xs">
                    <p className="italic text-slate-700 leading-relaxed">
                      &ldquo;{item.testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-2 font-bold text-slate-900 not-italic">
                      — {item.testimonial.author},{" "}
                      <span className="text-slate-500 font-normal">
                        {item.testimonial.role}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
