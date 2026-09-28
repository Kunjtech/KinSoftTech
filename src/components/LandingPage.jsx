import PageShell from "./PageShell.jsx";
import Hero from "../Hero.jsx";
import CTA from "./CTA.jsx";

function ArrowIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const capabilities = [
  ["01", "Websites", "Clear, responsive websites that help the right customers find and trust you."],
  ["02", "Mobile apps", "Useful Android, iOS and cross-platform experiences for your customers."],
  ["03", "Digital systems", "E-commerce, APIs, dashboards and custom tools built around your workflow."],
];

export default function LandingPage() {
  return (
    <PageShell>
      <Hero Icon={ArrowIcon} />

      <section className="landing-overview section-pad" id="services" aria-labelledby="landing-overview-heading">
        <div className="section-heading">
          <div><p className="section-label">ONE DIGITAL PARTNER</p><h1 id="landing-overview-heading">From first idea<br /><em>to fully live.</em></h1></div>
          <p>KinSoftTech helps growing businesses build, launch and improve the digital products their customers actually need.</p>
        </div>
        <div className="landing-capability-grid">
          {capabilities.map(([number, title, description]) => (
            <article className="landing-capability" key={number}>
              <span className="landing-capability-number">{number}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="landing-overview-links">
          <a className="button button--dark" href="/services">Explore all services <ArrowIcon size={17} /></a>
          <a className="text-link" href="/packages">See packages and pricing <span>↗</span></a>
        </div>
      </section>

      <section className="landing-trust" aria-labelledby="landing-trust-heading">
        <div><p className="section-label">WHY KINSOFTECH</p><h2 id="landing-trust-heading">Modern work.<br /><em>Human support.</em></h2></div>
        <p>Transparent scope, responsive design, practical technology and support after launch. Every project starts with understanding your business first.</p>
      </section>

      <CTA />
    </PageShell>
  );
}