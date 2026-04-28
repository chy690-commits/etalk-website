import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#' },
    { name: '이토크 소개', href: '#about' },
    { name: '커리큘럼', href: '#curriculum' },
    { name: '강사진', href: '#teachers' },
    { name: '수강료 안내', href: '#pricing' },
    { name: '무료 레벨테스트', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdp91KLm-Yl8f-tGMg1sAH9v4cvHz8oloiUBqhXb8HYpEHZ_Q/viewform?usp=header', isExternal: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-8 sm:gap-20 shrink-0">
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          {/* Phone Numbers next to Logo */}
          <div className="flex items-center gap-1.5 text-[12px] sm:text-base md:text-lg font-extrabold text-[#65a30d] translate-no" translate="no">
            <Phone size={14} className="stroke-[3px] hidden xs:block" />
            <div className="flex flex-col xs:flex-row xs:items-center gap-0 xs:gap-1.5 leading-tight xs:leading-none">
              <a href="tel:070-8701-6768" className="hover:opacity-80 transition-opacity">070-8701-6768</a>
              <span className="opacity-60 hidden xs:inline">/</span>
              <a href="tel:010-3938-6768" className="hover:opacity-80 transition-opacity">010-3938-6768</a>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="text-gray-700 hover:text-lime-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 px-6 space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="block text-lg text-gray-700 hover:text-lime-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-lime-700 font-extrabold translate-no" translate="no">
            <Phone size={20} className="stroke-[3px]" />
            <div className="flex items-center gap-1.5">
              <a href="tel:070-8701-6768">070-8701-6768</a>
              <span className="opacity-60">/</span>
              <a href="tel:010-3938-6768">010-3938-6768</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
