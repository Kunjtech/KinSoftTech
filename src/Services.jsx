export default function Services({ services, SectionLabel, Icon }) {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading">
        <div><SectionLabel>WHAT WE CAN MAKE TOGETHER</SectionLabel><h2>Digital, with<br />a human touch.</h2></div>
        <p>Not sure where to start? That’s what the first conversation is for. Here are a few ways we can help.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top"><span>{service.number} / 04</span><span className="service-icon"><Icon name={service.icon} size={23} /></span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="service-footnote"><span>Not seeing exactly what you need?</span><a href="#contact">Tell us about it <Icon name="arrow" size={16} /></a></div>
    </section>
  );
}