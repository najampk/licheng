import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductionProcessTab from './ProductionProcessTab';
import FactoryEquipmentTab from './FactoryEquipmentTab';
import InspectionEquipmentTab from './InspectionEquipmentTab';
import { Wrench, Cog, Search } from 'lucide-react';

const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive manufacturing capabilities, from production processes to quality control systems.
          </p>
        </div>

        <Tabs defaultValue="production" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-sm">
            <TabsTrigger 
              value="production" 
              className="flex items-center space-x-2 py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black hover:bg-yellow-50"
            >
              <Wrench className="w-4 h-4 text-yellow-500" />
              <span className="hidden sm:inline">Production Process</span>
              <span className="sm:hidden">Production</span>
            </TabsTrigger>
            <TabsTrigger 
              value="equipment" 
              className="flex items-center space-x-2 py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black hover:bg-yellow-50"
            >
              <Cog className="w-4 h-4 text-yellow-500" />
              <span className="hidden sm:inline">Factory Equipment</span>
              <span className="sm:hidden">Equipment</span>
            </TabsTrigger>
            <TabsTrigger 
              value="inspection" 
              className="flex items-center space-x-2 py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black hover:bg-yellow-50"
            >
              <Search className="w-4 h-4 text-yellow-500" />
              <span className="hidden sm:inline">Inspection Equipment</span>
              <span className="sm:hidden">Inspection</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="production" className="mt-8">
            <ProductionProcessTab />
          </TabsContent>

          <TabsContent value="equipment" className="mt-8">
            <FactoryEquipmentTab />
          </TabsContent>

          <TabsContent value="inspection" className="mt-8">
            <InspectionEquipmentTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CapabilitiesSection;