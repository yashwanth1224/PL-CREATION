export type NavItem = {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
  children?: {
    label: string;
    description: string;
    href: string;
    icon?: string;
  }[];
};

export type ServiceDeliverable = {
  title: string;
  description: string;
  timeline: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: "Technology" | "Sales" | "Marketing" | "Digital Growth";
  startingPrice: number;
  featured: boolean;
  deliverables: ServiceDeliverable[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  faqs: ServiceFaq[];
};

export type IndustryItem = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  recommendedServices: string[]; // slugs
  stat: {
    label: string;
    value: string;
  };
};

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  serviceCategory: "Technology" | "Sales" | "Marketing" | "Digital Growth";
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar?: string;
  content: string;
  rating: number;
  highlightMetric?: string;
};

export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceOneTime?: number;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
};

export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};
