import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const productCategories = [
    'Excavator Parts', 'Bulldozer Components', 'Crane Parts', 'Engine Components',
    'Hydraulic Systems', 'Wear-resistant Parts', 'Consumable Parts', 'Transmission Systems'
  ];

  const services = [
    { name: 'Custom Manufacturing', path: '/custom-manufacturing' },
    { name: 'Technical Support', path: '/technical-support' },
    { name: 'Installation Services', path: '/installation-services' },
    { name: 'After-sales Support', path: '/after-sales-support' },
    { name: 'Import/Export Agency', path: '/import-export-agency' },
    { name: 'International Logistics', path: '/international-logistics' }
  ];

  const industries = [
    'Construction Machinery', 'Heavy Equipment', 'Industrial Manufacturing', 'Mining Equipment',
    'Petrochemical', 'Municipal Engineering', 'Energy Development', 'Intelligent Manufacturing'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-md"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Licheng Rongwang Trading
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Licheng Rongwang Trading Co., Ltd. - Your trusted partner in industrial equipment supply.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-yellow-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-yellow-400 transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/quote" className="text-white/70 hover:text-yellow-400 transition-colors text-sm">Get a Quote</Link></li>
              <li><Link to="/consultation" className="text-white/70 hover:text-yellow-400 transition-colors text-sm">Consultation</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-yellow-400 transition-colors text-sm">Products</Link></li>
              <li><Link to="/excavator-parts-map" className="text-white/70 hover:text-yellow-400 transition-colors text-sm">Excavator Parts Map</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-white/70 hover:text-yellow-400 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-yellow-400">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-white/70 text-sm">guishengchen76@gmail.com</span>
              </li>
              <div>
                <h5 className="text-white/70 mb-2">Cell Phone / WeChat / Whatsapp</h5>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/70 text-sm">+86 18750503103</span>
                </li>
              </div>

              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                <span className="text-white/70 text-sm">
                  Room 202, No. 2, Xiakuqiao Lane<br />
                  Licheng District, Quanzhou City<br />
                  Fujian Province, China
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white/50 text-xs mb-2">Social Credit Code:</p>
              <p className="text-white/70 text-sm font-mono">91350502MAE0N6DK00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Licheng Rongwang Trading Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;