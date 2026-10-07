import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "custom-web-app-development",
    title: "Custom Web & App Development",
    shortDescription: "High-performance Next.js web applications, e-commerce storefronts, and custom portals engineered for conversion and sub-second load times.",
    fullDescription: "We build ultra-fast, modern web applications and custom software platforms that turn visitors into paying customers. Using modern React, Next.js, and scalable cloud architectures, our solutions are built to load instantly on 4G networks across India and scale smoothly as your business grows.",
    iconName: "Code2",
    category: "Technology",
    startingPrice: 24999,
    featured: true,
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"],
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Average Load Time", value: "0.8s" },
      { label: "Conversion Lift", value: "+42%" },
    ],
    deliverables: [
      {
        title: "Full-Stack Web Architecture",
        description: "Custom engineered frontend and backend designed for speed, security, and responsive UX across all screen sizes.",
        timeline: "Week 1-2",
      },
      {
        title: "Conversion Engine & Lead Funnels",
        description: "Direct WhatsApp integrations, custom quote calculators, and automated lead capture pipelines.",
        timeline: "Week 2-3",
      },
      {
        title: "SEO & Performance Optimization",
        description: "Core Web Vitals tuning, structured schema JSON-LD, and dynamic OpenGraph assets for social sharing.",
        timeline: "Week 3",
      },
      {
        title: "Deployment & Team Handover",
        description: "Zero-downtime CI/CD cloud deployment on Vercel/AWS with CMS admin panel and full documentation.",
        timeline: "Week 4",
      },
    ],
    faqs: [
      {
        question: "How long does a custom website or web app take to launch?",
        answer: "Most standard high-converting business sites launch within 10 to 14 days. Custom software portals and ERP integrations typically take 3 to 6 weeks depending on custom feature requirements.",
      },
      {
        question: "Do you provide hosting and post-launch maintenance?",
        answer: "Yes, all our plans include secure cloud deployment setups, SSL certificates, automated daily backups, and 30 to 90 days of complimentary technical support.",
      },
      {
        question: "Will my website look great and load fast on mobile devices in India?",
        answer: "Absolutely. We mobile-first optimize every asset and bundle so pages load in under 1 second even on budget Android devices and 4G networks.",
      },
    ],
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing & Ads",
    shortDescription: "High-ROI Google, Meta, and LinkedIn ad campaigns structured to generate qualified leads and sales at the lowest cost per acquisition.",
    fullDescription: "Stop wasting money on vanity impressions. We manage ROI-driven performance ad funnels on Google Ads (Search, YouTube, Performance Max) and Meta (Facebook & Instagram Ads) tailored specifically for the Indian SMB and enterprise market.",
    iconName: "TrendingUp",
    category: "Marketing",
    startingPrice: 19999,
    featured: true,
    techStack: ["Google Ads", "Meta Business Manager", "Google Analytics 4", "Google Tag Manager", "Hotjar", "Looker Studio"],
    metrics: [
      { label: "Avg ROAS", value: "4.6x" },
      { label: "Cost Per Lead Reduction", value: "-38%" },
      { label: "Ad Spend Managed", value: "₹3 Cr+" },
    ],
    deliverables: [
      {
        title: "Audience & Competitor Intelligence",
        description: "Deep dive into target demographics, high-intent search keywords, and competitor ad creatives.",
        timeline: "Day 1-3",
      },
      {
        title: "Ad Creative & Copywriting Production",
        description: "High-converting visual banners, Reels/Shorts video scripts, and persuasive copy tailored to local Indian buyers.",
        timeline: "Day 4-7",
      },
      {
        title: "Campaign Setup & Pixel Tracking",
        description: "Server-side conversion tracking, CAPI, lead forms, and audience segmentation.",
        timeline: "Day 7-9",
      },
      {
        title: "Weekly A/B Testing & Scaling",
        description: "Continuous bid optimization, negative keyword filtering, and budget scaling on top-performing assets.",
        timeline: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "What is the recommended minimum monthly ad spend?",
        answer: "We recommend starting with at least ₹15,000 to ₹30,000 per month for ad spend on Google or Meta to gather statistically meaningful conversion data and generate steady inbound leads.",
      },
      {
        question: "How soon can we expect leads?",
        answer: "Lead generation campaigns usually start delivering qualified leads within 48 to 72 hours of going live.",
      },
    ],
  },
  {
    id: "seo",
    slug: "local-national-seo",
    title: "Local & National SEO",
    shortDescription: "Dominate Google search results and Google Maps Local 3-Pack in Bengaluru and across India with white-hat technical and content SEO.",
    fullDescription: "Gain continuous free organic traffic. We optimize your website architecture, Google Business Profile (GBP), citations, and content strategy to rank #1 for high-intent commercial keywords in your city and nationwide.",
    iconName: "Search",
    category: "Digital Growth",
    startingPrice: 14999,
    featured: true,
    techStack: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "Schema.org", "Google Maps Platform"],
    metrics: [
      { label: "Organic Traffic Growth", value: "+210%" },
      { label: "Google Maps Calls Lift", value: "+185%" },
      { label: "Keywords in Top 3", value: "85%" },
    ],
    deliverables: [
      {
        title: "Technical SEO Audit & Fixes",
        description: "Fixing crawl errors, schema markup, Core Web Vitals, and indexation bottlenecks.",
        timeline: "Week 1",
      },
      {
        title: "Google Business Profile (GBP) Optimization",
        description: "Local 3-Pack optimization, geotagged photos, category selection, and review acceleration system.",
        timeline: "Week 2",
      },
      {
        title: "High-Intent Content Engine",
        description: "Local landing pages and informative keyword-targeted service articles.",
        timeline: "Week 3-4",
      },
      {
        title: "Authoritative Local Citations",
        description: "Building NAP consistency across 50+ high-authority Indian business directories.",
        timeline: "Monthly",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to produce results?",
        answer: "Local SEO and Google Maps ranking improvements typically show within 30 to 45 days. Broader national organic rankings generally scale steadily over 3 to 6 months.",
      },
    ],
  },
  {
    id: "sales-growth",
    slug: "sales-acceleration",
    title: "B2B Sales Acceleration & Outreach",
    shortDescription: "End-to-end outbound lead generation systems, automated email sequences, and CRM workflows that fill your pipeline with ready-to-buy prospects.",
    fullDescription: "We build your predictable sales engine. From verified prospect data mining to hyper-personalized cold outreach and CRM pipeline configuration, we help B2B companies close more deals with less friction.",
    iconName: "Target",
    category: "Sales",
    startingPrice: 29999,
    featured: true,
    techStack: ["HubSpot", "Apollo.io", "Instantly.ai", "Zoho CRM", "WhatsApp Business API", "Zapier"],
    metrics: [
      { label: "Meeting Booking Rate", value: "8.4%" },
      { label: "Pipeline Value Added", value: "₹45L+" },
      { label: "Lead Response Time", value: "<5 min" },
    ],
    deliverables: [
      {
        title: "Ideal Customer Profile (ICP) Targeting",
        description: "Detailed industry, title, and revenue criteria to target verified decision-makers.",
        timeline: "Week 1",
      },
      {
        title: "Multi-Channel Outreach Sequences",
        description: "Cold email, LinkedIn touchpoints, and WhatsApp follow-up automation.",
        timeline: "Week 2",
      },
      {
        title: "CRM Setup & Pipeline Automation",
        description: "Lead scoring, automated deal stages, and automatic WhatsApp notification triggers for your sales reps.",
        timeline: "Week 3",
      },
    ],
    faqs: [
      {
        question: "Do you supply verified lead databases?",
        answer: "Yes, we curate clean, verified B2B lists with zero bounce rate guarantees tailored to your target industry.",
      },
    ],
  },
  {
    id: "clinic-growth",
    slug: "clinic-management-growth",
    title: "Clinic & Hospital Digital Growth",
    shortDescription: "Automated OPD appointment booking, WhatsApp reminders, and localized doctor reputation systems that drive patient footfall.",
    fullDescription: "Specially tailored for clinics, dentists, diagnostic centers, and hospitals. Reduce no-shows, streamline patient intake, and dominate local search when patients look for specialists nearby.",
    iconName: "Stethoscope",
    category: "Technology",
    startingPrice: 21999,
    featured: true,
    techStack: ["Next.js", "WhatsApp Cloud API", "Razorpay", "Twilio", "Google Health Schema", "PostgreSQL"],
    metrics: [
      { label: "Patient No-Show Drop", value: "-65%" },
      { label: "Monthly New Bookings", value: "+140" },
      { label: "Google Rating", value: "4.9/5" },
    ],
    deliverables: [
      {
        title: "Online Patient Booking Portal",
        description: "Doctor slot booking, specialist directory, and online consultation fee collection.",
        timeline: "Week 1-2",
      },
      {
        title: "WhatsApp Appointment Bot",
        description: "Automated booking confirmations, calendar invites, and 24-hour reminder messages.",
        timeline: "Week 2-3",
      },
      {
        title: "Doctor Local SEO Package",
        description: "Google Maps optimization for clinic keywords like 'best pediatrician near me'.",
        timeline: "Week 3",
      },
    ],
    faqs: [
      {
        question: "Can patients book without downloading any app?",
        answer: "Yes! Everything works seamlessly inside mobile web browsers and directly through WhatsApp.",
      },
    ],
  },
  {
    id: "school-erp",
    slug: "school-erp-admissions",
    title: "School & Institution Portals",
    shortDescription: "Complete student admission funnels, fee payment gateways, parent communication apps, and school ERP configurations.",
    fullDescription: "Empower your educational institution with digital admission funnels, automated fee collection reminders, attendance tracking, and intuitive parent portals.",
    iconName: "GraduationCap",
    category: "Technology",
    startingPrice: 34999,
    featured: true,
    techStack: ["Next.js", "React", "PostgreSQL", "Razorpay / Easebuzz", "AWS S3", "SMS & WhatsApp API"],
    metrics: [
      { label: "Admissions Inquiries", value: "+80%" },
      { label: "On-Time Fee Collection", value: "94%" },
      { label: "Parent Engagement", value: "98%" },
    ],
    deliverables: [
      {
        title: "Digital Admission Funnel",
        description: "Interactive application forms, document uploads, and automated entrance interview scheduling.",
        timeline: "Week 1-2",
      },
      {
        title: "Fee Management & Gateway Integration",
        description: "Instant UPI and netbanking payments with automated PDF receipt generation.",
        timeline: "Week 3-4",
      },
      {
        title: "Parent & Teacher Portal",
        description: "Timetable, notice board, circulars, and student performance dashboard.",
        timeline: "Week 4-5",
      },
    ],
    faqs: [
      {
        question: "Can we integrate UPI payments directly without high transaction fees?",
        answer: "Yes, we integrate official Razorpay and Easebuzz gateways configured for educational zero or low MDR tiers.",
      },
    ],
  },
  {
    id: "pg-retail",
    slug: "pg-hostel-retail-systems",
    title: "PG, Hostel & Retail Automation",
    shortDescription: "Room inventory management, tenant billing automation, POS sync, and hyper-local marketing for residential and retail businesses.",
    fullDescription: "Custom software and marketing setups built for PG operators, co-living spaces, and retail shops to manage occupancy, automate rent collection, and attract walk-ins.",
    iconName: "Building2",
    category: "Technology",
    startingPrice: 18999,
    featured: false,
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "WhatsApp API", "UPI Autopay"],
    metrics: [
      { label: "Occupancy Rate", value: "96%" },
      { label: "Rent Payment Delays", value: "-75%" },
      { label: "Local Inquiries/Mo", value: "120+" },
    ],
    deliverables: [
      {
        title: "Room / Bed Inventory System",
        description: "Live occupancy tracker, deposit management, and tenant KYC storage.",
        timeline: "Week 1-2",
      },
      {
        title: "Automated Rent Reminders",
        description: "WhatsApp message with 1-click UPI payment link sent on the 1st of every month.",
        timeline: "Week 2-3",
      },
    ],
    faqs: [
      {
        question: "Can tenants pay rent via Google Pay or PhonePe?",
        answer: "Yes, 1-click UPI links make it instant for tenants on their phones.",
      },
    ],
  },
  {
    id: "branding",
    slug: "brand-identity-creative",
    title: "Brand Identity & Creative Design",
    shortDescription: "Modern brand guidelines, vector logos, brochures, pitch decks, and social media creative kits that establish instant authority.",
    fullDescription: "Stand out in crowded markets with world-class visual design. We craft cohesive brand identities, modern logo systems, high-converting pitch decks, and social media branding kits.",
    iconName: "Palette",
    category: "Marketing",
    startingPrice: 12999,
    featured: false,
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Canva Pro"],
    metrics: [
      { label: "Brand Recall Lift", value: "3.5x" },
      { label: "Design Delivery", value: "5 Days" },
      { label: "Client Revisions", value: "Unlimited" },
    ],
    deliverables: [
      {
        title: "Logo & Typography Suite",
        description: "Primary, secondary, and sub-mark vector logos with complete font styling.",
        timeline: "Day 1-4",
      },
      {
        title: "Brand Style Guide Book",
        description: "Color codes (HEX, RGB, CMYK), spacing rules, and voice tone guidelines.",
        timeline: "Day 5-6",
      },
      {
        title: "Social Media Starter Kit",
        description: "15+ reusable Figma / Canva templates for Instagram, LinkedIn, and WhatsApp status.",
        timeline: "Day 7",
      },
    ],
    faqs: [
      {
        question: "Do I get full vector source files?",
        answer: "Yes, you receive all editable AI, SVG, PNG, PDF, and Figma design source files.",
      },
    ],
  },
  {
    id: "whatsapp-crm",
    slug: "whatsapp-marketing-automation",
    title: "WhatsApp Marketing & CRM Automation",
    shortDescription: "Official Meta WhatsApp Business API integration, broadcast campaigns, automated customer support chatbots, and CRM sync.",
    fullDescription: "Tap into the #1 communication channel in India. We setup official WhatsApp Cloud API, verified green ticks, automated customer support bots, and rich catalog broadcast systems.",
    iconName: "MessageSquare",
    category: "Sales",
    startingPrice: 16999,
    featured: false,
    techStack: ["Meta WhatsApp Cloud API", "Node.js", "Webhook Listeners", "Wati / Interakt", "Make.com"],
    metrics: [
      { label: "Message Open Rate", value: "98%" },
      { label: "Click-Through Rate", value: "45%" },
      { label: "Response Time", value: "<10s" },
    ],
    deliverables: [
      {
        title: "Meta API & Green Tick Assistance",
        description: "Official WhatsApp Cloud API verification and sender number configuration.",
        timeline: "Week 1",
      },
      {
        title: "Smart Chatbot Flow Builder",
        description: "Automated FAQ resolution, product catalog browsing, and live agent handover.",
        timeline: "Week 2",
      },
    ],
    faqs: [
      {
        question: "Can we send broadcast messages to our existing customer list?",
        answer: "Yes, with approved Meta message templates you can safely broadcast to thousands of opted-in customers.",
      },
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-infrastructure-security",
    title: "Cloud Infrastructure & Cybersecurity",
    shortDescription: "High-availability AWS & Vercel cloud architecture, database backups, SSL configurations, and enterprise-grade security hardening.",
    fullDescription: "Ensure your digital assets remain fast, online, and safe from cyber threats. We implement enterprise cloud hosting, automated scaling, daily offsite backups, and firewall protection.",
    iconName: "ShieldCheck",
    category: "Technology",
    startingPrice: 22999,
    featured: false,
    techStack: ["AWS", "Vercel", "Cloudflare", "Docker", "PostgreSQL", "Redis", "GitHub Actions"],
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "DDoS Mitigation", value: "Instant" },
      { label: "SSL Grade", value: "A+" },
    ],
    deliverables: [
      {
        title: "Cloud Infrastructure Provisioning",
        description: "Production server setup with CDN caching, edge routing, and automated scaling.",
        timeline: "Week 1",
      },
      {
        title: "Automated Backup & Disaster Recovery",
        description: "Encrypted daily snapshots and point-in-time database recovery configurations.",
        timeline: "Week 2",
      },
    ],
    faqs: [
      {
        question: "Do you help migrate existing servers without downtime?",
        answer: "Yes, our engineers execute phased zero-downtime database and DNS migrations.",
      },
    ],
  },
];
