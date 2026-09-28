export default function Portfolio({ websitePackages, setSelectedService, SectionLabel, Icon }) {
  return (
    <section className="packages section-pad" id="packages">
      <div className="section-heading package-heading">
        <div><SectionLabel>STRAIGHTFORWARD STARTING POINTS</SectionLabel><h2>Find your<br />starting point.</h2></div>
        <p>Every project is different. These packages help you get a feel for the investment; we’ll tailor the final scope to your business.</p>
      </div>
      <div className="package-grid">
        {websitePackages.map((pkg) => (
          <article className={`package-card${pkg.featured ? " package-card--featured" : ""}`} key={pkg.name}>
            {pkg.featured && <div className="package-ribbon">THE CROWD FAVOURITE <span>✳</span></div>}
            <div className="package-title-row"><h3>{pkg.name}</h3><span>WEBSITE</span></div>
            <p className="package-desc">{pkg.description}</p>
            <p className="package-price">{pkg.price}<span> starting</span></p>
            <a className={`package-cta${pkg.featured ? " package-cta--featured" : ""}`} href="#contact" onClick={() => setSelectedService(`${pkg.name} Website`)}>
              Let’s talk about it <Icon name="arrow" size={16} />
            </a>
            <div className="package-rule" />
            <p className="includes-label">A good place to start</p>
            <ul className="feature-list">{pkg.features.map((feature) => <li key={feature}><Icon name="check" size={16} />{feature}</li>)}</ul>
            <div className="package-time"><Icon name="clock" size={15} /> Usually ready in {pkg.timeline}</div>
          </article>
        ))}
      </div>
      <div className="package-note"><Icon name="spark" size={19} /><p><strong>A note on pricing:</strong> These are starting prices. We’ll confirm the scope, delivery timeline and final quote before any work begins.</p></div>
    </section>
  );
}