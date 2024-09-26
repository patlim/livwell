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
      res.status(200).json({ message: "Form submission saved to Sanity" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}