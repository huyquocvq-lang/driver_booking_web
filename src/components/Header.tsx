import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-red-pink rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-extrabold text-gray-900">
              Vipi <span className="text-primary-red">Go</span><sup className="text-xs text-primary-red">®</sup>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-red transition-colors"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-red transition-colors"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-primary-red transition-colors"
            >
              Tại sao chọn chúng tôi
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-red-pink text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Đặt xe ngay
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-primary-red transition-colors"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-primary-red transition-colors"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left text-gray-700 hover:text-primary-red transition-colors"
            >
              Tại sao chọn chúng tôi
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full bg-gradient-red-pink text-white px-6 py-2 rounded-full text-center"
            >
              Đặt xe ngay
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
