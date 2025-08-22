'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Wrench, Package, Droplets, Zap, Cog } from 'lucide-react'
import { Badge } from '@/components/ui/badge';

const HeroSection: React.FC = () => {
   const [bgImage, setBgImage] = useState<string>('')

    useEffect(() => {
    const images = [
      '/images/heavy-machinery-part-3.jpg',
      '/images/heavy-machinery-part-4.jpg',
      '/images/heavy-machinery-part-5.jpg',
      '/images/licheng-2.webp',
      '/images/licheng-trading-img.webp'
    ]
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  }, [])

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

      <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-section">

        {/* Hero Background with Randomized Image */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(255,165,0,0.1) 100%), url('${bgImage}')`,
            backgroundPosition: 'right center',
            filter: 'blur(1px)',
          }}
        ></div>



        {/* Content overlay with clear contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 overflow-hidden">
          <div className="max-w-4xl text-left text-white px-2 pt-8">
            {/* Tag Badge */}
            <Badge className="mb-4 bg-orange-500 text-white hover:bg-orange-400">Industrial Trading Solutions</Badge>
            
            {/* Heading - SEO Optimized */}
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent leading-tight">
            Licheng Rongwang <br />
            Trading Co., Ltd.
          </h1>

            {/* Subheading - AI-SEO Optimized */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 px-2 max-w-2xl">
              Leading manufacturer of heavy machinery parts, industrial equipment, and precision components. OEM quality parts with global logistics and win-win partnerships.
            </p>

            {/* Product Categories Icons */}
            <div className="flex flex-wrap gap-4 mb-10 max-w-2xl">
              <div className="flex items-center gap-2 bg-black/60 rounded-full px-4 py-2 border border-orange-500/30">
                <Wrench className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Heavy Machinery</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 rounded-full px-4 py-2 border border-orange-500/30">
                <Package className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Packaging Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 rounded-full px-4 py-2 border border-orange-500/30">
                <Droplets className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Plumbing & Fittings</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg transition inline-flex items-center gap-2"
                onClick={scrollToProducts}
              >
                <Package className="w-5 h-5" />
                Explore Product Categories
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-black/50 text-white hover:bg-orange-500 hover:text-white border border-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg transition inline-flex items-center gap-2"
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Wrench className="w-5 h-5" />
                Our Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection;
