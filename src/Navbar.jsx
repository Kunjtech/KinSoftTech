"use client";

import { useState } from "react";

function MenuIcon({ name }) {
  const path = name === "close"
    ? <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>
    : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>;

  return (
    <svg
      aria-hidden="true"
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      {path}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="KinSoftTech home" onClick={closeMenu}>
        <span className="brand-mark">K<span>.</span></span>
        <span className="brand-name">KinSoftTech<span>Digital solutions</span></span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon name={menuOpen ? "close" : "menu"} />
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? "main-nav main-nav--open" : "main-nav"}
        aria-label="Main navigation"
      >
        <a href="/" onClick={closeMenu}>Home</a>
        <div className={`services-menu${servicesOpen ? " services-menu--open" : ""}`}>
          <button
            className="services-menu-trigger"
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="services-menu-list"
            onClick={() => setServicesOpen((open) => !open)}
          >
            Services <span className="services-chevron" aria-hidden="true" />
          </button>
          <div className="services-menu-panel" id="services-menu-list">
            <a href="/services/website-development" onClick={closeMenu}><strong>Website Development</strong><small>Business, corporate and landing pages</small></a>
            <a href="/services/ecommerce-development" onClick={closeMenu}><strong>E-commerce</strong><small>Stores, payments and order management</small></a>
            <a href="/services/mobile-app-development" onClick={closeMenu}><strong>Mobile App Development</strong><small>Android, iOS and cross-platform apps</small></a>
            <a href="/services/custom-software" onClick={closeMenu}><strong>Custom Software</strong><small>Dashboards, CRM and internal tools</small></a>
            <a href="/services/api-integrations" onClick={closeMenu}><strong>API & Integrations</strong><small>WhatsApp, Maps, payments and APIs</small></a>
            <a href="/services/maintenance" onClick={closeMenu}><strong>Maintenance</strong><small>Ongoing updates, support and monitoring</small></a>
          </div>
        </div>
        <a href="/portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="/packages" onClick={closeMenu}>Packages</a>
        <a href="/about" onClick={closeMenu}>About</a>
        <a className="nav-cta" href="/contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}