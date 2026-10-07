import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Deep Audit & Growth Blueprint",
    timeframe: "Days 1 – 3",
    description: "We analyze your target market, competitor gaps, conversion bottlenecks, and draft an end-to-end technical & marketing plan.",
    icon: <Layers className="w-5 h-5 text-blue-600" />,
  },
  {
    step: "02",
    title: "Rapid Agile Build & Systems Integration",
    timeframe: "Days 4 – 10",
    description: "Our senior developers engineer the Next.js frontend, hook up WhatsApp APIs, and configure CRM databases with zero technical debt.",
    icon: <Zap className="w-5 h-5 text-orange-600" />,
  },
  {
    step: "03",
    title: "Lead Funnel & SEO Activation",
    timeframe: "Days 11 – 14",
    description: "We deploy the verified landing pages, activate Google Maps Local Pack SEO, and launch targeted ROI ad campaigns.",
    icon: <Rocket className="w-5 h-5 text-emerald-600" />,
  },
  {
    step: "04",
    title: "Scale, A/B Test & Retainer Optimization",
    timeframe: "Ongoing SLA",
    description: "Weekly conversion rate optimization, lead scoring, and pipeline scaling to maximize client revenue and profit margins.",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
  },
];

export function ProcessWorkflowSection() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Execution Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            From Zero to Scaled Revenue in 14 Days
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A transparent, sprint-based delivery methodology with zero fluff and complete accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex flex-col justify-between relative group hover:border-orange-500/50 hover:shadow-card transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-mono text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                    Step {item.step}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 font-mono">
                    {item.timeframe}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400 flex items-center justify-between">
                <span>Phase {idx + 1} Milestone</span>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-orange-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
