import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Building2, Shield, Clock, Globe, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/WhyChooseSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTABanner from "@/components/CTABanner";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - Licheng Rongwang Trading Co., Ltd.</title>
        <meta name="description" content="Trusted Industrial Partner in China - Reliable, Efficient, Global" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted Industrial Partner in China
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Reliable. Efficient. Global.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              Explore Our Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to bridge global industrial needs, Licheng Rongwang Trading Co., Ltd. 
              has grown from a local supplier to a trusted international partner. Our journey began with a 
              simple mission: to provide high-quality industrial solutions that meet the evolving demands 
              of modern manufacturing and construction industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Building2 className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Our Mission</h3>
              <p className="text-gray-600">To deliver exceptional industrial solutions that drive our clients' success through innovation, quality, and reliability.</p>
            </div>
            
            <div className="text-center">
              <Users className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the leading global partner for industrial supply chain solutions, connecting businesses worldwide.</p>
            </div>
            
            <div className="text-center">
              <Award className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Our Values</h3>
              <p className="text-gray-600">Integrity, excellence, and customer-centricity guide every decision we make and every relationship we build.</p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <GlobalNetworkSection />
      <CertificationsSection />
      <CTABanner />
      
      <Footer />
    </div>
  );
};

export default About;