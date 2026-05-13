import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Phone } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Teachers from './components/Teachers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = "영어 말하기 대회 전문 화상영어 이토크";
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Teachers />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:010-3938-6768"
          className="bg-lime-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce transition-transform active:scale-95"
          aria-label="전화 상담하기"
        >
          <Phone size={24} fill="white" />
        </a>
      </div>
    </div>
  );
}
