import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import JourneySection from './components/JourneySection';
import WhyChooseUs from './components/WhyChooseUs';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';
import { usePopupTimer } from './hooks/usePopupTimer';

function App() {
  const { showPopup, closePopup } = usePopupTimer();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <JourneySection />
      <WhyChooseUs />
      <BookingSection />
      <Footer />
      <BookingPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
}

export default App;
