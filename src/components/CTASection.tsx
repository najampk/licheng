import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 to-yellow-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers worldwide. Get premium construction machinery parts and industrial equipment with competitive pricing and reliable service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg transition-colors rounded-full inline-flex items-center gap-2"
            onClick={() => window.open('mailto:guishengchen76@gmail.com')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Request Quote
          </Button>

           <a
            href="https://qzrw.en.alibaba.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 text-sm rounded-full transition-colors gap-2"
          >
            Alibaba Store
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>

          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-800">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">Professional Service</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              <span className="font-medium">Global Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;