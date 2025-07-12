import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need a Custom Quote?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get started today and receive your personalized quote within 24 hours
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-orange-500 hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;