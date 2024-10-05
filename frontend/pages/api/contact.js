import client from "../../client";
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

      const msg = {
        to: 'livwelllondon@gmail.com',
        from: 'impatlim@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `You received a new message from ${name} (${email}):\n\n${message}`,
        html: `<p>You received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
      };

      await sgMail.send(msg);

      return res.status(200).json({ message: "Form submission saved to Sanity and email sent" });

    } catch (error) {
      console.error("Error during submission or email sending:", error);
      return res.status(500).json({ error: "Failed to save form submission or send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
