import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, phone, budget, targetDate, description } = req.body;

        const data = await resend.emails.send({
            from: "onboarding@resend.dev", // change after domain verify
            to: "fahadddd.im@gmail.com",
            subject: `New Client Order - ${name}`,
            html: `
        <h2>New Client Order</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> $${budget}</p>
        <p><strong>Target Date:</strong> ${targetDate}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
        });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}