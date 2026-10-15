import PageShell from "../../components/PageShell.jsx";
import Portfolio from "../../components/Portfolio.jsx";
import CTA from "../../components/CTA.jsx";

export const metadata = {
  title: "Website Portfolio & Design Concepts",
  description:
    "View responsive website design concepts for healthcare, restaurant, salon, and retail businesses, and explore ideas for your own business website.",
  keywords: [
    "website design portfolio",
    "business website examples",
    "healthcare website design",
    "restaurant website design",
    "salon website design",
    "retail website design",
  ],
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <Portfolio />
      <CTA />
    </PageShell>
  );
}