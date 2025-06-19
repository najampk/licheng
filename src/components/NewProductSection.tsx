import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NewProductSection: React.FC = () => {
  const productCategories = [
    {
      name: 'Construction Machinery Parts',
      description: 'Core components for excavators, bulldozers and crawler cranes including engine parts, hydraulic systems, and wear-resistant components.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253515138_39efb73d.jpg'
    },
    {
      name: 'Heavy-Duty Packaging',
      description: 'High-strength carton packaging, cushioning pallets and specialized solutions for precision machinery transportation.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253519598_00775d9e.jpg'
    },
    {
      name: 'Electromechanical Equipment',
      description: 'Industrial motors, automatic control equipment, instruments and electronic components for manufacturing and energy development.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253548737_a6251d3f.jpg'
    },
    {
      name: 'Plumbing & Piping Systems',
      description: 'High-strength metal pipes, valves and connectors for construction, petrochemical and municipal engineering applications.',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253523688_4382f5fe.jpg'
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive supply of construction machinery parts and industrial equipment 
            with global supplier network and customized services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-yellow-200 hover:border-yellow-400">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-gray-900">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Concept</h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Adhering to the business philosophy of "customer first and innovation-driven", we continuously 
            expand our product matrix, deeply integrate digital management tools, and are committed to becoming 
            a benchmark enterprise in the integrated supply chain of construction machinery and industrial equipment. 
            We look forward to working hand in hand with global partners to jointly build an industrial ecosystem 
            and empower customer value upgrades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewProductSection;