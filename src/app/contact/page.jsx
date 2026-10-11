import ContactForm from "../../components/ContactForm.jsx";
import PageShell from "../../components/PageShell.jsx";

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
            A few details are all we need to start. We’ll get back to you with
            the right next step.
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