import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, Package, Droplets, Zap, Cog, Star, Mail, Phone } from 'lucide-react';
import { sampleProduct } from '@/data/products';

const categories = [
  {
    id: 'excavator-attachments',
    name: 'Excavator Attachments',
    icon: Wrench,
    description: 'Attachments and components for excavators to enhance performance.',
    products: [
      { title: 'Extended Arm', ...sampleProduct },
      { title: 'Swing Stand', ...sampleProduct },
      { title: 'Hydraulic Crusher', ...sampleProduct },
      { title: 'Hydraulic Pump', ...sampleProduct },
      { title: 'Cylinder', ...sampleProduct },
    ],
    color: 'from-yellow-600 to-yellow-700'
  },
  {
    id: 'ground-engaging-tools',
    name: 'Ground Engaging Tools (GET)',
    icon: Zap,
    description: 'Durable tools for cutting, digging, and pushing heavy material.',
    products: [
      { title: 'Cutting Edge & End Bit', ...sampleProduct },
      { title: 'Bulldozer Tooth', ...sampleProduct },
    ],
    color: 'from-red-600 to-red-700'
  },
  {
    id: 'undercarriage-parts',
    name: 'Undercarriage Parts',
    icon: Cog,
    description: 'Reliable undercarriage parts for construction machinery.',
    products: [
      { title: 'Track Roller', ...sampleProduct },
      { title: 'Carrier Roller', ...sampleProduct },
      { title: 'Sprocket', ...sampleProduct },
      { title: 'Idler', ...sampleProduct },
      { title: 'Track Link', ...sampleProduct },
      { title: 'Track Shoe', ...sampleProduct },
    ],
    color: 'from-blue-600 to-blue-700'
  },
  {
    id: 'rubber-components',
    name: 'Rubber Components',
    icon: Droplets,
    description: 'Rubber tracks and pads for shock absorption and traction.',
    products: [
      { title: 'Rubber Track', ...sampleProduct },
      { title: 'Rubber Pad', ...sampleProduct },
    ],
    color: 'from-green-600 to-green-700'
  },
  {
    id: 'other-components',
    name: 'Other Components',
    icon: Star,
    description: 'Custom manufactured components and special orders.',
    products: [
      { title: 'Custom Orders', ...sampleProduct },
    ],
    color: 'from-purple-600 to-purple-700'
  }
];


const ProductCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState('heavy-machinery');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of industrial products
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="relative flex flex-nowrap overflow-x-auto px-1.5 py-1.5 list-none rounded-md bg-slate-100 w-full mx-auto border-0 shadow-none scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent md:flex-wrap md:overflow-x-visible">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`z-30 flex items-center justify-center flex-none md:flex-auto px-4 py-3 mx-1 my-1 text-base mb-0 transition-all duration-150 ease-in-out border-0 rounded-lg cursor-pointer font-semibold
                      ${isActive
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow font-bold scale-105'
                        : 'text-slate-700 bg-inherit hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white'}
                    `}
                    style={{ minWidth: '140px' }}
                  >
                    <Icon className={`w-5 h-5 mr-2 ${isActive ? 'text-white' : 'text-yellow-500 group-hover:text-white'}`} />
                    <span className={`ml-1 ${isActive ? 'text-white' : ''}`}>{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8 pt-10">
              {category.products.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product) => (
                    <Card key={product.id} className="hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4">
                          <Badge className={`bg-gradient-to-r ${category.color} text-white border-0`}>
                            {product.availability}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm text-gray-500">(4.8)</span>
                        </div>
                        <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                        <CardDescription className="text-gray-600 font-medium">
                          {product.brand}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-3 text-gray-900">Key Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.features.slice(0, 3).map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs border-yellow-300 text-yellow-700 bg-yellow-50">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600">
                              <Mail className="w-4 h-4 mr-2" />
                              Quote
                            </Button>
                            <Button variant="outline" size="sm" className="border-yellow-300 text-yellow-700">
                              <Phone className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-16 text-center border-dashed border-2 border-gray-300 bg-white/50">
                  <div className="text-gray-500">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">Coming Soon</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Products in this category will be available soon.
                    </p>
                    <Button variant="outline" className="border-yellow-300 text-yellow-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Get Notified
                    </Button>
                  </div>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCategoriesTabs;