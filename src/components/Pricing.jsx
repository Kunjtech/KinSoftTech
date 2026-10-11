const plans = [
  ["Basic Maintenance", "₹2,999", "Minor content updates, basic bug fixes, monitoring and technical support."],
  ["Business Maintenance", "₹4,999", "Regular updates, minor design changes, performance monitoring and priority support."],
  ["Premium Maintenance", "₹7,999", "Frequent updates, advanced support, optimization and security monitoring."],
];

export default function Pricing() {
  return (
    <section className="packages section-pad" id="maintenance" aria-labelledby="pricing-heading">
      <div className="section-heading package-heading">
        <div>
          <p className="section-label">WEBSITE & APP MAINTENANCE</p>
          <h1 id="pricing-heading">
            Stay supported
            <br />
            <em>after launch.</em>
          </h1>
        </div>
        <p>
          Choose an ongoing plan for updates, technical support, monitoring and
          optimization. New features are quoted separately.
        </p>
      </div>
      <div className="package-grid">
        {plans.map(([name, price, description], index) => (
          <article className={`package-card${index === 1 ? " package-card--featured" : ""}`} key={name}>
            <div className="package-title-row">
              <h2>{name}</h2>
              <span>/ MONTH</span>
            </div>
            <p className="package-desc">{description}</p>
            <p className="package-price">
              {price}
              <span> starting</span>
            </p>
            <a
              className={`package-cta${index === 1 ? " package-cta--featured" : ""}`}
              href="/contact"
            >
              Start a conversation
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}