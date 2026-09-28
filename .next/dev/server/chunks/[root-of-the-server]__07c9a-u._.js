module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/inquiries/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const dataDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data");
const leadsFile = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dataDirectory, "inquiries.jsonl");
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
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from: sender,
            to: [
                recipient
            ],
            reply_to: inquiry.email,
            subject: `New website enquiry from ${inquiry.name}`,
            text: [
                `Name: ${inquiry.name}`,
                `Email: ${inquiry.email}`,
                `Phone: ${inquiry.phone || "Not provided"}`,
                `Service: ${inquiry.service}`,
                "",
                "Project message:",
                inquiry.message
            ].join("\n")
        })
    });
    if (!response.ok) {
        throw new Error(`Email provider returned ${response.status}`);
    }
}
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return Response.json({
            error: "Please send valid enquiry details."
        }, {
            status: 400
        });
    }
    const { name, email, phone = "", service, message } = body ?? {};
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const normalizedName = typeof name === "string" ? name.trim() : "";
    const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
    const normalizedService = typeof service === "string" ? service.trim() : "";
    const normalizedMessage = typeof message === "string" ? message.trim() : "";
    if (normalizedName.length < 2 || normalizedName.length > 80 || !/^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/.test(normalizedEmail) || normalizedEmail.length > 254 || normalizedPhone.length > 25 || normalizedService.length < 2 || normalizedService.length > 100 || normalizedMessage.length < 5 || normalizedMessage.length > 2000) {
        return Response.json({
            error: "Please check the details and try again."
        }, {
            status: 400
        });
    }
    const now = Date.now();
    const previousSubmission = recentSubmissions.get(normalizedEmail) ?? 0;
    if (now - previousSubmission < 30_000) {
        return Response.json({
            error: "Please wait a moment before sending another enquiry."
        }, {
            status: 429
        });
    }
    const inquiry = {
        id: crypto.randomUUID(),
        name: normalizedName,
        email: normalizedEmail,
        phone: normalizedPhone,
        service: normalizedService,
        message: normalizedMessage,
        createdAt: new Date(now).toISOString()
    };
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dataDirectory, {
            recursive: true
        });
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["appendFile"])(leadsFile, `${JSON.stringify(inquiry)}\n`, {
            encoding: "utf8",
            flag: "a"
        });
        await sendInquiryEmail(inquiry);
        recentSubmissions.set(normalizedEmail, now);
        for (const [address, timestamp] of recentSubmissions){
            if (now - timestamp > 60 * 60 * 1000) recentSubmissions.delete(address);
        }
        return Response.json({
            message: "Enquiry received."
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Request failed:", error);
        return Response.json({
            error: "We couldn’t save your enquiry just now. Please try again."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07c9a-u._.js.map