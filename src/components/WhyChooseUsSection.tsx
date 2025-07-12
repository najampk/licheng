import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Award, Clock } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/excavator-img.jpg"
                alt="Heavy machinery in action at construction site"
                className="w-full h-58 object-cover"
              />
            </div>
            {/* Overlay branding */}
            <div className="absolute bottom-4 left-4 bg-white/90 text-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
              LICHENG RONGWANG
            </div>
          </div>

          {/* Right Side - Content Block */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-4">
              <div className="h-px bg-yellow-500 w-12"></div>
              <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
                Why Choose Licheng Rongwang
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Reliable Industrial Supply with{' '}
              <span className="text-yellow-500">Global Reach</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in 2024 in Quanzhou, China, Licheng Rongwang Trading has quickly become a trusted supplier in the construction and industrial machinery sector. We specialize in OEM parts and customized equipment solutions for global clients, ensuring quality, integrity, and professional support across every order.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium">Trusted Partner</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;