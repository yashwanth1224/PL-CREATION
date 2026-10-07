import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Privacy Policy | Pratanvi Creations",
  description: "Privacy Policy and data protection standards for Pratanvi Creations.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono mb-8">
            Last Updated: October 2026 • Pratanvi Creations, Bengaluru, India
          </p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">1. Introduction</h2>
              <p>
                Pratanvi Creations (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to safeguarding the privacy and confidentiality of our clients, website visitors, and project partners. This Privacy Policy describes how we collect, process, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">2. Information We Collect</h2>
              <p>
                We only collect information necessary to provide software engineering, performance marketing, and business acceleration services. This includes contact details (name, email, phone/WhatsApp number) and project specifications submitted via our contact forms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">3. Client IP &amp; Source Code Confidentiality</h2>
              <p>
                We maintain strict non-disclosure standards. All custom software code, proprietary business logic, patient databases, and client financial metrics developed during engagements belong 100% exclusively to the client upon full project settlement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-heading">4. Contact &amp; Grievances</h2>
              <p>
                For privacy inquiries or data removal requests, please write to: <a href="mailto:pratanvicreations@gmail.com" className="text-blue-600 underline">pratanvicreations@gmail.com</a>.
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
