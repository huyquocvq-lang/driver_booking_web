export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Section */}
      <div className="border-b border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-red-pink rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold">
                  Vipi Go<sup className="text-xs">®</sup>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dịch vụ lái xe chuyên nghiệp, phục vụ 24/7. Đúng lịch, đúng giờ, đúng địa điểm.
              </p>
            </div>

            {/* Hotline */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hotline 24/7</h3>
              <div className="space-y-2">
                <a
                  href="tel:0975468363"
                  className="block text-primary-pink hover:text-white transition-colors font-semibold"
                >
                  0975.468.363
                </a>
                <a
                  href="tel:0926116286"
                  className="block text-primary-pink hover:text-white transition-colors font-semibold"
                >
                  0926.116.286
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-pink mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:vipigo.vn@gmail.com" className="hover:text-white transition-colors">
                    vipigo.vn@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-pink mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href="https://vipigo.vn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    vipigo.vn
                  </a>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Địa chỉ</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-pink mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="hover:text-white transition-colors">Lập Trí, Xã Kim Anh, Hà Nội</p>
                    <p className="hover:text-white transition-colors mt-1">Vĩnh Trung, Xã Ngọc Hồi, Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Vipi Go. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
