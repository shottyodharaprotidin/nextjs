export default function handler(req, res) { const pwd = process.env.SITE_PASSWORD || "123456";

  let body;
  try {
    body = JSON.parse(req.body);
  } catch {
    return res.status(400).json({ error: "Invalid request" });
  }

  if (body.password !== pwd) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  // Set cookie
  res.setHeader("Set-Cookie", `site_unlocked=${pwd}; Path=/; Max-Age=86400; SameSite=Lax`);

  return res.status(200).json({ success: true });
}
