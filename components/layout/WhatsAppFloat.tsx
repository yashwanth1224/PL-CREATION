"use client";

import React, { useState, useEffect } from "react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a subtle welcoming tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-3 max-w-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-xs font-semibold text-slate-800 pr-3">
            👋 Need a quick estimate for your website, app, or marketing?
          </p>
          <a
            href={buildWhatsAppUrl("Hi! I have a question about services from Pratanvi Creations.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 inline-block mt-1"
          >
            Chat with our team on WhatsApp →
          </a>
        </div>
      )}

      <a
        href={buildWhatsAppUrl("Hi Pratanvi Creations, I would like to inquire about your services.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 border-2 border-white rounded-full animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
