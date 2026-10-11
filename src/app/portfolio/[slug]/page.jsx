import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell.jsx";
import CTA from "../../../components/CTA.jsx";
import SampleWorkDetail, { getSampleWork } from "../../../components/SampleWorkDetail.jsx";
import { sampleWork } from "../../../components/Portfolio.jsx";

export function generateStaticParams() {
  return sampleWork.map((project) => ({ slug: project.id }));
}

export default async function SampleWorkPage({ params }) {
  const { slug } = await params;
  const project = getSampleWork(slug, sampleWork);
  if (!project) notFound();

  return (
    <PageShell>
      <SampleWorkDetail project={project} />
      <CTA />
    </PageShell>
  );
}