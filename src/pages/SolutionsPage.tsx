import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Solution {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const solutions: Solution[] = [
  {
    id: 'processing-machinery',
    label: 'Processing Machinery',
    title: 'Processing Machinery',
    description:
      'High-performance pumping units, transmission systems, and industrial tools engineered for precision and durability in demanding production environments.',
    features: ['Precision Control', 'Heavy Duty', 'Long Service Life'],
    image: '/images/heavy-machinery-part-2.jpg',
  },
  {
    id: 'electromechanical-equipment',
    label: 'Electromechanical',
    title: 'Electromechanical Equipment',
    description:
      'Advanced industrial motors, automatic control systems, and electronic components for manufacturing and energy sectors.',
    features: ['Energy Efficient', 'Variable Speed', 'Remote Monitoring'],
    image: '/images/electromechanical-equipment.jpg',
  },
  {
    id: 'plumbing-piping',
    label: 'Plumbing & Piping',
    title: 'Plumbing & Piping Systems',
    description:
      'High-strength pipes, valves, and connectors designed for construction, petrochemical, and municipal engineering applications.',
    features: ['Corrosion Resistant', 'High Pressure', 'Multiple Materials'],
    image: '/images/plumbing-piping-systems.jpg',
  },
  {
    id: 'heavy-packaging',
    label: 'Packaging',
    title: 'Heavy Packaging Solutions',
    description:
      'Robust packaging systems, including custom cartons and cushioning pallets, to ensure safe transport of precision machinery and sensitive equipment.',
    features: ['Impact Resistant', 'Shock Absorption', 'Custom Sizes'],
    image: '/images/heavy-duty-packing.jpg',
  },
  {
    id: 'construction-parts',
    label: 'Machinery Parts',
    title: 'Construction Machinery Parts',
    description:
      'Core components for excavators, bulldozers, and crawler cranes, including engine parts, hydraulic systems, and wear-resistant components.',
    features: ['High Durability', 'Precision Fit', 'OEM Standards'],
    image: '/images/heavy-machinery-part.jpg',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Our Solutions & Product Portfolio | Licheng Rongwang Trading Co.</title>
        <meta
          name="description"
          content="Licheng Rongwang Trading Co., Ltd. offers a comprehensive range of industrial products and tailored solutions across multiple sectors, from heavy machinery parts to packaging and electromechanical equipment."
        />
      </Helmet>
      <Header />
      <main className="bg-white text-gray-900 pt-[120px]">
        <section className="pb-8 text-center px-4 lg:px-24">
          <h1 className="text-4xl font-bold mb-4">Our Solutions & Product Portfolio</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Licheng Rongwang Trading Co., Ltd. delivers end-to-end industrial solutions, supplying high-quality machinery parts, electromechanical equipment,
            piping systems, packaging solutions, and processing machinery to meet the diverse needs of global industries.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-24 pb-16">
          {solutions.map((sol) => (
            <Card key={sol.id} className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img src={sol.image} alt={sol.title} className="object-cover w-full h-full" />
              </div>
              <CardHeader className="p-4">
                <Badge variant="outline" className="mb-2">
                  {sol.label}
                </Badge>
                <CardTitle className="text-xl font-semibold mb-1">{sol.title}</CardTitle>
                <p className="text-sm text-gray-600">{sol.description}</p>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <ul className="list-disc list-inside space-y-1">
                  {sol.features.map((feat) => (
                    <li key={feat} className="text-gray-700">
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white font-semibold hover:from-yellow-500 hover:to-orange-600 transition"
                  >
                    <a href={`/category/${sol.id}`}>Explore {sol.title}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
