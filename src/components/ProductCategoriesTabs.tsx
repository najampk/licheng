import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, Package, Droplets, Zap, Cog, Star, Mail, Phone } from 'lucide-react';
import { sampleProduct } from '@/data/products';

const categories = [
  {
    id: 'heavy-machinery',
    name: 'Heavy Machinery Parts',
    icon: Wrench,
    description: 'Professional grade components for heavy construction and mining equipment',
    products: [sampleProduct],
    color: 'from-blue-600 to-blue-700'
  },
  {
    id: 'packaging',
    name: 'Heavy Packaging Solutions',
    icon: Package,
    description: 'Industrial packaging systems for heavy-duty applications',
    products: [],
    color: 'from-green-600 to-green-700'
  },
  {
    id: 'plumbing',
    name: 'Plumbing & Fittings',
    icon: Droplets,
    description: 'High-quality plumbing components and industrial fittings',
    products: [],
    color: 'from-cyan-600 to-cyan-700'
  },
  {
    id: 'electromechanical',
    name: 'Electromechanical Products',
    icon: Zap,
    description: 'Advanced electromechanical systems and components',
    products: [],
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 'processing',
    name: 'Processing Machinery',
    icon: Cog,
    description: 'Industrial processing equipment and machinery components',
    products: [],
    color: 'from-orange-600 to-orange-700'
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
            <TabsList className="grid grid-cols-5 gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-2 shadow-lg">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`flex flex-col items-center gap-2 px-6 py-4 rounded-lg text-sm font-medium transition-all duration-300 min-w-[120px] ${isActive ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105` : 'bg-white text-gray-700 hover:bg-yellow-50'}`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-yellow-600'}`} />
                    <span className="text-xs text-center leading-tight">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="mb-8 text-center">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg mb-4`}>
                  <category.icon className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

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