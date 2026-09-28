import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dataDirectory = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDirectory, "inquiries.jsonl");
const recentSubmissions = new Map();

async function sendInquiryEmail(inquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
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
    !/^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/.test(normalizedEmail) ||
    normalizedEmail.length > 254 ||
    normalizedPhone.length > 25 ||
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

  try {
    await mkdir(dataDirectory, { recursive: true });
    await appendFile(leadsFile, `${JSON.stringify(inquiry)}\n`, { encoding: "utf8", flag: "a" });
    await sendInquiryEmail(inquiry);
    recentSubmissions.set(normalizedEmail, now);
    for (const [address, timestamp] of recentSubmissions) {
      if (now - timestamp > 60 * 60 * 1000) recentSubmissions.delete(address);
    }
    return Response.json({ message: "Enquiry received." }, { status: 201 });
  } catch (error) {
    console.error("Request failed:", error);
    return Response.json({ error: "We couldn’t save your enquiry just now. Please try again." }, { status: 500 });
  }
}