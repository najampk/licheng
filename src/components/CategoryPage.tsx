// pages/CategoryPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import products from '@/data/products.json';

const CategoryPage: React.FC = () => {
  const { slug } = useParams();

  const productsInCategory = products.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const categoryTitle =
    slug?.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ') || 'Products';

  return (
    <>
      <Helmet>
        <title>{`${categoryTitle} | Licheng Rong Wang`}</title>
        <meta
          name="description"
          content={`Explore top-grade ${categoryTitle} at Licheng Rong Wang. Factory-direct quality parts with global shipping.`}
        />
        <meta property="og:title" content={`${categoryTitle} - Licheng Rong Wang`} />
        <meta
          property="og:description"
          content={`Factory-sourced ${categoryTitle} built for performance and durability.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/category/${slug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="pt-24 px-6 md:px-12 pb-12 bg-white min-h-screen">
        <Breadcrumbs current={categoryTitle} />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{categoryTitle}</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover high-quality {categoryTitle} engineered for demanding environments and global industries.
          All products are backed by our OEM standards and quality assurance.
        </p>

        {productsInCategory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsInCategory.map((product) => (
              <div key={product.id} className="rounded-lg border shadow-sm overflow-hidden">
                <img
                  src={product.images?.[0] || '/fallback.jpg'}
                  alt={product.title}
                  className="w-full h-58 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description?.slice(0, 120)}...
                  </p>
                  <Link
                    to={`/product/${product.slug}`}
                    className="text-yellow-600 font-medium hover:underline"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">No products found in this category.</div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default CategoryPage;