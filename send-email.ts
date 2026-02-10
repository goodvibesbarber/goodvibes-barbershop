// This is your "Kitchen" that cooks the email
export const sendBookingEmail = async (bookingDetails: any) => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'YOUR-EMAIL@GMAIL.COM', // <--- Put your email here!
      subject: 'New Booking Alert!',
      html: `<p>Someone booked! Details: ${JSON.stringify(bookingDetails)}</p>`,
    }),
  });
  
  return response.ok;
};
