import client from "../../client";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      await client.create({
        _type: "contactSubmission",
        name,
        email,
        message,
      });

      const emailData = {
        from: "livwelllondon@gmail.com",
        to: "livwelllondon@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `You received a new message from ${name} (${email}):\n\n${message}`,
        html: `<p>You received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
      };

      mg.messages().send(emailData, function (error, body) {
        if (error) {
          console.log("Mailgun error:", error);
          return res.status(500).json({ error: "Failed to send email" });
        }
        console.log("Mailgun response:", body);
      });

      res.status(200).json({ message: "Form submission saved to Sanity and email sent" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
