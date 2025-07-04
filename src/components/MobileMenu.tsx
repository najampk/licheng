import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductDropdown from './ProductDropdown';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-yellow-400">Menu</h2>
          <button onClick={onClose} className="p-2 text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left py-2 px-4 text-white hover:bg-gray-800 rounded"
          >
            Home
          </button>
          <ProductDropdown isScrolled={false} isMobile={true} />
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 px-4 text-white hover:bg-gray-800 rounded"
          >
            About
          </button>
          <button
            onClick={() => window.open('mailto:guishengchen76@gmail.com')}
            className="block w-full text-left py-2 px-4 text-white hover:bg-gray-800 rounded"
          >
            Contact Us
          </button>
          <a
            href="https://qzrw.en.alibaba.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left py-2 px-4 text-orange-400 hover:bg-gray-800 rounded font-medium"
          >
            Alibaba Store
          </a>
          <Button 
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full mt-4"
            onClick={() => window.open('mailto:guishengchen76@gmail.com')}
          >
            Get Quote
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;