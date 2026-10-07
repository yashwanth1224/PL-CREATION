import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Terms of Service | Pratanvi Creations",
  description: "Terms of Service and project engagement terms for Pratanvi Creations.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-6">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 font-mono mb-8">
            Last Updated: October 2026 • Pratanvi Creations, Bengaluru, India
          </p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">1. Scope of Engagement</h2>
              <p>
                Pratanvi Creations delivers web development, mobile applications, digital marketing management, SEO, and sales consulting based on agreed milestone statements of work (SOW).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">2. Milestone Delivery &amp; Revisions</h2>
              <p>
                Each deliverable is subject to verification passes before release. Clients are provided staging links to test and request adjustments in accordance with the project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">3. Intellectual Property Ownership</h2>
              <p>
                Upon receipt of full contract payment, all tailored source code, database architectures, graphics, and branding assets transfer 100% to the client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">4. Governing Law &amp; Jurisdiction</h2>
              <p>
                These terms are governed by the laws of India and subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
