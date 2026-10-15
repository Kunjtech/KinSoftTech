export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand brand--footer" href="/" aria-label="KinSoftTech home">
          <span className="brand-logo" aria-hidden="true">
            <img src="/logo.png" alt="KinSoftTech" suppressHydrationWarning />
          </span>
          <span className="brand-name">
            KinSoftTech<span>Digital solutions</span>
          </span>
        </a>
        <p>
          Modern websites & digital solutions
          <br />
          for businesses ready to grow.
        </p>
        <a className="footer-top" href="#top">BACK TO TOP ↑</a>
      </div>
      <div className="footer-links">
        <div>
          <p className="footer-links-title">Services</p>
          <a href="/services/website-development">Website Development</a>
          <a href="/services/ecommerce-development">E-commerce</a>
          <a href="/services/mobile-app-development">Mobile Apps</a>
          <a href="/services/custom-software">Custom Software</a>
          <a href="/services#cms-support">CMS Support</a>
        </div>
        <div>
          <p className="footer-links-title">Packages</p>
          <a href="/packages#maintenance">Maintenance Plans</a>
          <a href="/packages#social-media-marketing">Social Media Marketing</a>
        </div>
        <div>
          <p className="footer-links-title">Portfolio</p>
          <a href="/portfolio#dental-clinic">Dental Clinic</a>
          <a href="/portfolio#restaurant">Restaurant</a>
          <a href="/portfolio#salon">Salon</a>
          <a href="/portfolio#boutique">Boutique</a>
        </div>
        <div className="footer-contact">
          <p className="footer-links-title">Contact US</p>
          <a href="tel:+918630273126">+91 86302 73126</a>
          <a href="mailto:contact@kinsoftech.com">contact@kinsoftech.com</a>
          <a
            className="footer-address"
            href="https://maps.google.com/?q=168+Bankey+Bihari+Puram,+Vinayak+Nagar,+Sikandra,+Agra+282007"
            target="_blank"
            rel="noreferrer"
          >
            168 Bankey Bihari Puram, Vinayak Nagar, Sikandra, Agra 282007
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KinSoftTech</span>
        <span>
          <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
        </span>
        <a href="/contact">SAY HELLO ↗</a>
      </div>
    </footer>
  );
}