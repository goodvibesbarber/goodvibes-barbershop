// api/send-email.js
import { Resend } from 'resend';

// This initializes the "Post Office" using your secret key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, date, service, email } = req.body;

    const data = await resend.emails.send({
      from: 'Booking Assistant <onboarding@resend.dev>',
      to: ['YOUR_OWN_GMAIL@gmail.com'], // <--- CHANGE THIS TO YOUR EMAIL
      subject: `New Booking: ${service} with ${name}`,
      html: `
        <h1>New Booking Received!</h1>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Client Email:</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
