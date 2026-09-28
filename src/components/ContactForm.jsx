"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi KinSoftTech, I would like to discuss a project.")}`
    : "";

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>START A CONVERSATION</span><span>IT TAKES ABOUT A MINUTE</span></div>
      <label>Your name<input name="name" type="text" placeholder="What should we call you?" minLength="2" maxLength="80" required /></label>
      <label>Email address<input name="email" type="email" placeholder="you@example.com" maxLength="254" required /></label>
      <label>What can we help with?<input name="service" type="text" placeholder="Website, app or digital tool" maxLength="100" required /></label>
      <label>A little about your project<textarea name="message" placeholder="What are you hoping to make?" rows="5" maxLength="2000" required /></label>
      <div className="form-bottom"><p>We’ll reply about your enquiry as soon as we can.</p><button className="button button--dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send enquiry"}</button></div>
      {whatsappLink && <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noreferrer">Prefer WhatsApp? Start a chat ↗</a>}
      {status === "success" && <p className="form-feedback form-feedback--success" role="status">Thanks for reaching out. We’ll be in touch soon.</p>}
      {status === "error" && <p className="form-feedback form-feedback--error" role="alert">Please check your details and try again.</p>}
    </form>
  );
}