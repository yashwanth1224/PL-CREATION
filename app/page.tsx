import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesMatrixSection } from "@/components/home/ServicesMatrixSection";
import { InteractiveRoiCalculator } from "@/components/home/InteractiveRoiCalculator";
import { IndustryFocusSection } from "@/components/home/IndustryFocusSection";
import { ProcessWorkflowSection } from "@/components/home/ProcessWorkflowSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { PortfolioShowcaseSection } from "@/components/home/PortfolioShowcaseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqAccordionSection } from "@/components/home/FaqAccordionSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Services Matrix */}
        <ServicesMatrixSection />

        {/* Section 3: Interactive Growth ROI Calculator */}
        <InteractiveRoiCalculator />

        {/* Section 4: Industry Focus Blueprints */}
        <IndustryFocusSection />

        {/* Section 5: Process & Sprint Workflow */}
        <ProcessWorkflowSection />

        {/* Section 6: Engineering Tech Stack */}
        <TechStackSection />

        {/* Section 7: Portfolio Case Studies */}
        <PortfolioShowcaseSection />

        {/* Section 8: Testimonials & Client Endorsements */}
        <TestimonialsSection />

        {/* Section 9: Pricing Tiers & Packages */}
        <PricingSection />

        {/* Section 10: Frequently Asked Questions */}
        <FaqAccordionSection />

        {/* Section 11: Final Conversion Banner */}
        <CtaBannerSection />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
