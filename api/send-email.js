import { Resend } from 'resend';

// This looks for the "RESEND_API_KEY" you just saved in Vercel Settings
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Check if it's a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, date, service, email } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Booking Assistant <onboarding@resend.dev>',
      // This is your verified email where the booking info will go
      to: ['sanaeelghazi007@gmail.com'], 
      subject: `New Barber Booking: ${service} for ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #D4AF37;">New Booking Received!</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Date/Time:</strong> ${date}</p>
          <p><strong>Client Email:</strong> ${email}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Sent from your Good Vibes Barber Shop Website</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error("Resend Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
