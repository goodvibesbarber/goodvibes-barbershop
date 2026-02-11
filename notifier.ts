// notifier.ts
export const sendNotification = async (bookingData: any) => {
  try {
    // This calls the "hidden" email engine we are about to fix
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
