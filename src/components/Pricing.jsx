const plans = [
  ["Basic Maintenance", "₹2,999", "Minor content updates, basic bug fixes, monitoring and technical support."],
  ["Business Maintenance", "₹4,999", "Regular updates, minor design changes, performance monitoring and priority support."],
  ["Premium Maintenance", "₹7,999", "Frequent updates, advanced support, optimization and security monitoring."],
];

const socialMediaPlans = [
  ["Starter Social", "4 posts", "4 designed social posts per month, with captions and scheduled publishing on Instagram and Facebook."],
  ["Growth Social", "8 posts", "8 designed social posts per month, with captions and scheduled publishing on Instagram and Facebook."],
  ["Consistent Social", "12 posts", "12 designed social posts per month, with captions and scheduled publishing on Instagram and Facebook."],
];

export default function Pricing() {
  return (
    <>
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
      <section
        className="packages packages--social section-pad"
        id="social-media-marketing"
        aria-labelledby="social-media-heading"
      >
        <div className="section-heading package-heading">
          <div>
            <p className="section-label">SOCIAL MEDIA MARKETING</p>
            <h2 id="social-media-heading">
              Stay visible
              <br />
              <em>on social.</em>
            </h2>
          </div>
          <p>
            Monthly Instagram and Facebook content packages with designed posts,
            captions, and scheduled publishing. Choose a monthly post count and
            request a quote for your business.
          </p>
        </div>
        <div className="package-grid">
          {socialMediaPlans.map(([name, postCount, description], index) => (
            <article
              className={`package-card${index === 1 ? " package-card--featured" : ""}`}
              key={name}
            >
              <div className="package-title-row">
                <h3>{name}</h3>
                <span>/ MONTH</span>
              </div>
              <p className="package-desc">{description}</p>
              <p className="package-price package-price--quote">
                {postCount}
                <span> per month</span>
              </p>
              <a
                className={`package-cta${index === 1 ? " package-cta--featured" : ""}`}
                href="/contact"
              >
                Request a quote
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}