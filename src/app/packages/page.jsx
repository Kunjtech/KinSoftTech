import PageShell from "../../components/PageShell.jsx";
import Pricing from "../../components/Pricing.jsx";
import CTA from "../../components/CTA.jsx";

export const metadata = {
  title: "Website, Maintenance & Social Media Packages",
  description:
    "Explore KinSoftTech website and app projects, ongoing maintenance plans, and monthly Instagram and Facebook social media content packages.",
  keywords: [
    "website development packages",
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