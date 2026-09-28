export function getSampleWork(slug, sampleWork) {
  return sampleWork.find((project) => project.id === slug);
}

const pagePlans = {
  "dental-clinic": ["Home", "Treatments", "Doctors", "Patient information", "Contact and appointment enquiry"],
  restaurant: ["Home", "Menu", "Our story", "Gallery", "Reservations and location"],
  salon: ["Home", "Services and packages", "Stylists", "Gallery", "Booking enquiry and contact"],
  boutique: ["Home", "Collections", "Product details", "About the brand", "WhatsApp enquiry and contact"],
};

export default function SampleWorkDetail({ project }) {
  return (
    <>
      <section className={`sample-detail-hero sample-preview--${project.id}`} aria-labelledby="sample-detail-heading">
        <div className="sample-detail-hero-inner">
          <p className="section-label">SAMPLE WEBSITE CONCEPT / {project.category}</p>
          <h1 id="sample-detail-heading">{project.title}</h1>
          <p>{project.description}</p>
          <a className="button button--dark" href="/contact">Build a similar website <span>↗</span></a>
        </div>
      </section>
      <section className="sample-detail-content section-pad">
        <div className="section-heading">
          <div><p className="section-label">SUGGESTED STRUCTURE</p><h2>Designed around<br /><em>the customer journey.</em></h2></div>
          <p>This is a visual direction for the business type, not a live client project. The final design, content and features can be tailored to your brand.</p>
        </div>
        <div className="sample-page-plan">
          {(pagePlans[project.id] || []).map((page, index) => <div key={page}><span>0{index + 1}</span><strong>{page}</strong><small>Responsive page section</small></div>)}
        </div>
        <div className="sample-detail-note"><p className="section-label">WHAT THIS CONCEPT SHOWS</p><p>Clear information hierarchy, mobile-first layouts, strong enquiry paths and a visual style matched to the business. We can extend this direction with booking, payments, e-commerce, APIs or other required functionality.</p></div>
      </section>
    </>
  );
}