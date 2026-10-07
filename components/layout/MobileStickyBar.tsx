"use client";

import React from "react";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";
import { Phone, MessageCircle, Sparkles } from "lucide-react";

export function MobileStickyBar() {
  return (
    <aside 
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button - High Contrast Action */}
        <a
          href={buildCallUrl()}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-orange-600/25 transition-all"
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Instant Message Pill - High Trust Blue/Green */}
        <a
          href={buildWhatsAppUrl("Hi Pratanvi Creations, I would like to get a quote and discuss my project requirements.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
