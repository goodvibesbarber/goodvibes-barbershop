import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, date, service, email } = req.body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: ['pasposip@gmail.com'], // <--- UPDATE THIS ONE LINE
      subject: `New Booking: ${service} with ${name}`,
      html: `
        <h1>New Booking!</h1>
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
