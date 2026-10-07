import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pratanvicreations.com"),
  title: {
    default: "PRATANVI CREATIONS | Technology • Sales • Marketing • Digital Growth",
    template: "%s | Pratanvi Creations",
  },
  description:
    "Empowering Indian SMBs, schools, clinics, and retail enterprises with cutting-edge web development, performance marketing, sales acceleration, and local SEO in Bengaluru.",
  keywords: [
    "Pratanvi Creations",
    "Digital Marketing Bengaluru",
    "Web Development Bengaluru",
    "Sales Acceleration India",
    "Local SEO Bengaluru",
    "Software Development India",
    "School ERP Solutions",
    "Clinic Management Systems",
    "SMB Growth Agency",
  ],
  authors: [{ name: "Pratanvi Creations", url: "https://pratanvicreations.com" }],
  creator: "Pratanvi Creations",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pratanvicreations.com",
    siteName: "Pratanvi Creations",
    title: "PRATANVI CREATIONS — BUILD. PROMOTE. GROW.",
    description: "Technology, Sales & Marketing agency for modern businesses in Bengaluru & across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pratanvi Creations — BUILD. PROMOTE. GROW.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRATANVI CREATIONS — BUILD. PROMOTE. GROW.",
    description: "Technology, Sales & Marketing agency in Bengaluru, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-orange-100 selection:text-orange-900 flex flex-col">
        <LocalBusinessJsonLd />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
