export default function CTA() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <p className="section-label section-label--light">READY WHEN YOU ARE</p>
      <h1 id="cta-heading">
        Let’s make your
        <br />
        <em>next move digital.</em>
      </h1>
      <p className="cta-band-copy">
        Tell us what you are building and we’ll help you choose the right
        digital starting point.
      </p>
      <a href="/contact" className="button button--cream">
        Start a conversation
      </a>
    </section>
  );
}