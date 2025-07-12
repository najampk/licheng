import { Link } from 'react-router-dom';
import allProducts from '@/data/products.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Package, Droplets, Zap, Cog } from 'lucide-react';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Extended Arm': <Wrench className="w-6 h-6 text-yellow-500" />,
  'Heavy Machinery Parts': <Cog className="w-6 h-6 text-yellow-500" />,
  'Heavy Packaging Solutions': <Package className="w-6 h-6 text-yellow-500" />,
  // Add more category-icon pairs as needed
};

const categoryDescriptions: { [key: string]: string } = {
  'Extended Arm': 'Engineered for long-reach excavators, high-rise demolition, and dredging.',
  'Heavy Machinery Parts': 'Robust spare parts for construction and mining equipment.',
  'Heavy Packaging Solutions': 'Industrial-grade packaging for safe transport of machinery and parts.',
};

const AllCategoriesPage = () => {
  const uniqueCategories = [...new Set(allProducts.map((p) => p.category))];

  return (
    <>
      <Header solidBackground />

      <section className="bg-white text-gray-900 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Explore Product Categories
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueCategories.map((category, index) => {
            const slug = category.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link to={`/products/category/${slug}`} key={index}>
                <Card className="hover:shadow-md transition h-full border border-gray-200 rounded-2xl overflow-hidden">
                  <CardHeader className="flex items-center justify-between bg-yellow-50 p-4">
                    <div className="flex items-center space-x-3">
                      {categoryIcons[category] || <Zap className="w-6 h-6 text-yellow-500" />}
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 text-sm text-gray-600">
                    {categoryDescriptions[category] || 'High-quality products designed for performance and durability.'}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AllCategoriesPage;