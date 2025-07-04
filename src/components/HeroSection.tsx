'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Wrench, Package, Droplets, Zap, Cog } from 'lucide-react'
import { Badge } from '@/components/ui/badge';

const HeroSection: React.FC = () => {
  const scrollToSection = () => {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      {/* Structured Data for Hero Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Industrial Manufacturing & Heavy Machinery Parts",
            "description": "Leading manufacturer of heavy machinery parts, industrial equipment, and precision components with advanced production processes.",
            "url": "https://yoursite.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "Licheng Rongwang Trading Co., Ltd.",
              "description": "OEM parts, Industrial equipment, Global logistics"
            }
          })
        }}
      />
      
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
        >
          <source
            src="https://usc1.contabostorage.com/6b36f72405a04f72b55b0c44ffbf2eb5:oyunclub/apps/s/hero-video-licheng.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center text-white px-2 pt-8">
            {/* Tag Badge */}
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">Industrial Trading Solutions</Badge>
            
            {/* Heading - SEO Optimized */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent leading-tight">
              Licheng Rongwang Trading Co., Ltd.
            </h1>

            {/* Subheading - AI-SEO Optimized */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 px-2">
              Leading manufacturer of heavy machinery parts, industrial equipment, and precision components. OEM quality parts with global logistics and win-win partnerships.
            </p>

            {/* Product Categories Icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
                <Wrench className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Heavy Machinery</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
                <Package className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Packaging Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
                <Droplets className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Plumbing & Fittings</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Electromechanical</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
                <Cog className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Processing Machinery</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-md transition inline-flex items-center gap-2"
                onClick={scrollToProducts}
              >
                <Package className="w-5 h-5" />
                Explore Product Categories
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-black/50 text-white hover:bg-yellow-500 hover:text-black border border-yellow-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-md transition inline-flex items-center gap-2"
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Wrench className="w-5 h-5" />
                Our Capabilities
              </Button>
            </div>

            {/* Scroll Down Arrow */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={scrollToSection}
                className="p-2 hover:scale-110 transition"
                aria-label="Scroll to next section"
              >
                <ChevronDown className="w-6 h-6 text-yellow-400 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection;