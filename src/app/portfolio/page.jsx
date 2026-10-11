import PageShell from "../../components/PageShell.jsx";
import Portfolio from "../../components/Portfolio.jsx";
import CTA from "../../components/CTA.jsx";

export default function PortfolioPage() {
  return (
    <PageShell>
      <Portfolio />
      <CTA />
    </PageShell>
  );
}