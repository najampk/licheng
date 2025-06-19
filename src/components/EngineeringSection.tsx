import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Cog, Shield, Award } from 'lucide-react';

const EngineeringSection: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-yellow-600" />,
      title: 'Custom Engineering',
      description: 'Tailored solutions for your specific machinery requirements',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253522749_c7976ce1.jpg'
    },
    {
      icon: <Cog className="w-8 h-8 text-yellow-600" />,
      title: 'Precision Manufacturing',
      description: 'Advanced manufacturing processes ensuring perfect fit and function',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253531356_7ebdb21c.jpg'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for reliable performance',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253541775_578a1f0b.jpg'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'Certified Excellence',
      description: 'ISO certified processes and internationally recognized standards',
      image: 'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253543900_60e8df19.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our engineering expertise ensures every part meets the highest standards of quality and performance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-yellow-200 overflow-hidden">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;