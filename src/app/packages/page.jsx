import PageShell from "../../components/PageShell.jsx";
import Pricing from "../../components/Pricing.jsx";
import CTA from "../../components/CTA.jsx";

export const metadata = {
  title: "Web Development Packages in Agra",
  description:
    "Explore KinSoftTech website and app development packages, maintenance plans, and social media content services for businesses in Agra.",
  keywords: [
    "website development packages",
    "web development packages in Agra",
    "website design pricing",
    "mobile app development packages",
    "website maintenance plans",
    "social media marketing packages",
    "Instagram and Facebook content packages",
  ],
};

export default function PackagesPage() {
  return (
    <PageShell>
      <Pricing />
      <CTA />
    </PageShell>
  );
}