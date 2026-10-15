# KinSoftTech

A responsive Next.js website for KinSoftTech, with an App Router API for project enquiries.

## Requirements

- Node.js 20.9 or later
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

## Progressive Web App

The site is installable as a PWA on browsers that support installation. It provides a simple offline page when a navigation cannot reach the network. The service worker deliberately does not cache website pages, API requests, contact form submissions, or user data. Serve the deployed site over HTTPS; localhost is also supported for development.

## Enquiries

The contact form posts to `/api/inquiries` and delivers valid enquiries by email through [Resend](https://resend.com/). During local development, enquiries are also appended as JSON Lines to `data/inquiries.jsonl`. Production submissions are not written to the local filesystem because serverless storage is not durable.

### Enable enquiry emails

1. Create a Resend account and verify a sending domain you control.
2. Create a Resend API key.
3. Copy `.env.example` to `.env.local` for local development, then set:
   - `RESEND_API_KEY` to your Resend API key.
   - `CONTACT_EMAILS` to the inbox that should receive enquiries. Multiple recipients can be comma-separated.
   - `CONTACT_FROM_EMAIL` to a sender on your verified domain, for example `KinSoftTech Website <website@your-verified-domain.com>`.
4. Restart the development server after changing `.env.local`.
5. For production, set the same variables in your hosting provider's server-side environment settings and redeploy. Never use a `NEXT_PUBLIC_` prefix for the Resend API key.
6. Submit a test enquiry and check the recipient inbox and spam folder.

The sender address must belong to a domain verified in Resend; the recipient can be your normal business inbox. If email is not configured or delivery fails, the API reports that explicitly. In development, the enquiry remains saved locally; in production, use a database or hosted form service if you also need a durable submission archive.

The `data` directory is ignored by Git. Local file storage requires a persistent disk; serverless hosts may not retain it, so use a database or hosted form service for durable storage there.

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to enable the prefilled WhatsApp chat link on the contact form, and `NEXT_PUBLIC_GA_ID` to enable Google Analytics 4.

The contact email and all starting prices are based on the supplied proposal. Replace the email address and confirm package details before publishing if those proposal details are placeholders or have changed.
