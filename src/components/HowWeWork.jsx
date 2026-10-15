const steps = [
  ["01", "Requirement discussion", "We understand your business, target customers and required features."],
  ["02", "Proposal & quotation", "You receive clear scope, pricing, milestones and estimated timeline."],
  ["03", "Advance payment", "Development starts after the agreed advance payment."],
  ["04", "Design & development", "The approved design becomes a functional website, app or system."],
  ["05", "Testing & review", "We test supported devices and complete the agreed client review."],
  ["06", "Launch & support", "The product goes live, followed by the selected support plan."],
];

export default function HowWeWork() {
  return (
    <section className="process section-pad" aria-labelledby="process-heading">
      <div className="section-heading process-heading">
        <div><p className="section-label">HOW WE WORK</p><h2 id="process-heading">A clear path<br />from here to live.</h2></div>
        <p>Good work is a team effort. You’ll know what’s happening, what’s next and where your project stands.</p>
      </div>
      <div className="process-grid process-grid--expanded">
        {steps.map(([number, title, description]) => (
          <article className="process-step" key={number}>
            <span className="process-number">{number}</span>
            <div className="process-line" />
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}