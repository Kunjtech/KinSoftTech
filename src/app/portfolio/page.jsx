import PageShell from "../../components/PageShell.jsx";
import Portfolio from "../../components/Portfolio.jsx";
import CTA from "../../components/CTA.jsx";

export const metadata = {
  title: "Website Design Concepts | Agra Studio",
  description:
    "View responsive website design concepts from KinSoftTech, an Agra-based web development studio, for healthcare, restaurant, salon, and retail businesses.",
  keywords: [
    "website design portfolio",
    "website design studio in Agra",
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