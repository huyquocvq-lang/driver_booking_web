# Vipi Go - Driver Booking Landing Page

Landing page cho dịch vụ đặt xe Vipi Go.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Hook Form
- Framer Motion
- Resend API (Email)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env.local` và điền thông tin:
```
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_EMAIL_TO=vipigo.vn@gmail.com
VITE_EMAIL_FROM=noreply@vipigo.vn
```

3. Run dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deploy lên Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Thêm environment variables trong Vercel dashboard:
   - `VITE_RESEND_API_KEY`
   - `VITE_EMAIL_TO`
   - `VITE_EMAIL_FROM`
4. Deploy!

## Features

- ✅ Landing page với smooth scroll navigation
- ✅ Popup booking form sau 30 giây (lưu 2 giờ trong localStorage)
- ✅ Form validation với React Hook Form
- ✅ Gửi email qua Resend API
- ✅ Responsive design
- ✅ Màu sắc theo brand (đỏ/hồng gradient)

## Lấy Resend API Key

1. Đăng ký tại https://resend.com
2. Tạo API key trong dashboard
3. Verify domain (hoặc dùng email test)
4. Copy API key vào `.env.local`
