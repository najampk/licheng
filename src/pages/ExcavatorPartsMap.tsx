// src/pages/ExcavatorPartsMap.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  {
    title: 'Extended Arm',
    slug: 'extended-arm',
    description:
      'Boost your reach and performance with our heavy-duty extended arms for excavators.',
  },
  {
    title: 'Swing Stand',
    slug: 'swing-stand',
    description:
      'Durable swing stands engineered for stability and smooth rotational performance.',
  },
  {
    title: 'Hydraulic Seal Kits',
    slug: 'hydraulic-seal-kits',
    description:
      'Reliable hydraulic seal kits to prevent leaks and maintain pressure integrity.',
  },
  {
    title: 'Hydraulic Pumps',
    slug: 'hydraulic-pumps',
    description:
      'High-performance hydraulic pumps for consistent fluid power in extreme conditions.',
  },
  {
    title: 'Hydraulic Cylinders',
    slug: 'hydraulic-cylinders',
    description:
      'Precision-built hydraulic cylinders for powerful lifting and pushing applications.',
  },
  {
    title: 'Hydraulic Crushers',
    slug: 'hydraulic-crushers',
    description:
      'Powerful crushing tools designed for demolition and heavy-duty applications.',
  },
  {
    title: 'Cutting Edges',
    slug: 'cutting-edges',
    description:
      'Abrasion-resistant cutting edges ideal for construction and earthmoving machinery.',
  },
  {
    title: 'Undercarriage Parts',
    slug: 'undercarriage-parts',
    description:
      'Comprehensive undercarriage components to keep your tracked machines moving.',
  },
  {
    title: 'Rubber Track',
    slug: 'rubber-track',
    description:
      'High-traction, wear-resistant rubber tracks for compact and full-size machinery.',
  },
  {
    title: 'Rubber Pig Pillow',
    slug: 'rubber-pig-pillow',
    description:
      'Shock-absorbing rubber pig pillows for vibration control in tracked equipment.',
  },
  {
    title: 'Bucket Accessories',
    slug: 'bucket-accessories',
    description:
      'Versatile bucket accessories to enhance digging, grading, and material handling.',
  },
  {
    title: 'H Connector',
    slug: 'h-connector',
    description:
      'Heavy-duty H connectors for secure mechanical linkages in demanding environments.',
  },
  {
    title: 'Bushing',
    slug: 'bushing',
    description:
      'High-precision bushings for reducing friction and extending component life.',
  },
];

const parts = [
  { id: 1, name: 'Extended Arm', x: 29, y: 26, slug: 'extended-arm' },
  { id: 2, name: 'Swing Stand', x: 45, y: 36, slug: 'swing-stand' },
  { id: 3, name: 'Hydraulic Seal Kits', x: 26, y: 22, slug: 'hydraulic-seal-kits' },
  { id: 4, name: 'Hydraulic Pumps', x: 75, y: 42, slug: 'hydraulic-pumps' },
  { id: 5, name: 'Hydraulic Cylinders', x: 32, y: 30, slug: 'hydraulic-cylinders' },
  { id: 6, name: 'Hydraulic Crushers', x: 22, y: 64, slug: 'hydraulic-crushers' },
  { id: 7, name: 'Cutting Edges', x: 28, y: 60, slug: 'cutting-edges' },
  { id: 8, name: 'Undercarriage Parts', x: 54, y: 72, slug: 'undercarriage-parts' },
  { id: 9, name: 'Bucket Accessories', x: 21, y: 60, slug: 'bucket-accessories' },
  { id: 10, name: 'Rubber Track', x: 45, y: 80, slug: 'rubber-track' },
];

const ExcavatorPartsMap: React.FC = () => {
  const navigate = useNavigate();

  const lookupCategory = (slug: string) =>
    categories.find((c) => c.slug === slug)!;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
    <main className="bg-white text-gray-900 pt-[120px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interactive Excavator Parts Map
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Hover or tap a hotspot to view details. Click “View Products” to go to the category.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 flex-grow">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-3">
          <h2 className="text-xl font-semibold mb-2">All Categories</h2>
          {categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => navigate(`/categories/${cat.slug}`)}
              className="cursor-pointer p-3 rounded hover:bg-orange-100 transition border"
            >
              <div className="font-medium text-orange-600">{cat.title}</div>
              <div className="text-sm text-gray-600">{cat.description}</div>
            </div>
          ))}
        </aside>

        {/* Diagram + Hotspots */}
        <div className="lg:col-span-3 relative">
          <div
            className="relative bg-gray-100 rounded-lg overflow-hidden border shadow"
            style={{ height: '500px' }}
          >
            <img
              src="/images/licheng-trading-img.webp"
              alt="Excavator Diagram"
              className="w-full h-full object-contain"
            />

            {parts.map((part) => {
              const info = lookupCategory(part.slug);

              return (
                <Tippy
                  key={part.id}
                  content={
                    <div className="max-w-xs p-2">
                      <h4 className="font-semibold text-sm text-orange-600">
                        {info.title}
                      </h4>
                      <p className="text-xs text-white mb-1">
                        {info.description}
                      </p>
                      <button
                        onClick={() => navigate(`/category/${info.slug}`)}
                        className="text-xs font-medium text-blue-600 underline"
                      >
                        View Products →
                      </button>
                    </div>
                  }
                  interactive={true}
                  animation="shift-away"
                  duration={[200, 150]}
                  placement="top"
                  trigger="mouseenter focus click"
                  followCursor={true}
                  arrow={true}
                >
                  <div
                    className="absolute w-4 h-4 bg-orange-500 border-2 border-white rounded-full shadow cursor-pointer transform hover:scale-110 transition animate-pulse"
                    style={{ top: `${part.y}%`, left: `${part.x}%` }}
                  />
                </Tippy>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need Assistance Finding the Right Part?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Explore the full catalog or get personalized support from our experts.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate('/products')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded"
          >
            Browse All Parts
          </button>
          <button
            onClick={() => navigate('/consultation')}
            className="text-orange-700 hover:underline"
          >
            Consultation
          </button>
          <button
            onClick={() => navigate('/quote')}
            className="text-orange-700 hover:underline"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </main>  
      <Footer />
    </div>
    
  );
};

export default ExcavatorPartsMap;