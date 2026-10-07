import { NavItem } from "@/types";

export const siteConfig = {
  name: "PRATANVI CREATIONS",
  tagline: "BUILD. PROMOTE. GROW.",
  positioning: "Technology • Sales • Marketing • Digital Growth",
  description:
    "We build high-converting websites, software systems, sales engines, and performance marketing funnels for Indian SMBs, clinics, schools, and growing enterprises.",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9187535990",
  phoneRaw: "9187535990",
  email: "pratanvicreations@gmail.com",
  hours: "Monday – Saturday: 9:00 AM – 7:30 PM IST",
  address: "HSR Layout / Koramangala Hub, Bengaluru, Karnataka 560102",
  socials: {
    whatsapp: "https://wa.me/9187535990",
    linkedin: "https://linkedin.com/company/pratanvi-creations",
    instagram: "https://instagram.com/pratanvicreations",
    facebook: "https://facebook.com/pratanvicreations",
    twitter: "https://twitter.com/pratanvicreate",
  },
  stats: [
    { label: "Client Revenue Generated", value: "₹12 Cr+" },
    { label: "Projects Shipped", value: "140+" },
    { label: "Active Retainers", value: "45+" },
    { label: "Average Client ROI", value: "4.8x" },
    { label: "Client Satisfaction", value: "99.2%" },
    { label: "Avg Turnaround", value: "14 Days" },
  ],
};

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Web & App Development",
        description: "Lightning-fast Next.js websites and scalable web apps.",
        href: "/services/custom-web-app-development",
      },
      {
        label: "Performance Marketing & Ads",
        description: "Google & Meta ads optimized for maximum qualified ROI.",
        href: "/services/performance-marketing",
      },
      {
        label: "Local & National SEO",
        description: "Rank #1 on Google Maps and organic searches across India.",
        href: "/services/local-national-seo",
      },
      {
        label: "B2B Sales Acceleration",
        description: "Cold outreach, lead pipelines, and CRM pipeline automation.",
        href: "/services/sales-acceleration",
      },
      {
        label: "Clinic & Hospital Systems",
        description: "OPD booking, WhatsApp appointment bots & local patient SEO.",
        href: "/services/clinic-management-growth",
      },
      {
        label: "School & Institution Portals",
        description: "Admission funnels, parent communication & ERP setups.",
        href: "/services/school-erp-admissions",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
