import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { servicesData } from "@/content/services";
import { industriesData } from "@/content/industries";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  Heart
} from "lucide-react";

export function Footer() {
  return (
    <footer className="footer-dark mt-auto pt-16 pb-24 md:pb-12 text-slate-400">
      {/* Top CTA Band within Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold font-mono uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Accelerate Growth?</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Let&apos;s build your revenue engine together in Bengaluru.
              </h2>
              <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
                Whether you need a high-converting website, patient booking app, or a performance marketing pipeline, our senior engineers and marketers are ready to execute.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={buildWhatsAppUrl("Hi Pratanvi Creations, I would like to schedule a free 30-minute growth strategy consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-6 py-3.5 rounded-xl font-bold text-center inline-flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book 30-Min Strategy Call</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 inline-flex items-center justify-center gap-2 text-sm transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-orange-500/20">
                <span className="font-heading">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white tracking-tight leading-none">
                  PRATANVI<span className="text-orange-500">.</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 font-mono mt-0.5">
                  CREATIONS
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.tagline} — Technology, Sales, Performance Marketing & Digital Growth agency engineered for Indian SMBs, schools, healthcare clinics, and ambitious brands.
            </p>
            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <a 
                href={buildCallUrl()}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+91 9187535990</span>
              </a>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-base tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-orange-400 transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1 pt-1 text-xs"
                >
                  <span>Explore all 10 services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h3 className="text-white font-heading font-bold text-base tracking-wide mb-4">
              Industries
            </h3>
            <ul className="space-y-2 text-sm">
              {industriesData.map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="hover:text-orange-400 transition-colors block py-0.5"
                  >
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Trust */}
          <div>
            <h3 className="text-white font-heading font-bold text-base tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-orange-400 transition-colors block py-0.5">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-400 transition-colors block py-0.5">
                  Pricing & ROI Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors block py-0.5">
                  Contact & Audit
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-400 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pratanvi Creations. All rights reserved. Registered in Bengaluru, India.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Client IP Ownership</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>Crafted with precision in Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
