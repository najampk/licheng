// components/CategoryCards.tsx
import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import categories from '@/data/category-cards.json';

const CategoryCards: React.FC = () => {
  return (
    <div className="py-12 px-6 lg:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Our Product Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            to={`/category/${category.slug}`}
            key={category.slug}
            className="hover:scale-105 transition-transform"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg bg-white p-4 flex flex-col items-center">
              <img
                src={category.image}
                alt={category.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <CardTitle className="text-center text-lg font-semibold text-gray-800">
                {category.title}
              </CardTitle>
              <CardContent className="text-sm text-gray-500 text-center">
                {category.description || 'View all products in this category'}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
