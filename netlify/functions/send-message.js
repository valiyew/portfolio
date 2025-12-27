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

  // ENV values ishlaydi local va deployda
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
}
