import client from "../../client";
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
      return res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error during submission or email sending:", error);
      return res.status(500).json({ error: "Failed to save form submission" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
