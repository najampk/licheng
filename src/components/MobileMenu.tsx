import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-6 md:hidden flex flex-col space-y-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-yellow-500">Menu</h2>
        <button onClick={onClose} className="text-gray-800">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          onClick={onClose}
          className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/products"
          onClick={onClose}
          className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
        >
          Products
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={onClose}
          className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
        >
          Contact Us
        </Link>
        <Link
          to="/quote"
          onClick={onClose}
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 text-sm rounded-full transition-colors"
        >
          Get Quote
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;