import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  name: string;
  description: string;
  features: string[];
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeColor: string;
  products: Product[];
  bgColor: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  badgeText,
  badgeColor,
  products,
  bgColor
}) => {
  // Image mapping for different sections
  const getImageForSection = (sectionTitle: string, index: number) => {
    const imageMap: { [key: string]: string[] } = {
      'Heavy Machinery Parts': [
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253516180_3c81d719.jpg',
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253517290_4feacb77.jpg',
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253515138_39efb73d.jpg'
      ],
      'Heavy Packaging Solutions': [
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253519598_00775d9e.jpg',
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253520720_2a2396c4.jpg'
      ],
      'Plumbing & Fittings': [
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253523688_4382f5fe.jpg',
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253545455_00ce5342.jpg'
      ],
      'Electromechanical Products': [
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253548737_a6251d3f.jpg',
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253547409_22c4fde5.jpg'
      ],
      'Processing Machinery': [
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253546416_4acefc5e.jpg',
        'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253521770_8b5fa082.jpg'
      ]
    };
    
    const images = imageMap[title] || ['https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253512251_7619bf25.jpg'];
    return images[index % images.length];
  };

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className={`mb-4 ${badgeColor.includes('yellow') ? 'bg-yellow-100 text-yellow-800' : badgeColor}`}>
            {badgeText}
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-yellow-200 hover:border-yellow-400 overflow-hidden">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={getImageForSection(title, index)}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;