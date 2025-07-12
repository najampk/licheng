import React from 'react';
import {
  Building2,
  Pickaxe,
  Fuel,
  MapPin,
  Cog,
  Zap,
  Package,
  Tractor
} from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Construction' },
  { icon: Pickaxe, name: 'Mining & Quarry' },
  { icon: Fuel, name: 'Oil & Gas' },
  { icon: MapPin, name: 'Municipal Engineering' },
  { icon: Cog, name: 'Manufacturing' },
  { icon: Zap, name: 'Energy & Power' },
  { icon: Package, name: 'Logistics' },
  { icon: Tractor, name: 'Agriculture' }
];

const SupportedIndustriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Heading & List */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-4">
              <div className="h-px bg-yellow-500 w-12"></div>
              <span className="text-yellow-500 text-sm font-semibold uppercase tracking-widest">
                Industries We Serve
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-900">
              Licheng Rongwang powers <br />
              <span className="text-yellow-500">global industries</span>
            </h2>

            {/* Compact Industry List */}
            <ul className="grid grid-cols-2 gap-4">
              {industries.map(({ icon: Icon, name }, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/licheng-2.webp"
                alt="Excavator working on site"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 text-yellow-500 px-4 py-1 rounded-md text-xs font-semibold shadow">
              LICHENG TRADING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedIndustriesSection;