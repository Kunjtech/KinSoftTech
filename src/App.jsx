"use client";

import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";

const services = [
  {
    number: "01",
    title: "Websites that work",
    description:
      "Distinctive, responsive websites built to make the right first impression—and turn visitors into customers.",
    tags: ["Business sites", "Landing pages", "Redesigns"],
    icon: "window",
  },
  {
    number: "02",
    title: "E-commerce, made easy",
    description:
      "A smoother way to sell online, from polished product pages to checkout and order management.",
    tags: ["Online stores", "Payments", "Product catalogues"],
    icon: "bag",
  },
  {
    number: "03",
    title: "Apps for what’s next",
    description:
      "Useful mobile experiences that bring your services closer to customers on Android and iOS.",
    tags: ["Mobile apps", "Bookings", "Customer apps"],
    icon: "phone",
  },
  {
    number: "04",
    title: "The tools behind it all",
    description:
      "Custom dashboards, APIs and business systems designed around the way your team really works.",
    tags: ["Custom software", "Dashboards", "Integrations"],
    icon: "spark",
  },
];

const websitePackages = [
  {
    name: "Starter",
    price: "₹7,999",
    description: "A thoughtful first step for a small business or personal brand.",
    timeline: "3–5 working days",
    features: [
      "Up to 3 pages",
      "Responsive design",
      "Contact form & WhatsApp link",
      "Maps and social links",
      "Basic SEO setup",
      "Deployment assistance",
    ],
  },
  {
    name: "Business",
    price: "₹19,999",
    description: "A complete online home for a growing business.",
    timeline: "7–10 working days",
    featured: true,
    features: [
      "Up to 7 custom pages",
      "Professional UI/UX",
      "Forms, WhatsApp & Maps",
      "Basic SEO & analytics",
      "Image and speed optimization",
      "Deployment & launch support",
    ],
  },
  {
    name: "Premium",
    price: "₹34,999+",
    description: "Made-to-measure design and functionality for bigger ideas.",
    timeline: "2–4 weeks",
    features: [
      "Custom UI/UX and animations",
      "Advanced forms & integrations",
      "Bespoke features",
      "SEO-friendly structure",
      "Performance optimization",
      "Deployment & post-launch support",
    ],
  },
];

const extras = [
  { title: "E-commerce store", price: "From ₹39,999+", icon: "bag" },
  { title: "Business mobile app", price: "From ₹49,999+", icon: "phone" },
  { title: "Advanced mobile app", price: "From ₹79,999+", icon: "spark" },
  { title: "Website + mobile app", price: "From ₹89,999+", icon: "layers" },
  { title: "Custom software", price: "Custom quote", icon: "window" },
];

const process = [
  ["01", "Let’s talk", "We get to know your business, audience and must-have features."],
  ["02", "Plan & design", "You get a clear scope, quote and a design direction to approve."],
  ["03", "Build & refine", "We develop, test across devices and make the agreed revisions."],
  ["04", "Launch & support", "Your project goes live, with help available after launch."],
];

const maintenance = [
  { title: "Basic", price: "₹2,999", unit: "/ month", details: "Minor updates, bug fixes, monitoring and technical support." },
  { title: "Business", price: "₹4,999", unit: "/ month", details: "Everything in Basic, plus regular updates and priority support." },
  { title: "Premium", price: "₹7,999", unit: "/ month", details: "Everything in Business, plus optimization and security monitoring." },
];

