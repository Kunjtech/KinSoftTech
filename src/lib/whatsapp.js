const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918630273126";

export const whatsappNumber = configuredNumber.replace(/\D/g, "");

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi KinSoftTech, I would like to discuss a project.",
)}`;
