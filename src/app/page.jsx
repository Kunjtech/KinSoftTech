import LandingPage from "../components/LandingPage.jsx";

export const metadata = {
  title: "Web Development Company in Agra",
  description:
    "Need a website in Agra? KinSoftTech designs and develops responsive business websites, e-commerce stores, and digital products from Sikandra, Agra.",
  keywords: [
    "web development company in Agra",
    "website development in Agra",
    "web design company in Agra",
    "website designer in Agra",
  ],
};

export default function Page() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KinSoftTech",
    description:
      "Web development, website design, e-commerce, mobile app, and custom software services in Agra, Uttar Pradesh.",
    telephone: "+91 86302 73126",
    email: "contact@kinsoftech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "168 Bankey Bihari Puram, Vinayak Nagar, Sikandra",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282007",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Agra",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  );
}