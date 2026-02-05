interface BookingData {
  name: string;
  phone: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation: string;
}

export async function sendBookingEmail(data: BookingData): Promise<boolean> {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY;
  const emailTo = import.meta.env.VITE_EMAIL_TO || 'vipigo.vn@gmail.com';
  const emailFrom = import.meta.env.VITE_EMAIL_FROM || 'noreply@vipigo.vn';

  if (!apiKey) {
    console.error('Resend API key not configured');
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: emailFrom,
        to: emailTo,
        subject: `Đặt xe mới - ${data.name}`,
        html: `
          <h2>Thông tin đặt xe mới</h2>
          <p><strong>Tên khách hàng:</strong> ${data.name}</p>
          <p><strong>Số điện thoại:</strong> ${data.phone}</p>
          <p><strong>Thời gian đón:</strong> ${data.pickupTime}</p>
          <p><strong>Điểm đón:</strong> ${data.pickupLocation}</p>
          <p><strong>Điểm trả:</strong> ${data.dropoffLocation}</p>
          <hr>
          <p><small>Email được gửi tự động từ website Vipi Go</small></p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
