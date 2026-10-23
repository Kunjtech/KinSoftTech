import ContactForm from "../../components/ContactForm.jsx";
import PageShell from "../../components/PageShell.jsx";

export const metadata = {
  title: "Contact KinSoftTech in Agra",
  description:
    "Contact KinSoftTech in Agra to discuss website design, e-commerce development, a mobile app, or custom software for your business.",
  keywords: [
    "contact web development company",
    "contact web development company in Agra",
    "website design enquiry",
    "mobile app development enquiry",
    "custom software enquiry",
  ],
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact section-pad" aria-labelledby="contact-heading">
        <div className="contact-copy">
          <p className="section-label">START A CONVERSATION</p>
          <h1 id="contact-heading">
            Tell us what
            <br />
            you’re <em>imagining.</em>
          </h1>
          <p>
            Based in Sikandra, Agra, we work with businesses on website and
            software projects. Share a few details and we’ll get back to you
            with the right next step.
          </p>
          <div className="contact-email">
            <span>OR DROP US A NOTE</span>
            <a href="mailto:contact@kinsoftech.com">contact@kinsoftech.com</a>
            <span>WhatsApp: +918630273126</span>
          </div>
        </div>
        <ContactForm />
      </section>
    </PageShell>
  );
}