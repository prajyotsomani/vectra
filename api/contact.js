const MAX_FIELD_LENGTH = 5000;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanField(value, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function inquiryHtml(inquiry) {
  const fields = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Phone / WhatsApp", inquiry.phone || "Not provided"],
    ["Service Interest", inquiry.service || "Not selected"],
    ["Message", inquiry.message],
  ];

  return `
    <h2>New website enquiry</h2>
    <table style="border-collapse:collapse;max-width:640px;width:100%">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><th align="left" style="padding:8px;border:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>`;
}

export async function sendContactInquiry(body, environment = process.env) {
  const name = cleanField(body?.name, 200);
  const email = cleanField(body?.email, 320).toLowerCase();
  const message = cleanField(body?.message);
  const inquiry = {
    name,
    email,
    message,
    phone: cleanField(body?.phone, 100),
    service: cleanField(body?.service, 200),
  };

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, body: { error: "Please provide a name, valid email address, and message." } };
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL } = environment;
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
    console.error("Resend environment variables are missing.");
    return { status: 500, body: { error: "Email delivery is not configured." } };
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [RESEND_TO_EMAIL],
        reply_to: inquiry.email,
        subject: `Website enquiry from ${inquiry.name}`,
        html: inquiryHtml(inquiry),
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected the email:", await resendResponse.text());
      return { status: 502, body: { error: "Email service rejected the message." } };
    }

    return { status: 200, body: { ok: true } };
  } catch (error) {
    console.error("Resend request failed:", error);
    return { status: 502, body: { error: "Email service is unavailable." } };
  }
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const result = await sendContactInquiry(request.body);
  return response.status(result.status).json(result.body);
}