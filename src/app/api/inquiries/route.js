import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dataDirectory = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDirectory, "inquiries.jsonl");
const recentSubmissions = new Map();

async function sendInquiryEmail(inquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.CONTACT_EMAILS || process.env.CONTACT_EMAIL || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || recipients.length === 0 || !sender) {
    console.warn("Email delivery is not configured.");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: recipients,
      reply_to: inquiry.email,
      subject: `New website enquiry from ${inquiry.name}`,
      text: [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Phone: ${inquiry.phone || "Not provided"}`,
        `Service: ${inquiry.service}`,
        "",
        "Project message:",
        inquiry.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider returned ${response.status}`);
  }

  return true;
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please send valid enquiry details." }, { status: 400 });
  }

  const { name, email, phone = "", service, message } = body ?? {};
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  const normalizedName = typeof name === "string" ? name.trim() : "";
  const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
  const normalizedService = typeof service === "string" ? service.trim() : "";
  const normalizedMessage = typeof message === "string" ? message.trim() : "";

  if (
    normalizedName.length < 2 ||
    normalizedName.length > 80 ||
    !/^[\p{L}][\p{L}\s.'-]{1,79}$/u.test(normalizedName) ||
    !/^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/.test(normalizedEmail) ||
    normalizedEmail.length > 254 ||
    normalizedPhone.length > 25 ||
    (normalizedPhone.length > 0 && !/^[0-9+() .-]{7,25}$/.test(normalizedPhone)) ||
    normalizedService.length < 2 ||
    normalizedService.length > 100 ||
    normalizedMessage.length < 5 ||
    normalizedMessage.length > 2000
  ) {
    return Response.json({ error: "Please check the details and try again." }, { status: 400 });
  }

  const now = Date.now();
  const previousSubmission = recentSubmissions.get(normalizedEmail) ?? 0;
  if (now - previousSubmission < 30_000) {
    return Response.json({ error: "Please wait a moment before sending another enquiry." }, { status: 429 });
  }

  const inquiry = {
    id: crypto.randomUUID(),
    name: normalizedName,
    email: normalizedEmail,
    phone: normalizedPhone,
    service: normalizedService,
    message: normalizedMessage,
    createdAt: new Date(now).toISOString(),
  };

  const persistLocally = process.env.NODE_ENV !== "production";

  if (persistLocally) {
    try {
      await mkdir(dataDirectory, { recursive: true });
      await appendFile(leadsFile, `${JSON.stringify(inquiry)}\n`, { encoding: "utf8", flag: "a" });
      recentSubmissions.set(normalizedEmail, now);
    } catch (error) {
      console.error("Could not save enquiry:", error);
      return Response.json({ error: "We couldn’t save your enquiry just now. Please try again." }, { status: 500 });
    }
  }

  try {
    const emailSent = await sendInquiryEmail(inquiry);
    if (!emailSent) {
      return Response.json(
        {
          error: persistLocally
            ? "Your enquiry was saved locally, but email delivery is not configured yet."
            : "Email delivery is not configured yet. Please contact us directly.",
        },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error(
      persistLocally ? "Enquiry was saved, but email delivery failed:" : "Enquiry email delivery failed:",
      error,
    );
    return Response.json(
      {
        error: persistLocally
          ? "Your enquiry was saved locally, but we couldn’t email it. Please contact us directly."
          : "We couldn’t email your enquiry. Please contact us directly.",
      },
      { status: 502 },
    );
  }

  if (!persistLocally) recentSubmissions.set(normalizedEmail, now);
  for (const [address, timestamp] of recentSubmissions) {
    if (now - timestamp > 60 * 60 * 1000) recentSubmissions.delete(address);
  }

  return Response.json({ message: "Enquiry received." }, { status: 201 });
}
