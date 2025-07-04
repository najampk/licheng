import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import NewAboutSection from './NewAboutSection';
import CapabilitiesSection from './CapabilitiesSection';
import ProductCategoriesTabs from './ProductCategoriesTabs';
import EngineeringSection from './EngineeringSection';
import FactoryTourSection from './FactoryTourSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import CTAButton from './CTAButton';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <NewAboutSection />
        <CTAButton text="Learn More About Us" />
      </section>
      <CapabilitiesSection />
      <CTAButton text="Explore Our Capabilities" />
      <section id="products">
        <ProductCategoriesTabs />
        <CTAButton text="View All Products" />
      </section>
      <EngineeringSection />
      <CTAButton text="Explore Engineering Solutions" />
      <FactoryTourSection />
      <CTAButton text="Schedule Factory Visit" />
      <FAQSection />
      <CTAButton text="Contact Support" />
      <CTASection />
      <Footer />
    </main>
  );
};

export default AppLayout;