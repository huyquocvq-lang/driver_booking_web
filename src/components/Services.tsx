const services = [
  {
    title: 'Lái xe hộ cho người sử dụng bia rượu',
    description: 'Dịch vụ lái xe an toàn sau khi sử dụng bia rượu, đảm bảo an toàn cho bạn và gia đình.',
    location: 'Hà Nội, Việt Nam',
    image: '/images/lai_xe_ho_nguoi_say.png',
  },
  {
    title: 'Lái xe đi đăng kiểm hộ',
    description: 'Hỗ trợ đưa xe đi đăng kiểm, tiết kiệm thời gian và công sức của bạn.',
    location: 'Hà Nội, Việt Nam',
    image: '/images/lai_xe_di_dang_kiem.png',
  },
  {
    title: 'Lái xe trở đi công tác',
    description: 'Dịch vụ đưa đón đi công tác, đảm bảo đúng giờ và an toàn.',
    location: 'Hà Nội, Việt Nam',
    image: '/images/lai_xe_di_cong_tac.png',
  },
  {
    title: 'Thuê lái xe theo ngày/giờ',
    description: 'Thuê lái xe linh hoạt theo nhu cầu, phục vụ mọi lúc mọi nơi.',
    location: 'Hà Nội, Việt Nam',
    image: '/images/lai_xe_theo_gio.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dịch vụ phổ biến
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dịch vụ lái xe chuyên nghiệp, đáng tin cậy, phục vụ mọi nhu cầu di chuyển của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-red-pink text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">4.8</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <svg className="w-5 h-5 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{service.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-red mb-2">24/7</div>
              <div className="text-gray-600">Phục vụ khách hàng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-red mb-2">✓</div>
              <div className="text-gray-600">Đúng lịch, đúng giờ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-red mb-2">💰</div>
              <div className="text-gray-600">Giá cả phải chăng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
