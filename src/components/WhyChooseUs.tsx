const features = [
  {
    title: 'Đội ngũ tài xế chuyên nghiệp',
    description: 'Tài xế giàu kinh nghiệm, được đào tạo bài bản, đảm bảo an toàn tuyệt đối cho khách hàng.',
    image: '/images/doi_ngu_chuyen_nghiep.png',
    number: '01',
  },
  {
    title: 'Phục vụ 24/7',
    description: 'Sẵn sàng phục vụ mọi lúc, mọi nơi. Chỉ cần một cuộc gọi, chúng tôi sẽ có mặt ngay.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    number: '02',
  },
  {
    title: 'Đúng giờ, đúng địa điểm',
    description: 'Cam kết đúng giờ hẹn, đúng địa điểm. Không để khách hàng phải chờ đợi.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    number: '03',
  },
  {
    title: 'Giá cả hợp lý',
    description: 'Bảng giá minh bạch, cạnh tranh. Thanh toán linh hoạt, nhiều phương thức thanh toán.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
    number: '04',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tại sao lại chọn chúng tôi?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vipi Go tự hào là đơn vị cung cấp dịch vụ lái xe uy tín, chuyên nghiệp hàng đầu. Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng.
          </p>
        </div>

        {/* Images and Features - Same Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Images Section - 3 images only */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 - Large (top-left, row-span-2) */}
            <div className="row-span-2">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Image 2 - Small (top-right) */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={features[1].image}
                alt={features[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image 3 - Small (bottom-left) */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={features[2].image}
                alt={features[2].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Features Section - 4 features */}
          <div className="grid grid-cols-2 gap-8 lg:gap-6">
          {/* Card 01 */}
          <div className="relative">
            <div className="absolute top-0 left-0 z-10 bg-white rounded-bl-[5px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[5px] shadow-lg w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-pink">
                01
              </span>
            </div>
            <div className="pl-24 pt-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {features[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="relative">
            <div className="absolute top-0 left-0 z-10 bg-white rounded-bl-[5px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[5px] shadow-lg w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-pink">
                02
              </span>
            </div>
            <div className="pl-24 pt-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {features[1].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="relative">
            <div className="absolute top-0 left-0 z-10 bg-white rounded-bl-[5px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[5px] shadow-lg w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-pink">
                03
              </span>
            </div>
            <div className="pl-24 pt-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {features[2].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="relative">
            <div className="absolute top-0 left-0 z-10 bg-white rounded-bl-[5px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[5px] shadow-lg w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-pink">
                04
              </span>
            </div>
            <div className="pl-24 pt-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {features[3].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-red">1000+</div>
              <div className="text-gray-600">Khách hàng tin tưởng</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-red">24/7</div>
              <div className="text-gray-600">Phục vụ không ngừng</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-red">100%</div>
              <div className="text-gray-600">Đúng giờ hẹn</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-red">5★</div>
              <div className="text-gray-600">Đánh giá từ khách hàng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
