const data = await resend.emails.send({
      from: 'Booking Assistant <onboarding@resend.dev>', // Keep this exactly!
      to: ['pasposip@gmail.com'], // Ensure your email is back in the list
      subject: `New Booking: ${service} with ${name}`,
      html: `
        <h1>New Booking!</h1>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    });
