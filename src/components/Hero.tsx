export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_banner.png"
          alt="Vipi Go Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center min-h-[600px]">
          {/* Content */}
          <div className="text-white space-y-6 max-w-3xl">
            <p className="text-lg md:text-xl uppercase tracking-wider text-white/90">
              Nâng tầm hành trình của bạn
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight capitalize">
              Trải nghiệm dịch vụ lái xe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-primary-red">
                chuyên nghiệp!
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#booking"
                className="bg-gradient-red-pink text-white px-8 py-4 rounded-full text-center font-semibold hover:opacity-90 transition-opacity text-lg"
              >
                Đặt xe ngay
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-center font-semibold hover:bg-white hover:text-primary-red transition-colors text-lg"
              >
                Xem dịch vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
