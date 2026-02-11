import { Resend } from 'resend';

// This connects to your secret key in Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { name, date, service } = req.body;

  try {
    await resend.emails.send({
      from: 'Booking Assistant <onboarding@resend.dev>',
      to: ['pasposip@gmail.com'], 
      subject: `New Barber Booking: ${service}`,
      html: `
        <h1>New Booking Received!</h1>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
