import React from 'react';
import { Link } from 'react-router-dom';
import categoryCards from '@/data/category-cards.json';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Explore Our Categories</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Browse a wide range of heavy-duty machinery parts tailored for durability, performance, and global applications. Each category is carefully curated to meet the demands of construction, mining, agriculture, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryCards.map((cat) => (
          <Link to={`/category/${cat.slug}`} key={cat.slug} className="group">
            <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition hover:shadow-lg hover:scale-105">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-58 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{cat.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
