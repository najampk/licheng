import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-yellow-600' : 'text-yellow-400'
              }`}>
                Rongwang Trading
              </h1>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => window.open('mailto:guishengchen76@gmail.com')}
                className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Contact Us
              </button>
              <a
              href="https://qzrw.en.alibaba.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 text-sm rounded-full transition-colors"
            >
              Alibaba Store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>

              <Button 
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 text-sm rounded-full transition-colors"
                onClick={() => window.open('mailto:guishengchen76@gmail.com')}
              >
                Get Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;