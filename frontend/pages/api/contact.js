import client from "../../client";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

const sentFrom = new Sender("livwelllondon@gmail.com", "Robot Livwell");
const recipients = [new Recipient("livwelllondon@gmail.com", "Olivia")];

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

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject(`New Contact Form Submission from ${name}`)
        .setHtml(`<p>You received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`)
        .setText(`You received a new message from ${name} (${email}):\n\n${message}`);

      await mailerSend.email.send(emailParams);

      return res.status(200).json({ message: "Form submission saved to Sanity and email sent" });

    } catch (error) {
      console.error("Error during submission or email sending:", error);
      return res.status(500).json({ error: "Failed to save form submission or send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
