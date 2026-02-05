import BookingForm from './BookingForm';

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đặt xe ngay
            </h2>
            <p className="text-gray-600">
              Điền thông tin bên dưới để đặt xe. Chúng tôi sẽ liên hệ với bạn sớm nhất.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
