import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  description?: string;
  subcategories: {
    id: string;
    name: string;
    description?: string;
    items?: string[];
  }[];
}

interface ProductCategoryContentProps {
  categories: Category[];
  activeCategory: string;
}

const sharedImageUrl =
  'https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253543900_60e8df19.jpg';

export const ProductCategoryContent: React.FC<ProductCategoryContentProps> = ({
  categories,
  activeCategory,
}) => {
  const findCategoryData = (id: string) => {
    for (const category of categories) {
      if (category.id === id) return { type: 'category', data: category };
      const subcategory = category.subcategories.find(sub => sub.id === id);
      if (subcategory) return { type: 'subcategory', data: subcategory, parent: category };
    }
    return null;
  };

  const categoryData = findCategoryData(activeCategory);

  if (!categoryData) {
    return (
      <div className="flex-1 p-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Product Categories</h2>
          <p className="text-gray-600">Select a category from the sidebar to explore our products.</p>
        </div>
      </div>
    );
  }

  if (categoryData.type === 'category') {
    const category = categoryData.data as Category;
    return (
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
          {category.description && (
            <p className="text-lg text-gray-600">{category.description}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.subcategories.map((subcategory) => (
           <Card
              key={subcategory.id}
              className="hover:shadow-lg transition-shadow overflow-hidden"
            >

              {/* Image + Yellow Overlay */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={sharedImageUrl}
                  alt={subcategory.name}
                  className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
                {/* Yellow gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600 via-yellow-500/70 to-transparent opacity-90"></div>
                {/* Text over image */}
                <div className="absolute bottom-2 left-3 text-white font-semibold text-lg drop-shadow">
                  {subcategory.name}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{subcategory.name}</CardTitle>
                {subcategory.description && (
                  <CardDescription>{subcategory.description}</CardDescription>
                )}
              </CardHeader>

              <CardContent>
                {subcategory.items && subcategory.items.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Products:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {subcategory.items.slice(0, 3).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                      {subcategory.items.length > 3 && (
                        <li className="text-gray-500">+ {subcategory.items.length - 3} more...</li>
                      )}
                    </ul>
                  </div>
                )}
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Subcategory selected directly
  const subcategory = categoryData.data;
  const parent = categoryData.parent as Category;

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-2">
          {parent.name} / {subcategory.name}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{subcategory.name}</h1>
        {subcategory.description && (
          <p className="text-lg text-gray-600">{subcategory.description}</p>
        )}
      </div>

      {subcategory.items && subcategory.items.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {subcategory.items.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow overflow-hidden hover:ring-2 hover:ring-yellow-500 hover:ring-offset-2"
            >

              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={sharedImageUrl}
                  alt={item}
                  className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
                {/* Yellow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600 via-yellow-500/70 to-transparent opacity-90"></div>
                {/* Label over image */}
                <div className="absolute bottom-2 left-3 text-white font-semibold text-base drop-shadow">
                  {item}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-base">{item}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
