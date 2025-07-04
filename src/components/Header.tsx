import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ProductDropdown from './ProductDropdown';

export const Header: React.FC = () => {
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
              <ProductDropdown isScrolled={isScrolled} />
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