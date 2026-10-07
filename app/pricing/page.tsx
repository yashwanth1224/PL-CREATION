import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PricingSection } from "@/components/home/PricingSection";
import { InteractiveRoiCalculator } from "@/components/home/InteractiveRoiCalculator";
import { FaqAccordionSection } from "@/components/home/FaqAccordionSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export const metadata: Metadata = {
  title: "Pricing & ROI Packages | Transparent Investment",
  description:
    "Transparent pricing for websites, web applications, performance marketing, and B2B sales acceleration in India. No lock-in, 100% source code ownership.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PricingSection />
        <InteractiveRoiCalculator />
        <FaqAccordionSection />
        <CtaBannerSection />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
