import PageShell from "../../components/PageShell.jsx";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the KinSoftTech privacy policy to learn how information submitted through our website enquiry form is used and handled.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="section-pad legal-page">
        <p className="section-label">LEGAL</p>
        <h1>Privacy policy</h1>
        <p>
          We only use the information you submit to respond to your enquiry and
          discuss the services you request. We do not sell your personal
          information.
        </p>
        <p>
          Enquiry details are stored securely for business communication and
          may be deleted on request.
        </p>
      </article>
    </PageShell>
  );
}