import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Monitor, Zap, Drill } from 'lucide-react';

const FactoryEquipmentTab: React.FC = () => {
  const equipment = [
    {
      id: 1,
      title: 'CNC Lathe Machine',
      description: 'Precision shaping of rotating metal parts.',
      icon: Settings
    },
    {
      id: 2,
      title: 'CNC Control Panel',
      description: 'Digital interface for operating CNC machines.',
      icon: Monitor
    },
    {
      id: 3,
      title: 'Hydraulic Forging Press',
      description: 'Shapes heated metal using high pressure.',
      icon: Zap
    },
    {
      id: 4,
      title: 'Vertical Drilling/Boring Machine',
      description: 'Drills and bores internal surfaces for fitting and assembly.',
      icon: Drill
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Factory Equipment</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          State-of-the-art machinery for precision manufacturing and quality production.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipment.map((item) => {
          const IconComponent = item.icon;
          return (
            <Card key={item.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                      Industrial Grade
                    </span>
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

export default FactoryEquipmentTab;