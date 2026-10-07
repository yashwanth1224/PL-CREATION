import React from "react";
import { testimonialsData } from "@/content/testimonials";
import { Star, Quote, Sparkles, MapPin } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted in Bengaluru</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            What Founders, Doctors &amp; Principals Say
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Direct feedback from our partners across Bengaluru and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-orange-300 hover:shadow-card transition-all duration-300"
            >
              <div>
                {/* Stars and Top Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {t.highlightMetric && (
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {t.highlightMetric}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold flex items-center justify-center text-sm font-heading shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 font-heading">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
