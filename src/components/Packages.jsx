const websitePackages = [
  { name: "Starter Website", price: "₹7,999", suitable: "Small businesses, professionals and individuals", timeline: "3–5 working days", features: ["Up to 3 pages", "Responsive mobile and desktop design", "Contact form, WhatsApp and Maps", "Social links and basic SEO", "Speed optimization", "Deployment assistance"] },
  { name: "Business Website", price: "₹19,999", suitable: "Growing businesses and local brands", timeline: "7–10 working days", featured: true, features: ["Up to 7 pages", "Custom responsive UI/UX", "Forms, WhatsApp, Maps and analytics", "Basic SEO and image optimization", "Performance optimization", "Deployment and post-launch support"] },
  { name: "Premium / Custom", price: "₹34,999+", suitable: "Established businesses requiring custom functionality", timeline: "2–4 weeks", features: ["Fully custom UI/UX", "Advanced sections and forms", "API and third-party integrations", "Custom functionality and animations", "Analytics and SEO-friendly structure", "Deployment and post-launch support"] },
  { name: "E-commerce Website", price: "₹39,999+", suitable: "Businesses selling products online", timeline: "2–5 weeks", features: ["Products, categories and search", "Cart, checkout and payments", "Order management", "Customer information", "WhatsApp and responsive design", "Optional coupons, reviews and shipping"] },
  { name: "Business Digital Package", price: "₹89,999+", suitable: "Businesses requiring a website and mobile app", timeline: "6–12 weeks", features: ["Up to 7-page professional website", "Android/iOS-compatible app", "Authentication and business sections", "APIs and database integration", "Push notifications", "Website and app data synchronization"] },
  { name: "Custom Software", price: "Custom quote", suitable: "Businesses requiring a complete digital system", timeline: "Defined after analysis", features: ["CRM and admin dashboards", "Booking and inventory systems", "Order and employee management", "Custom APIs and SaaS products", "User roles and business logic", "Security and reporting requirements"] },
];

export default function Packages() {
  return (
    <section className="packages section-pad" id="website-packages" aria-labelledby="packages-heading">
      {/* <div className="section-heading package-heading">
        <div><p className="section-label">WEBSITE & APP PACKAGES</p><h1 id="packages-heading">Clear pricing for<br /><em>your next digital step.</em></h1></div>
        <p>Starting prices for websites, e-commerce, mobile apps and custom systems. Final pricing is confirmed after understanding your requirements.</p>
      </div> */}
      {/* <div className="package-grid">
        {websitePackages.map((pkg) => (
          <article className={`package-card${pkg.featured ? " package-card--featured" : ""}`} id={pkg.name === "Custom Software" ? "custom-software" : pkg.name === "E-commerce Website" ? "ecommerce-package" : pkg.name === "Business Digital Package" ? "mobile-app-package" : undefined} key={pkg.name}>
            {pkg.featured && <div className="package-ribbon">MOST POPULAR <span>✳</span></div>}
            <div className="package-title-row"><h2>{pkg.name}</h2><span>{pkg.name.includes("App") || pkg.name.includes("Digital") ? "WEBSITE + APP" : "DIGITAL"}</span></div>
            <p className="package-desc"><strong>Suitable for:</strong> {pkg.suitable}</p>
            <p className="package-price">{pkg.price}<span> starting</span></p>
            <a className={`package-cta${pkg.featured ? " package-cta--featured" : ""}`} href="/contact">Discuss this package <span>↗</span></a>
            <div className="package-rule" />
            <p className="includes-label">Includes</p>
            <ul className="feature-list">{pkg.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
            <div className="package-time">Estimated timeline: {pkg.timeline}</div>
          </article>
        ))}
      </div> */}
      {/* <p className="package-note"><strong>Important:</strong> Domain, hosting, paid APIs, app store fees, advanced SEO and work outside the agreed scope are quoted separately.</p> */}
    </section>
  );
}