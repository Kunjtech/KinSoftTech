import PageShell from "../../components/PageShell.jsx";
import Packages from "../../components/Packages.jsx";
import Pricing from "../../components/Pricing.jsx";
import CTA from "../../components/CTA.jsx";

export default function PackagesPage() {
  return <PageShell><Packages /><Pricing /><CTA /></PageShell>;
}