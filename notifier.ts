// notifier.ts
export const sendNotification = async (bookingData: any) => {
  try {
    // We call a Vercel-friendly endpoint (we'll set this up next)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return response.ok;
  } catch (error) {
    console.error("Notification failed", error);
    return false;
  }
};
