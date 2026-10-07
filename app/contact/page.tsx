"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/content/site";
import { servicesData } from "@/content/services";
import { submitLeadAction } from "@/actions/contact";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";
import { toast } from "sonner";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  Send, 
  CheckCircle2,
  ShieldCheck,
  Building
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const result = await submitLeadAction(formData);

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      toast.success(result.message);
    } else {
      if (result.errors) {
        setFieldErrors(result.errors);
      }
      toast.error(result.message);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Request Your Free Growth Proposal &amp; Audit
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Tell us about your goals. Our senior strategy team in Bengaluru will evaluate your project and reply within 2 business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Details & Instant Options */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Instant Card */}
              <div className="p-7 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 shadow-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 font-heading">
                      Fastest: WhatsApp Chat
                    </h2>
                    <p className="text-xs text-slate-600">
                      Average response time: &lt; 5 minutes
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect immediately with a senior consultant on WhatsApp to ask questions or share project files.
                </p>
                <a
                  href={buildWhatsAppUrl("Hi Pratanvi Creations, I would like to inquire about project scope and timelines.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full btn-whatsapp py-3 rounded-xl text-xs font-bold text-center inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Office Details Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-subtle space-y-4">
                <h2 className="text-base font-bold text-slate-900 font-heading">
                  Bengaluru Headquarters
                </h2>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{siteConfig.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <a href={buildCallUrl()} className="hover:text-orange-600 font-bold">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-600">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{siteConfig.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>All customer inquiries protected under strict NDA</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-elevated">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                    Inquiry Received!
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. Our growth specialist in Bengaluru has received your request and will follow up with you within 2 business hours.
                  </p>
                  <div className="pt-4">
                    <a
                      href={buildWhatsAppUrl("Hi Pratanvi Creations, I just submitted the contact form on your website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow-up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900 font-heading mb-4">
                    Send Us Your Project Requirements
                  </h2>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                      {fieldErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                      {fieldErrors.phone && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.phone[0]}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. ramesh@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.email[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        City / Location
                      </label>
                      <input
                        type="text"
                        name="city"
                        defaultValue="Bengaluru"
                        placeholder="e.g. Bengaluru"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Service of Interest *
                      </label>
                      <select
                        name="serviceCategory"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-800"
                      >
                        <option value="">Select Service...</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.serviceCategory && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.serviceCategory[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Approx. Budget (INR)
                      </label>
                      <select
                        name="estimatedBudget"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-800"
                      >
                        <option value="₹15,000 - ₹30,000">₹15,000 – ₹30,000</option>
                        <option value="₹30,000 - ₹60,000">₹30,000 – ₹60,000</option>
                        <option value="₹60,000 - ₹1,50,000">₹60,000 – ₹1,50,000</option>
                        <option value="₹1,50,000+">₹1,50,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Project Details &amp; Requirements *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Please describe your current business, your primary growth goal, and any specific feature needs..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.message[0]}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-orange-gradient py-4 rounded-xl text-sm font-bold shadow-orangeGlow inline-flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Validating &amp; Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
