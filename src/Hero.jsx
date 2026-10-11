export default function Hero({ Icon }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow"><span /> INDEPENDENT DIGITAL STUDIO <span /></div>
        <h1>Make your next<br />move <span>digital.</span></h1>
        <p className="hero-copy">
          Websites, apps and digital tools that make your business easier to find, love and grow.
        </p>
        <div className="hero-actions">
          <a className="button button--dark" href="/contact">
            Tell us what you’re building <Icon name="arrow" size={18} />
          </a>
          {/* <a className="text-link" href="/packages#website-packages">Explore packages <span>↗</span></a> */}
        </div>
        <div className="hero-proof">
          <div className="proof-avatars" aria-hidden="true"><span>I</span><span>D</span><span>+</span></div>
          <p><strong>Good ideas deserve great execution.</strong><br />Let’s make yours happen.</p>
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract illustration of a digital studio website">
        <div className="art-orbit art-orbit--one" />
        <div className="art-orbit art-orbit--two" />
        <div className="art-sun" />
        <div className="art-star art-star--one">✳</div>
        <div className="art-star art-star--two">✳</div>
        <div className="browser-card">
          <div className="browser-bar">
            <div className="browser-dots"><i /><i /><i /></div>
            <span>yournextbigthing.in</span>
            <span className="browser-menu">···</span>
          </div>
          <div className="browser-content">
            <div className="browser-logo">Y<span>.</span></div>
            <div className="browser-nav"><span>ABOUT</span><span>WORK</span><span>CONTACT</span><b>↗</b></div>
            <div className="browser-heading">A little<br />more <em>you.</em></div>
            <div className="browser-bottom"><span>DESIGNED TO MAKE<br />GOOD THINGS HAPPEN.</span><b>↗</b></div>
          </div>
        </div>
        <div className="art-note"><span className="note-icon">✦</span><span>Made for<br /><strong>what’s next</strong></span></div>
        <span className="art-caption">GOOD DESIGN. GREAT BUSINESS.</span>
      </div>
      <a href="#services" className="scroll-cue" aria-label="Scroll to services"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}