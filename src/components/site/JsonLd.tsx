import { site, faqs } from "@/lib/site.config";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `https://www.${site.domain}/#organization`,
    name: site.name,
    alternateName: "Al-Tayyab",
    url: `https://www.${site.domain}`,
    logo: `https://www.${site.domain}/logo.png`,
    description: site.description,
    foundingDate: "2015",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Jammu and Kashmir, India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-88035-12375",
      contactType: "admissions",
      availableLanguage: ["English", "Urdu", "Kashmiri"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:30",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, 4G Spot Complex, Opposite Tattoo Ground, Batamallo",
      addressLocality: "Srinagar",
      addressRegion: "Jammu and Kashmir",
      postalCode: "190009",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0884,
      longitude: 74.8252,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:30",
    },
    knowsAbout: [
      "MBBS in Bangladesh",
      "BMDC approved colleges",
      "NMC listed medical colleges",
      "FMGE preparation",
      "NEXT exam",
      "Medical admissions for Kashmiri students",
    ],
    sameAs: [
      `https://wa.me/${site.contact.whatsappNumber}`,
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `https://www.${site.domain}/#website`,
    url: `https://www.${site.domain}`,
    name: site.name,
    description: site.description,
    publisher: {
      "@id": `https://www.${site.domain}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
