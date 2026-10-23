import PageShell from "../../components/PageShell.jsx";
import Services from "../../components/Services.jsx";
import CTA from "../../components/CTA.jsx";

export const metadata = {
  title: "Web, App & Software Development in Agra",
  description:
    "Explore web development in Agra, including responsive website design, e-commerce stores, mobile apps, custom software, API integrations, and ongoing maintenance from KinSoftTech.",
  keywords: [
    "web development in Agra",
    "website development in Agra",
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