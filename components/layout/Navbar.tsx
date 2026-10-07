"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/content/site";
import { buildCallUrl, buildWhatsAppUrl, cn } from "@/lib/utils";
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 text-center font-medium border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wide">
              Bengaluru
            </span>
            <span>📍 Serving businesses across Karnataka & India with Next-Gen Tech & Growth Systems</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={buildCallUrl()} 
              className="hover:text-orange-400 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span>+91 9187535990</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={buildWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "glass-nav shadow-subtle py-3"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                PRATANVI<span className="text-orange-600">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 font-mono mt-0.5">
                CREATIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesDropdownOpen}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-200",
                        isActive || servicesDropdownOpen
                          ? "text-blue-700 bg-blue-50"
                          : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-blue-700" : "text-slate-400"
                        )}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 lg:w-96 p-3 bg-white rounded-2xl shadow-elevated border border-slate-100 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                          Specialized Growth Solutions
                        </div>
                        <div className="space-y-1 mt-1">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                                <span>{subItem.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {subItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 px-3 flex items-center justify-between text-xs">
                          <Link
                            href="/services"
                            className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                          >
                            <span>View All 10 Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="btn-orange-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
            >
              <Sparkles className="w-4 h-4 text-orange-100" />
              <span>Get Free Proposal</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildCallUrl()}
              aria-label="Direct Phone Call"
              className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-200"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname.startsWith("/services") ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                All Services
              </Link>
              <Link
                href="/industries"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/industries" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Industries We Serve
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/portfolio" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Client Case Studies
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/pricing" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Pricing & Packages
              </Link>
              <Link
                href="/about"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/about" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/contact" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Contact & Free Audit
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp py-2.5 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Growth Expert</span>
              </a>
              <a
                href={buildCallUrl()}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Direct Call (+91 9187535990)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
