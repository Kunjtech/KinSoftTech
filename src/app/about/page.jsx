import About from "../../components/About.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import HowWeWork from "../../components/HowWeWork.jsx";
import PageShell from "../../components/PageShell.jsx";

export const metadata = {
  title: "About Our Digital Studio",
  description:
    "Meet KinSoftTech, a digital studio helping businesses plan and launch websites, mobile apps, e-commerce stores, and custom software.",
  keywords: [
    "digital studio",
    "web development company",
    "website and app development",
    "digital solutions for businesses",
  ],
};

export default function AboutPage() {
  return (
    <PageShell>
      <About />
      <WhyChooseUs />
      <HowWeWork />
    </PageShell>
  );
}