export default function JourneySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hành trình trở nên đơn giản
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Đặt xe và lập kế hoạch di chuyển dễ dàng trong tầm tay bạn—không căng thẳng, giá cả phải chăng, và những hành trình không lo lắng đang chờ đón bạn!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left Card */}
          <div className="bg-gray-50 rounded-[45px] p-8 h-[400px] flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-red-pink rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 capitalize mb-4">
              Chọn dịch vụ phù hợp
            </h3>
          </div>

          {/* Middle Card - Highlighted */}
          <div className="bg-gradient-red-pink rounded-[45px] p-8 h-[500px] flex flex-col justify-between relative overflow-hidden -mt-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white capitalize mb-4">
                Đặt xe ngay
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Chỉ cần một cuộc gọi, chúng tôi sẽ có mặt ngay để phục vụ bạn. Dịch vụ lái xe chuyên nghiệp, an toàn và đáng tin cậy.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all"
              >
                Tìm hiểu thêm
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-gray-50 rounded-[45px] p-8 h-[400px] flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-red-pink rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 capitalize mb-4">
              Tận hưởng hành trình
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
