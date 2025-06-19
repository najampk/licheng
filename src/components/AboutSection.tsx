import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Products Delivered' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">About Our Company</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Manufacturing Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a registered trading company in China, we specialize in manufacturing, supplying, and trading high-quality industrial equipment and machinery parts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;