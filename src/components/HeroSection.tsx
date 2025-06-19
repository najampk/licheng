'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
const HeroSection: React.FC = () => {
  const scrollToSection = () => {
  const section = document.getElementById('about');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://usc1.contabostorage.com/6b36f72405a04f72b55b0c44ffbf2eb5:oyunclub/apps/s/hero-video-licheng.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center text-white px-2 pt-8">
          {/* Tag Badge */}

          <Badge className="mb-4 bg-orange-100 text-orange-800">Excavator Parts & Industrial Supply</Badge>
          

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent leading-tight">
            Licheng Rongwang Trading Co., Ltd.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 px-2">
            OEM parts. Industrial equipment. Global logistics. Built on professionalism, integrity, and win-win partnerships.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-md transition inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Explore Our Products
          </Button>

            <Button
            variant="outline"
            size="lg"
            className="bg-black text-white hover:bg-white hover:text-black border border-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-md transition inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            Contact Our Team
          </Button>

          </div>

          {/* Scroll Down Arrow */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToSection}
              className="p-2 hover:scale-110 transition"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-6 h-6 text-yellow-300 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;