function Icon({ name, size = 22, className = "" }) {
  const paths = {
    window: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    bag: <><path d="M5 8h14l1 12H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    phone: <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10 18.5h4" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function SectionLabel({ children, light = false }) {
  return <p className={`section-label${light ? " section-label--light" : ""}`}>{children}</p>;
}

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  function chooseService(service) {
    setSelectedService(service);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("sending");
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn’t send your enquiry.");
      setFormStatus("success");
      form.reset();
      setSelectedService("");
    } catch (error) {
      setFormStatus("error");
      setFormError(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        Thoughtful digital work for businesses ready to grow
        <a href="#services">Explore what we do <Icon name="arrow" size={15} /></a>
      </div>

      <Navbar />

      <main>
        <Hero Icon={Icon} />

        <section className="intro-strip">
          <p>Big-agency thinking.<br /><span>Small-studio care.</span></p>
          <div className="intro-divider" />
          <p>From your first idea to the moment you go live, we make the digital stuff feel a little less complicated—and a lot more you.</p>
          <a href="#process" aria-label="Learn about our approach"><Icon name="arrow" size={20} /></a>
        </section>

        <Services services={services} SectionLabel={SectionLabel} Icon={Icon} />

        <section className="statement">
          <div className="statement-shape statement-shape--one" />
          <div className="statement-shape statement-shape--two" />
          <SectionLabel light>A GOOD PLACE TO BEGIN</SectionLabel>
          <h2>Good work starts<br />with a <em>good question.</em></h2>
          <p>What would make your business better online? We’ll help you figure out the right next step.</p>
          <a href="#contact" className="button button--cream">Let’s figure it out <Icon name="arrow" size={18} /></a>
          <span className="statement-aside">NO PRESSURE. JUST A CONVERSATION.</span>
        </section>

        <Portfolio websitePackages={websitePackages} setSelectedService={setSelectedService} SectionLabel={SectionLabel} Icon={Icon} />

        <section className="more-solutions">
          <div className="more-solutions-inner">
            <div className="more-copy"><SectionLabel>WHEN YOU’RE READY FOR MORE</SectionLabel><h2>Big ideas?<br /><em>We’re listening.</em></h2><p>From your first online store to a full product ecosystem, let’s build the right thing—not just more things.</p><a href="#contact">Talk through your idea <Icon name="arrow" size={16} /></a></div>
            <div className="solution-list">
              {extras.map((item, index) => (
                <button className="solution-row" type="button" key={item.title} onClick={() => chooseService(item.title)}>
                  <span className="solution-number">0{index + 1}</span><span className="solution-icon"><Icon name={item.icon} size={20} /></span><span className="solution-title">{item.title}<small>{item.price}</small></span><span className="solution-arrow"><Icon name="arrow" size={17} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-heading process-heading">
            <div><SectionLabel>NO MYSTERY, JUST MOMENTUM</SectionLabel><h2>A clear path<br />from here to live.</h2></div>
            <p>Good work is a team effort. You’ll know what’s happening, what’s next and where your project stands.</p>
          </div>
          <div className="process-grid">{process.map(([number, title, description]) => <article className="process-step" key={number}><span className="process-number">{number}</span><div className="process-line" /><h3>{title}</h3><p>{description}</p></article>)}</div>
          <div className="terms-note"><span className="terms-icon">i</span><p><strong>Clear from day one.</strong> We agree on scope and milestones up front. Website projects usually begin with 50% upfront and 50% before final handover; larger projects can be split into milestones. Included revisions are scoped before we start.</p></div>
        </section>

        <section className="maintenance" id="maintenance">
          <div className="maintenance-inner">
            <div className="maintenance-intro"><SectionLabel>GOOD THINGS NEED A LITTLE CARE</SectionLabel><h2>We’re here<br />after <em>hello.</em></h2><p>Need an extra pair of hands after launch? Choose a support plan for the little fixes and regular upkeep.</p><a href="#contact">Ask us about ongoing support <Icon name="arrow" size={16} /></a></div>
            <div className="maintenance-cards">{maintenance.map((plan, index) => <article className={`maintenance-card${index === 1 ? " maintenance-card--featured" : ""}`} key={plan.title}><div className="maintenance-top"><span>{plan.title}</span>{index === 1 && <b>POPULAR</b>}</div><p className="maintenance-price">{plan.price}<span>{plan.unit}</span></p><p>{plan.details}</p><button type="button" onClick={() => chooseService(`${plan.title} Maintenance`)}>Ask about this plan <Icon name="arrow" size={15} /></button></article>)}</div>
          </div>
          <p className="maintenance-footnote">Hosting, domains, paid third-party services and new features are quoted separately.</p>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-copy">
            <SectionLabel>YOUR IDEA HAS A PLACE HERE</SectionLabel>
            <h2>Tell us what<br />you’re <em>imagining.</em></h2>
            <p>A few details are all we need to start. We’ll get back to you to talk through the right fit, timing and next steps.</p>
            <div className="contact-email"><span>OR DROP US A NOTE</span><a href="mailto:hello@kinsofttech.com">hello@kinsofttech.com <Icon name="arrow" size={16} /></a></div>
            <div className="contact-stamp"><span>LET’S MAKE<br />GOOD THINGS<br /><strong>HAPPEN.</strong></span><b>✳</b></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>01 — START A CONVERSATION</span><span>IT TAKES ABOUT A MINUTE</span></div>
            <label>Your name<input name="name" type="text" placeholder="What should we call you?" autoComplete="name" minLength="2" maxLength="80" required /></label>
            <div className="form-row">
              <label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength="254" required /></label>
              <label>Phone (optional)<input name="phone" type="tel" placeholder="+91" autoComplete="tel" maxLength="25" /></label>
            </div>
            <label>What can we help with?
              <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
                <option value="" disabled>Choose a service</option>
                <option>Starter Website</option>
                <option>Business Website</option>
                <option>Premium Website</option>
                <option>E-commerce store</option>
                <option>Business mobile app</option>
                <option>Advanced mobile app</option>
                <option>Website + mobile app</option>
                <option>Custom software</option>
                <option>Basic Maintenance</option>
                <option>Business Maintenance</option>
                <option>Premium Maintenance</option>
                <option>Website / app maintenance</option>
                <option>Something else</option>
              </select>
            </label>
            <label>A little about your project<textarea name="message" placeholder="What are you hoping to make? Any details help." rows="4" maxLength="2000" required /></label>
            <div className="form-bottom"><p>By sending this, you’re happy for us to reply about your enquiry.</p><button className="button button--dark" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending..." : "Send your enquiry"} <Icon name="arrow" size={17} /></button></div>
            {formStatus === "success" && <p className="form-feedback form-feedback--success" role="status">Thanks for reaching out! Your enquiry is on its way. We’ll be in touch soon.</p>}
            {formStatus === "error" && <p className="form-feedback form-feedback--error" role="alert">{formError}</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand brand--footer" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KinSoftTech<span>Digital solutions</span></span></a>
          <p>Modern websites & digital solutions<br />for businesses ready to grow.</p>
          <a className="footer-top" href="#home">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} KinSoftTech</span><span>Made with care, for what’s next. <b>✳</b></span><a href="mailto:hello@kinsofttech.com">SAY HELLO ↗</a></div>
      </footer>
    </>
  );
}

export default App;
