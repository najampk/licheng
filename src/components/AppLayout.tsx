import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import NewAboutSection from './NewAboutSection';
import NewProductSection from './NewProductSection';
import EngineeringSection from './EngineeringSection';
import ProductSection from './ProductSection';
import FactoryTourSection from './FactoryTourSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import CTAButton from './CTAButton';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  // Product data for existing sections
  const heavyMachineryParts = [
    {
      name: 'Engine Components',
      description: 'Precision-engineered engine parts for excavators, bulldozers and crawler cranes',
      features: ['OEM Quality', 'Global Suppliers', 'Custom Services']
    },
    {
      name: 'Hydraulic Systems',
      description: 'High-performance hydraulic components for heavy machinery operations',
      features: ['High Pressure', 'Long Life', 'Reliable Performance']
    },
    {
      name: 'Wear-Resistant Parts',
      description: 'Durable consumable parts designed for extended equipment life',
      features: ['Extended Life', 'Cost Effective', 'Quality Tested']
    }
  ];

  const packagingProducts = [
    {
      name: 'Heavy-Duty Cartons',
      description: 'High-strength carton packaging for precision machinery transportation',
      features: ['Impact Resistant', 'International Standards', 'Custom Sizes']
    },
    {
      name: 'Cushioning Pallets',
      description: 'Specialized pallets and cushioning for heavy equipment logistics',
      features: ['Shock Absorption', 'Load Distribution', 'Reusable Design']
    }
  ];

  const plumbingProducts = [
    {
      name: 'Metal Pipes & Valves',
      description: 'High-strength metal pipes and valves for construction and petrochemical use',
      features: ['Corrosion Resistant', 'High Pressure', 'Multiple Materials']
    },
    {
      name: 'Industrial Connectors',
      description: 'Precision connectors for municipal engineering and industrial applications',
      features: ['Leak Proof', 'Easy Installation', 'Standard Compliance']
    }
  ];

  const electroProducts = [
    {
      name: 'Industrial Motors',
      description: 'High-performance motors for manufacturing and energy development',
      features: ['Energy Efficient', 'Variable Speed', 'Low Maintenance']
    },
    {
      name: 'Control Equipment',
      description: 'Advanced automatic control systems for intelligent manufacturing',
      features: ['Programmable', 'Remote Monitoring', 'User Friendly']
    }
  ];

  const processingMachinery = [
    {
      name: 'Pump Units',
      description: 'Industrial pump systems for diverse production applications',
      features: ['High Efficiency', 'Reliable Operation', 'Custom Solutions']
    },
    {
      name: 'Transmission Devices',
      description: 'Advanced transmission systems and industrial tools',
      features: ['Precision Control', 'Heavy Duty', 'Long Service Life']
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <NewAboutSection />
        <CTAButton text="Learn More About Us" />
      </div>
      <div id="products">
        <NewProductSection />
        <CTAButton text="View All Products" />
      </div>
      <EngineeringSection />
      <CTAButton text="Explore Engineering Solutions" />
      <ProductSection 
        title="Heavy Machinery Parts"
        subtitle="Core components for excavators, bulldozers and crawler cranes with global supplier network"
        badgeText="Machinery Parts"
        badgeColor="bg-yellow-100 text-yellow-800"
        products={heavyMachineryParts}
        bgColor="bg-white"
      />
      <CTAButton text="Get Machinery Parts Quote" />
      <ProductSection 
        title="Heavy Packaging Solutions"
        subtitle="High-strength packaging for precision machinery and international logistics"
        badgeText="Packaging"
        badgeColor="bg-yellow-100 text-yellow-800"
        products={packagingProducts}
        bgColor="bg-gray-50"
      />
      <CTAButton text="Request Packaging Solutions" />
      <ProductSection 
        title="Plumbing & Fittings"
        subtitle="High-strength pipes, valves and connectors for construction and petrochemical industries"
        badgeText="Plumbing"
        badgeColor="bg-blue-100 text-blue-800"
        products={plumbingProducts}
        bgColor="bg-white"
      />
      <CTAButton text="Get Plumbing Quote" />
      <ProductSection 
        title="Electromechanical Products"
        subtitle="Industrial motors and control equipment for manufacturing and energy development"
        badgeText="Electromechanical"
        badgeColor="bg-purple-100 text-purple-800"
        products={electroProducts}
        bgColor="bg-gray-50"
      />
      <CTAButton text="Explore Electromechanical" />
      <ProductSection 
        title="Processing Machinery"
        subtitle="Pump units, transmission devices and industrial tools for diverse production needs"
        badgeText="Processing"
        badgeColor="bg-green-100 text-green-800"
        products={processingMachinery}
        bgColor="bg-white"
      />
      <CTAButton text="View Processing Equipment" />
      <FactoryTourSection />
      <CTAButton text="Schedule Factory Visit" />
      <FAQSection />
      <CTAButton text="Contact Support" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AppLayout;