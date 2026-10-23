import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell.jsx";
import CTA from "../../../components/CTA.jsx";
import ServiceDetail, { getServiceDetails, getServiceSlugs } from "../../../components/ServiceDetail.jsx";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceDetails(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.eyebrow === "API & INTEGRATIONS"
      ? "API & Integrations"
      : service.eyebrow
          .toLowerCase()
          .replace(/\b\w/g, (letter) => letter.toUpperCase())} in Agra`,
    description: service.description,
    keywords: service.keywords,
  };
}

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceDetails(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <ServiceDetail service={service} />
      <CTA />
    </PageShell>
  );
}