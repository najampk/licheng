import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Microscope, FlaskConical, Zap } from 'lucide-react';

const InspectionEquipmentTab: React.FC = () => {
  const equipment = [
    {
      id: 1,
      title: 'Rockwell Hardness Tester',
      description: 'Measures surface hardness by indentation depth.',
      icon: Gauge,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Metallographic Microscope',
      description: 'Inspects grain structure and internal defects.',
      icon: Microscope,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Chemical Composition Analyzer',
      description: 'Tests metal alloy composition.',
      icon: FlaskConical,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Universal Testing Machine (UTM)',
      description: 'Evaluates tensile strength and durability under stress.',
      icon: Zap,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Inspection Equipment</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Advanced quality control instruments ensuring precision and reliability in every product.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipment.map((item) => {
          const IconComponent = item.icon;
          return (
            <Card key={item.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-500 font-medium">Quality Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InspectionEquipmentTab;