const serviceDetails = {
  "website-development": {
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "A website that makes your business easier to choose.",
    description: "We design and develop fast, responsive websites that explain what you do clearly and turn the right visitors into enquiries.",
    suitableFor: "Startups, local businesses, professionals, service brands, restaurants, hotels, real-estate teams and educators.",
    features: ["Business and corporate websites", "Portfolio and landing pages", "Service-based websites", "Mobile, tablet and desktop layouts", "Contact forms, WhatsApp, Maps and social links", "Basic SEO and speed optimization", "Deployment assistance"],
    deliverables: "A polished responsive website with the agreed pages, content sections, integrations and launch support.",
  },
  "ecommerce-development": {
    eyebrow: "E-COMMERCE DEVELOPMENT",
    title: "An online store built to make buying simple.",
    description: "We create clear product journeys, reliable checkout flows and manageable store foundations for businesses selling online.",
    suitableFor: "Product businesses, local brands, retailers and growing companies moving their catalogue online.",
    features: ["Product catalogue and categories", "Product details, search and filtering", "Shopping cart and checkout", "Payment gateway integration", "Order and product management", "Customer information and accounts", "Optional coupons, reviews, shipping and notifications"],
    deliverables: "A responsive e-commerce experience with the agreed catalogue, checkout, integrations and deployment support.",
  },
  "mobile-app-development": {
    eyebrow: "MOBILE APP DEVELOPMENT",
    title: "A useful mobile experience for your customers.",
    description: "We build practical Android, iOS and cross-platform applications that bring your services, products or bookings closer to users.",
    suitableFor: "Businesses that need customer-facing apps, booking apps, e-commerce apps or internal mobile workflows.",
    features: ["Modern mobile UI", "Android and iOS-compatible app direction", "User registration, login and profiles", "Business, service or product sections", "Push notification setup", "API integration and basic testing", "Deployment assistance"],
    deliverables: "A tested app experience with agreed screens, functionality, integrations and app deployment guidance.",
  },
  "custom-software": {
    eyebrow: "CUSTOM SOFTWARE",
    title: "Digital systems shaped around how your team works.",
    description: "We turn manual workflows into focused software that gives your team better visibility, fewer repetitive tasks and room to grow.",
    suitableFor: "Businesses that need internal tools, dashboards, operational systems or a complete SaaS-style product.",
    features: ["CRM and customer management", "Admin and business dashboards", "Booking, inventory and order systems", "Employee management", "Custom APIs and SaaS applications", "User roles, reports and business logic", "Database and integration planning"],
    deliverables: "A scoped digital system with agreed modules, user roles, integrations, testing and deployment milestones.",
  },
  "api-integrations": {
    eyebrow: "API & INTEGRATIONS",
    title: "The connections that make your digital product work harder.",
    description: "We connect your website or app to the services your business already relies on, without making the experience feel stitched together.",
    suitableFor: "Businesses that need payments, WhatsApp, Maps, analytics, CRM, booking or third-party service connections.",
    features: ["REST API integrations", "Payment gateways", "WhatsApp and messaging", "Google Maps and location features", "Analytics and tracking", "Third-party tools and webhooks", "Data synchronization between website and app"],
    deliverables: "A documented integration setup with agreed data flows, error handling and testing across the supported experience.",
  },
  maintenance: {
    eyebrow: "WEBSITE & APP MAINTENANCE",
    title: "Reliable support after launch.",
    description: "Keep your digital product healthy with a support plan for updates, fixes, monitoring and ongoing technical care.",
    suitableFor: "Businesses that want a reliable technical partner after their website or app goes live.",
    features: ["Basic content updates", "Bug fixes and technical support", "Website monitoring", "Regular updates and minor design changes", "Performance optimization", "Security monitoring and priority issue resolution"],
    deliverables: "Support according to the selected Basic, Business or Premium plan. New features and major modules are quoted separately.",
  },
};

export function getServiceDetails(slug) {
  return serviceDetails[slug];
}

export function getServiceSlugs() {
  return Object.keys(serviceDetails);
}

export default function ServiceDetail({ service }) {
  return (
    <section className="service-detail section-pad" aria-labelledby="service-detail-heading">
      <div className="service-detail-intro">
        <p className="section-label">{service.eyebrow}</p>
        <h1 id="service-detail-heading">{service.title}</h1>
        <p className="service-detail-lead">{service.description}</p>
        <a className="button button--dark" href="/contact">Discuss this service <span>↗</span></a>
      </div>
      <div className="service-detail-grid">
        <article className="service-detail-panel">
          <p className="section-label">SUITABLE FOR</p>
          <p>{service.suitableFor}</p>
        </article>
        <article className="service-detail-panel">
          <p className="section-label">WHAT’S INCLUDED</p>
          <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </article>
        <article className="service-detail-panel service-detail-panel--wide">
          <p className="section-label">EXPECTED DELIVERABLE</p>
          <p>{service.deliverables}</p>
        </article>
      </div>
    </section>
  );
}