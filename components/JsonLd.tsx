const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Generation Beta",
  alternateName: "Generation Beta Revenue Growth Partners",
  url: "https://betagrowthpartners.com",
  logo: "https://betagrowthpartners.com/logo.png",
  image: "https://betagrowthpartners.com/logo.png",
  email: "sohom@betagrowthpartners.com",
  description:
    "Generation Beta is a growth marketing and revenue architecture agency operating out of Bangkok, serving hospitality, wellness, and premium professional services businesses across Southeast Asia — including Thailand, Singapore, and Indonesia. We specialize in Revenue Leak Architecture: locating structural revenue loss in pricing, booking conversion, and online reputation, then designing and installing the systems that stop it.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "723 Teo Hong Silom Building, Si Lom Rd, Silom, Bang Rak",
    addressLocality: "Bangkok",
    postalCode: "10500",
    addressCountry: "TH",
  },
  taxID: "0105567141164",
  parentOrganization: {
    "@type": "Organization",
    name: "Digital Zen Group Co., Ltd.",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.7563",
    longitude: "100.5018",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Southeast Asia" },
    { "@type": "Country", name: "Thailand" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Indonesia" },
  ],
  founder: {
    "@type": "Person",
    name: "Sohom Mukherjee",
    jobTitle: "Founder",
    sameAs: ["https://linkedin.com/in/digitalsohom-mukherjee"],
  },
  sameAs: ["https://linkedin.com/in/digitalsohom-mukherjee"],
  knowsAbout: [
    "Growth Marketing",
    "Revenue Leak Architecture",
    "Revenue Optimization",
    "Conversion Rate Optimization",
    "Hospitality Management Consulting",
    "Wellness Industry Marketing",
    "Pricing Architecture",
    "Booking Funnel Optimization",
    "Online Reputation Management",
  ],
  serviceType: [
    "Revenue Diagnostic Audit",
    "Revenue System Architecture",
    "Growth Marketing Consulting",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
