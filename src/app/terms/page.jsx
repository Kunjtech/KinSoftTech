import PageShell from "../../components/PageShell.jsx";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review KinSoftTech terms of service, including how project scope, timelines, pricing, and revisions are agreed.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <article className="section-pad legal-page">
        <p className="section-label">LEGAL</p>
        <h1>Terms of service</h1>
        <p>
          Project scope, delivery timelines, pricing and included revisions are
          agreed before work begins.
        </p>
        <p>
          Starting prices are estimates. Final quotes depend on the confirmed
          requirements and integrations.
        </p>
      </article>
    </PageShell>
  );
}