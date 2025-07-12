import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Package, Construction, Settings, Cog } from 'lucide-react';

const ProductRangeSection: React.FC = () => {
  const productCategories = [
    {
      id: 'excavator-parts',
      title: 'Excavator Parts',
      icon: Construction,
      description: 'Complete range of excavator components including hydraulic systems, tracks, and attachments.',
      items: ['Hydraulic Pumps', 'Track Chains', 'Bucket Teeth', 'Cylinders', 'Swing Motors']
    },
    {
      id: 'bulldozer-parts',
      title: 'Bulldozer Parts',
      icon: Wrench,
      description: 'Heavy-duty bulldozer components designed for maximum durability and performance.',
      items: ['Blade Assemblies', 'Drive Sprockets', 'Idler Wheels', 'Track Pads', 'Engine Parts']
    },
    {
      id: 'undercarriage-systems',
      title: 'Undercarriage Systems',
      icon: Settings,
      description: 'Comprehensive undercarriage solutions for all heavy machinery types.',
      items: ['Track Rollers', 'Carrier Rollers', 'Sprockets', 'Idlers', 'Track Links']
    },
    {
      id: 'custom-components',
      title: 'Custom Components',
      icon: Cog,
      description: 'Specialized manufacturing of custom parts according to your specifications.',
      items: ['OEM Replacements', 'Custom Machining', 'Prototype Development', 'Bulk Orders']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Heavy Machinery Spare Parts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive range of high-quality spare parts for excavators, bulldozers, and heavy construction equipment.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <Package className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
 
      </div>
    </section>
  );
};

export default ProductRangeSection;