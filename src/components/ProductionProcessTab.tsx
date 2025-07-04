import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Cog, Flame, Wrench, Users, TestTube, Palette, Package, Truck } from 'lucide-react';

const ProductionProcessTab: React.FC = () => {
  const productionSteps = [
    {
      id: 1,
      title: 'Rough Piece',
      description: 'Raw material is cut and shaped roughly to form the base of the final product.',
      icon: Cog
    },
    {
      id: 2,
      title: 'Heat Treatment',
      description: 'Material is heated to high temperatures to improve hardness and durability.',
      icon: Flame
    },
    {
      id: 3,
      title: 'Process',
      description: 'Precision machining is performed for accurate shaping.',
      icon: Wrench
    },
    {
      id: 4,
      title: 'Assembly Line',
      description: 'Components are assembled into complete units by skilled workers.',
      icon: Users
    },
    {
      id: 5,
      title: 'Testing',
      description: 'Products are quality-checked using tools and instruments.',
      icon: TestTube
    },
    {
      id: 6,
      title: 'Spray Painting',
      description: 'A protective and aesthetic coating is applied.',
      icon: Palette
    },
    {
      id: 7,
      title: 'Packing',
      description: 'Products are securely packed for transport.',
      icon: Package
    },
    {
      id: 8,
      title: 'Loading',
      description: 'Final products are loaded onto trucks/containers for delivery.',
      icon: Truck
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Process</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our comprehensive 8-stage production process ensures quality and precision at every step.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productionSteps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={step.id} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                      {step.id}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < productionSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-yellow-600" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductionProcessTab;