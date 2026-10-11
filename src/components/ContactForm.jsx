"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi KinSoftTech, I would like to discuss a project.")}`
    : "";

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const formValues = Object.fromEntries(new FormData(form).entries());
    const name = String(formValues.name || "").trim();
    const email = String(formValues.email || "").trim();
    const phone = String(formValues.phone || "").trim();
    const service = String(formValues.service || "").trim();
    const message = String(formValues.message || "").trim();

    if (!/^[\p{L}][\p{L}\s.'-]{1,79}$/u.test(name)) {
      setStatus("error");
      setErrorMessage("Please enter a valid name using letters only.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (phone && !/^[0-9+() .-]{7,25}$/.test(phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (service.length < 2 || service.length > 100) {
      setStatus("error");
      setErrorMessage("Please tell us which service you need.");
      return;
    }
    if (message.length < 5 || message.length > 2000) {
      setStatus("error");
      setErrorMessage("Please enter at least 5 characters about your project.");
      return;
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please check your details and try again.");
      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Please check your details and try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>START A CONVERSATION</span><span>IT TAKES ABOUT A MINUTE</span></div>
      <label>Your name<input name="name" type="text" placeholder="What should we call you?" autoComplete="name" minLength="2" maxLength="80" pattern="[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ .'-]{1,79}" title="Please enter a valid name." required /></label>
      <label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength="254" required /></label>
      <label>Phone (optional)<input name="phone" type="tel" placeholder="+91 9876543210" autoComplete="tel" maxLength="25" pattern="[0-9+() .-]{7,25}" title="Please enter a valid phone number." /></label>
      <label>What can we help with?<input name="service" type="text" placeholder="Website, app or digital tool" maxLength="100" minLength="2" required /></label>
      <label>A little about your project<textarea name="message" placeholder="What are you hoping to make?" rows="5" minLength="5" maxLength="2000" required /></label>
      <div className="form-bottom"><p>We’ll reply about your enquiry as soon as we can.</p><button className="button button--dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send enquiry"}</button></div>
      {whatsappLink && <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noreferrer">Prefer WhatsApp? Start a chat ↗</a>}
      {status === "success" && <p className="form-feedback form-feedback--success" role="status">Your enquiry has been sent successfully. We’ll be in touch soon.</p>}
      {status === "error" && <p className="form-feedback form-feedback--error" role="alert">{errorMessage || "Please check your details and try again."}</p>}
    </form>
  );
}