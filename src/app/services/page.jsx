import PageShell from "../../components/PageShell.jsx";
import Services from "../../components/Services.jsx";
import CTA from "../../components/CTA.jsx";

export const metadata = {
  title: "Web, App & Software Development Services",
  description:
    "Explore responsive website design, e-commerce development, Android and iOS apps, custom software, API integrations, website maintenance, and content management support from KinSoftTech.",
  keywords: [
    "website design and development",
    "responsive web design",
    "e-commerce development",
    "Android app development",
    "iOS app development",
    "custom software development",
    "API integration services",
    "website maintenance",
    "CMS support",
    "content management support",
  ],
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
      <CTA />
    </PageShell>
  );
}