import React from "react";
import { siteConfig } from "@/content/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    legalName: "Pratanvi Creations Pvt Ltd",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pratanvicreations.com",
    logo: "https://pratanvicreations.com/logo.png",
    image: "https://pratanvicreations.com/og-image.jpg",
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "HSR Layout / Koramangala Hub",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9121,
      longitude: 77.6446,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    priceRange: "₹₹",
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
