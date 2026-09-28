const serviceGroups = [
	{
		number: "01",
		slug: "website-development",
		title: "Website Development",
		description: "Modern, responsive websites designed around your business and customers.",
		items: ["Business websites", "Corporate websites", "Landing pages", "Portfolio websites", "Restaurant and hotel websites", "Real-estate and education websites", "Custom websites"],
	},
	{
		number: "02",
		slug: "ecommerce-development",
		title: "E-commerce Development",
		description: "Complete online stores that make products easy to discover, buy and manage.",
		items: ["Product catalogue", "Shopping cart and checkout", "Payment gateway integration", "Order management", "Customer accounts", "Product management"],
	},
	{
		number: "03",
		slug: "mobile-app-development",
		title: "Mobile App Development",
		description: "Customer-facing Android, iOS and cross-platform apps for growing businesses.",
		items: ["Business applications", "Customer applications", "Booking applications", "E-commerce apps", "Authentication", "Push notifications and APIs"],
	},
	{
		number: "04",
		slug: "api-integrations",
		title: "Additional Services",
		description: "The integrations and ongoing improvements that help your digital product perform.",
		items: ["Website redesign", "Website and app maintenance", "API integrations", "WhatsApp and Maps", "Performance optimization", "Basic SEO implementation"],
	},
];

export default function Services() {
	return (
		<section className="services section-pad" aria-labelledby="services-heading">
			<div className="section-heading">
				<div><p className="section-label">WEBSITE, APP & DIGITAL SOLUTIONS</p><h1 id="services-heading">Everything your<br /><em>business needs online.</em></h1></div>
				<p>From your first website to a complete digital system, we build practical products that help your business grow.</p>
			</div>
			<div className="service-grid">
				{serviceGroups.map((service) => (
					  <article className="service-card" id={service.title.toLowerCase().replaceAll(" ", "-")} key={service.number}>
						<div className="service-top"><span>{service.number} / 04</span></div>
						<h2><a href={`/services/${service.slug}`}>{service.title}</a></h2>
						<p>{service.description}</p>
						<ul className="service-detail-list">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
						<a className="service-card-link" href={`/services/${service.slug}`}>View full service details ↗</a>
					</article>
				))}
			</div>
		</section>
	);
}