import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { servicesData } from "@/content/services";
import { formatINR, buildWhatsAppUrl, buildCallUrl } from "@/lib/utils";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Clock, 
  Cpu, 
  HelpCircle, 
  ShieldCheck, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Pratanvi Creations Bengaluru`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Pratanvi Creations`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Service Hero Banner */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-4 border border-orange-200/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.category} Service Blueprint</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {service.fullDescription}
              </p>

              {/* Price & CTA strip */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Starting Investment
                  </span>
                  <span className="text-xl font-extrabold text-slate-900 font-heading">
                    {formatINR(service.startingPrice)}
                  </span>
                </div>

                <a
                  href={buildWhatsAppUrl(`Hi Pratanvi Creations, I would like to get started with ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-gradient px-8 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-orangeGlow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Custom Quote on WhatsApp</span>
                </a>

                <a
                  href={buildCallUrl()}
                  className="btn-blue-outline px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Direct Call</span>
                </a>
              </div>

              {/* Service Key Metrics */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {service.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
                    <div className="text-2xl font-extrabold text-slate-900 font-heading">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables & Sprint Timeline */}
        <section className="py-16 bg-slate-50/50 border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Scope of Work &amp; Sprint Deliverables
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Every milestone is clearly documented and verified before production release.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((del, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold font-mono text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                        Deliverable 0{i + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {del.timeline}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {del.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {del.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Included in standard SLA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack for this Service */}
        <section className="py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4">
              Technologies &amp; Integrations Used
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold font-mono border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Service Specific FAQs */}
        {service.faqs.length > 0 && (
          <section className="py-16 bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900 font-heading">
                  Frequently Asked Questions about {service.title}
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
