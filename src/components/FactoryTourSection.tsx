import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FactoryTourSection: React.FC = () => {
  const galleryItems = [
    {
      type: 'image',
      title: 'Production Floor',
      description: 'State-of-the-art manufacturing facility',
      src: '/images/gallery/gallery-1.png',
    },
    {
      type: 'image',
      title: 'Quality Control Lab',
      description: 'Advanced testing and inspection equipment',
      src: '/images/gallery/gallery-2.png',
    },
    {
      type: 'video',
      title: 'Manufacturing Process',
      description: 'See our precision manufacturing in action',
      src: '/images/gallery/hero-video-licheng.mp4',
    },
    {
      type: 'image',
      title: 'Warehouse Facility',
      description: 'Large-scale storage and logistics center',
      src: '/images/gallery/gallery-3.png',
    },
    {
      type: 'image',
      title: 'R&D Department',
      description: 'Innovation and product development center',
      src: '/images/gallery/gallery-4.png',
    },
    {
      type: 'video',
      title: 'Company Overview',
      description: 'Complete tour of our facilities',
      src: '/images/gallery/dune-banner-video.mp4',
    },
  ];

  // Handle video play/pause on hover
  const handleVideoHover = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.play();
  };

  const handleVideoLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800">Virtual Tour</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Manufacturing Facility
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Take a virtual tour of our world-class manufacturing facility and see how we maintain the highest quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={handleVideoHover}
                      onMouseLeave={handleVideoLeave}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 inline-flex items-center gap-2 transition"
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
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            Schedule Factory Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FactoryTourSection;