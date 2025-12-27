export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { phone, message } = JSON.parse(event.body);

  if (!phone) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Phone required" }),
    };
  }

  const text = `
📩 New Contact Form
📞 Phone: ${phone}
💬 Message: ${message || "—"}
`;

  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text,
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
}
