import { Resend } from 'resend';

// This line pulls the key safely from your Vercel settings
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, service, date } = req.body;
    
    await resend.emails.send({
      from: 'Barber Shop <onboarding@resend.dev>',
      to: 'pasposip@gmail.com',
      subject: 'NEW BOOKING RECEIVED',
      html: `<p>Name: ${name}</p><p>Service: ${service}</p><p>Date: ${date}</p>`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
