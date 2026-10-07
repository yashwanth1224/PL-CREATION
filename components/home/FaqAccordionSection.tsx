"use client";

import React, { useState } from "react";
import { faqsData } from "@/content/faq";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear answers about timelines, deliverables, tech choices, and pricing.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-orange-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-orange-50/60 border border-orange-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-slate-900 font-heading">
              Have a specific question about your tech stack or sales cycle?
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Chat directly with our founding engineering and strategy team in Bengaluru.
            </div>
          </div>
          <a
            href={buildWhatsAppUrl("Hi Pratanvi Creations, I have a specific question before getting started.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
