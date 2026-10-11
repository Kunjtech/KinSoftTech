import About from "../../components/About.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import HowWeWork from "../../components/HowWeWork.jsx";
import PageShell from "../../components/PageShell.jsx";

export default function AboutPage() {
  return (
    <PageShell>
      <About />
      <WhyChooseUs />
      <HowWeWork />
    </PageShell>
  );
}