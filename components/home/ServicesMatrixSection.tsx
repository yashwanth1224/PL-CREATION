"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { formatINR } from "@/lib/utils";
import { 
  Code2, 
  TrendingUp, 
  Search, 
  Target, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Palette, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Clock
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-blue-600" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-orange-600" />,
  Search: <Search className="w-6 h-6 text-emerald-600" />,
  Target: <Target className="w-6 h-6 text-indigo-600" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-teal-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-amber-600" />,
  Building2: <Building2 className="w-6 h-6 text-purple-600" />,
  Palette: <Palette className="w-6 h-6 text-rose-600" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
};

const categories = ["All Solutions", "Technology", "Sales", "Marketing", "Digital Growth"] as const;

export function ServicesMatrixSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Solutions");

  const filteredServices = activeCategory === "All Solutions"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-blue-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Capability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Engineered for Revenue &amp; Digital Dominance
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Choose from 10 specialized technology, sales, and marketing engines built specifically for Indian market dynamics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col justify-between p-6 sm:p-7 bg-white group hover:shadow-card transition-all"
            >
              <div>
                {/* Card Top: Icon & Category */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50/60 transition-all duration-300">
                    {iconMap[service.iconName] || <Code2 className="w-6 h-6 text-blue-600" />}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-blue-700 transition-colors">
                  <Link href={`/services/${service.slug}`} className="focus:outline-none">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                  {service.metrics.map((m, i) => (
                    <div key={i} className="text-center p-2 rounded-lg bg-slate-50/80">
                      <div className="text-xs font-extrabold text-slate-900 font-heading">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Starting Price & CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Starting from
                  </span>
                  <span className="text-base font-extrabold text-orange-600 font-heading">
                    {formatINR(service.startingPrice)}
                  </span>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:text-orange-600 transition-colors"
                >
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
