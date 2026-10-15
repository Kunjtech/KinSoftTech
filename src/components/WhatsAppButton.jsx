import { whatsappHref } from "../lib/whatsapp.js";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with KinSoftTech on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.7 1.2 1.6 2.1 2.8 2.8l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-2.6-.7-5-3.1-5.7-5.7-.2-.5-.1-1.1.1-1.5Z" />
      </svg>
    </a>
  );
}