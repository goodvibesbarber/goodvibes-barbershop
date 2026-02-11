import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { name, date, service, email } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Booking Assistant <onboarding@resend.dev>',
      // This MUST match your Resend account email for now
      to: ['sanaeelghazi007@gmail.com'], 
      subject: `New Booking: ${service} with ${name}`,
      html: `
        <h1>New Booking!</h1>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Client Email:</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
