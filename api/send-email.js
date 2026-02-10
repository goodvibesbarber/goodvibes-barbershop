import { Resend } from 'resend';

// This initializes the Resend "Post Office" using your secret key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // This part gathers the booking details (Name, Date, etc.) from your website form
  const { name, date, service, email } = req.body;

  try {
    // This is the actual command that sends the email
    await resend.emails.send({
      from: 'Booking Assistant <onboarding@resend.dev>',
      to: ['pasposip@gmail.com'], 
      subject: `New Booking: ${service} with ${name}`,
      html: `
        <h1>New Booking!</h1>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Client Email:</strong> ${email}</p>
      `,
    });

    // This sends a "Success" message back to your website so the popup closes
    return res.status(200).json({ success: true });
  } catch (error) {
    // If the email fails, this sends the error message to your Vercel logs
    return res.status(500).json({ error: error.message });
  }
}
