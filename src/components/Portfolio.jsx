export const sampleWork = [
	{ id: "dental-clinic", category: "Healthcare", title: "BrightSmile Dental Clinic", description: "A calm, trust-building clinic website with services, doctor profiles, appointment enquiry and location details.", tags: ["Responsive website", "Appointment flow", "Maps"] },
	{ id: "restaurant", category: "Food & hospitality", title: "The Local Table", description: "A warm restaurant experience focused on menu discovery, reservations, gallery and directions from mobile.", tags: ["Restaurant website", "Menu", "Reservations"] },
	{ id: "salon", category: "Beauty & wellness", title: "Luma Salon Studio", description: "A polished salon website that makes services, packages, stylist profiles and booking enquiries easy to explore.", tags: ["Service catalogue", "Booking enquiry", "Gallery"] },
	{ id: "boutique", category: "Retail & fashion", title: "Mysa Boutique", description: "A visual boutique storefront concept with collection highlights, product discovery and WhatsApp enquiry support.", tags: ["Product showcase", "Mobile-first", "WhatsApp"] },
];

export default function Portfolio() {
	return (
		<section className="portfolio-work section-pad" aria-labelledby="portfolio-heading">
				<div className="section-heading">
					<div><p className="section-label">SAMPLE WORK</p><h1 id="portfolio-heading">Digital experiences<br /><em>made for real businesses.</em></h1></div>
					<p>Explore sample website directions for the types of businesses we work with. Each project can be tailored to your brand, audience and goals.</p>
				</div>
				<div className="sample-work-grid">
					{sampleWork.map((project) => (
						<article className="sample-work-card" id={project.id} key={project.id}>
							<div className={`sample-preview sample-preview--${project.id}`}><span>KinSoftTech / {project.category}</span><strong>{project.title}</strong><a className="sample-preview-link" href={`/portfolio/${project.id}`}>View concept <span aria-hidden="true">↗</span></a></div>
							<div className="sample-work-content"><p className="section-label">{project.category}</p><h2>{project.title}</h2><p>{project.description}</p><div className="sample-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
						</article>
					))}
				</div>
			</section>
	);
}