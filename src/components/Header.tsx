import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  solidBackground?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ solidBackground = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const throttledScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div
          className={`rounded-full px-6 py-2 transition-all duration-300 shadow-md border ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-md border-gray-200'
              : 'bg-white/50 backdrop-blur-xl border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1
                className={`text-2xl lg:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent transition-colors duration-300 ${
                  isScrolled ? 'from-yellow-500 to-yellow-700' : 'from-yellow-300 to-yellow-500'
                }`}
              >
                Rongwang Trading
              </h1>

              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="font-medium text-gray-800 hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="font-medium text-gray-800 hover:text-yellow-500 transition-colors"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="font-medium text-gray-800 hover:text-yellow-500 transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="font-medium text-gray-800 hover:text-yellow-500 transition-colors"
              >
                Contact Us
              </Link>

              <Link
                to="/quote"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 text-sm rounded-full transition-colors"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-gray-800"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;