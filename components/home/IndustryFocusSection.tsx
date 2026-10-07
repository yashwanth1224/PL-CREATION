import React from "react";
import Link from "next/link";
import { industriesData } from "@/content/industries";
import { ArrowRight, CheckCircle, Sparkles, Building, Landmark, Hotel, ShoppingBag, Factory, Home } from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
  "schools-colleges": <Landmark className="w-5 h-5 text-amber-600" />,
  "clinics-healthcare": <Building className="w-5 h-5 text-teal-600" />,
  "pg-hostels-coliving": <Hotel className="w-5 h-5 text-blue-600" />,
  "retail-showrooms-ecommerce": <ShoppingBag className="w-5 h-5 text-purple-600" />,
  "b2b-manufacturing-industrial": <Factory className="w-5 h-5 text-orange-600" />,
  "real-estate-developers": <Home className="w-5 h-5 text-emerald-600" />,
};

export function IndustryFocusSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vertical Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Tailored Growth Blueprints by Industry
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We understand the exact operational bottlenecks and customer acquisition nuances for key Indian sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-orange-500/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  {industryIcons[ind.slug] || <Building className="w-5 h-5 text-blue-600" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-700 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs font-semibold text-orange-600 mt-1">
                  {ind.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {ind.description}
                </p>

                {/* Pain Points Solved */}
                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Key Problems We Solve:
                  </div>
                  {ind.painPoints.slice(0, 2).map((pain, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Proven Metric */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {ind.stat.label}
                  </span>
                  <span className="text-base font-extrabold text-slate-900 font-mono">
                    {ind.stat.value}
                  </span>
                </div>
                <Link
                  href={`/industries#${ind.slug}`}
                  className="text-xs font-bold text-blue-700 group-hover:text-orange-600 inline-flex items-center gap-1"
                >
                  <span>Case Studies</span>
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
