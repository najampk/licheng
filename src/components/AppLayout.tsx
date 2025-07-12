import React from 'react'; 
import Header from './Header';
import HeroSection from './HeroSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import SupportedIndustriesSection from './SupportedIndustriesSection';
import CapabilitiesSection from './CapabilitiesSection';
import ProductRangeSection from './ProductRangeSection';
import CategoryGrid from './CategoryGrid'; // ✅ import added
import EngineeringSection from './EngineeringSection';
import FactoryTourSection from './FactoryTourSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="why-choose-us">
        <WhyChooseUsSection />
      </section>
      <section id="supported-industries">
        <SupportedIndustriesSection />
      </section>
      <CapabilitiesSection />
      <section id="products">
        <ProductRangeSection />
      </section>

      {/* ✅ New Category Grid Section */}
      <section id="product-categories">
        <CategoryGrid />
      </section>

      <EngineeringSection />
      <FactoryTourSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export { AppLayout };
export default AppLayout;
