import { siteConfig } from "./siteConfig";

export function dentistSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.clinicName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "BR",
    },
    sameAs: [siteConfig.instagramUrl, siteConfig.googleBusinessUrl].filter(
      (item) => item && !item.includes("_URL"),
    ),
  };

  if (siteConfig.email) {
    return { ...schema, email: siteConfig.email };
  }

  return schema;
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteConfig.siteUrl).toString(),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
