import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PortfolioShowcaseSection } from "@/components/home/PortfolioShowcaseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export const metadata: Metadata = {
  title: "Client Case Studies & Verified Results",
  description:
    "See how Pratanvi Creations helps clinics, schools, PGs, retail stores, and B2B firms achieve verifiable revenue growth, high Google rankings, and sub-second web speed.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="py-12 bg-white text-center border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Our Proven Track Record
            </h1>
            <p className="mt-3 text-base text-slate-600">
              Explore real-world results, client reviews, and measurable ROI benchmarks achieved across Bengaluru and India.
            </p>
          </div>
        </div>
        <PortfolioShowcaseSection />
        <TestimonialsSection />
        <CtaBannerSection />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
