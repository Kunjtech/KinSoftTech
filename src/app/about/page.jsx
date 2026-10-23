import About from "../../components/About.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import HowWeWork from "../../components/HowWeWork.jsx";
import PageShell from "../../components/PageShell.jsx";

export const metadata = {
  title: "About Our Agra Digital Studio",
  description:
    "Meet KinSoftTech, an Agra-based digital studio helping businesses plan and launch websites, mobile apps, e-commerce stores, and custom software.",
  keywords: [
    "digital studio",
    "digital studio in Agra",
    "web development company",
    "web development company in Agra",
    "website and app development company",
    "digital solutions for businesses in Agra",
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