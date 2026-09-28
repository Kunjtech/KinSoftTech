# KinSoftTech

A responsive Next.js website for KinSoftTech, with an App Router API for project enquiries.

## Requirements

- Node.js 20 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

Next.js serves the website and API route from the same process. Set `PORT` to use a different port.

## Enquiries

Valid project enquiries are appended as JSON Lines to `data/inquiries.jsonl` by `src/app/api/inquiries/route.js`. The `data` directory is ignored by Git. This simple local storage is suitable for a starter deployment on a persistent disk; use a database or hosted form service if your hosting provider does not persist local files.

To receive enquiries by email, copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_EMAIL`, and a verified `CONTACT_FROM_EMAIL`. The API uses Resend directly and does not require an additional package. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to enable the prefilled WhatsApp chat link on the contact form.

The contact email and all starting prices are based on the supplied proposal. Replace the email address and confirm package details before publishing if those proposal details are placeholders or have changed.
