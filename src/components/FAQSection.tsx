import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What types of machinery parts do you manufacture?',
      answer: 'We manufacture a wide range of heavy machinery parts including hydraulic components, engine parts, transmission systems, and custom fabricated parts for various industrial applications.'
    },
    {
      question: 'Do you provide international shipping?',
      answer: 'Yes, we provide worldwide shipping with reliable logistics partners. We handle all export documentation and ensure safe delivery to your location.'
    },
    {
      question: 'What quality certifications do you have?',
      answer: 'We are ISO 9001:2015 certified and follow strict quality control processes. All our products undergo rigorous testing before shipment.'
    },
    {
      question: 'Can you handle custom manufacturing orders?',
      answer: 'Absolutely! We specialize in custom manufacturing based on your specifications. Our engineering team can work with your drawings or develop solutions from scratch.'
    },
    {
      question: 'What is your typical lead time for orders?',
      answer: 'Lead times vary depending on the complexity and quantity. Standard items typically ship within 7-14 days, while custom orders may take 2-6 weeks.'
    },
    {
      question: 'Do you offer technical support and after-sales service?',
      answer: 'Yes, we provide comprehensive technical support and after-sales service. Our team is available 24/7 to assist with any technical questions or issues.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and manufacturing processes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;