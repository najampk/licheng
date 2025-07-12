import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import allProducts from '@/data/products.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function ProductsCategories() {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  const brands = Array.from(new Set(allProducts.map(p => p.brand)));

  const filteredProducts = allProducts.filter(p => {
    return (
      (categoryFilter === '' || p.category === categoryFilter) &&
      (brandFilter === '' || p.brand === brandFilter)
    );
  });

  return (
    <>
      <Helmet>
        <title>All Products | Licheng Trading</title>
        <meta name="description" content="Explore our full range of high-quality industrial products including machinery parts, packaging solutions and more." />
      </Helmet>

      <Header />

      <section className="bg-white text-gray-900 px-4 md:px-8 pt-10 pb-4 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">All Products</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <select
              className="border rounded-md px-4 py-2 text-sm"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              className="border rounded-md px-4 py-2 text-sm"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="">All Brands</option>
              {brands.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            <Button
              variant="outline"
              className="text-sm"
              onClick={() => {
                setCategoryFilter('');
                setBrandFilter('');
              }}
            >
              Clear Filters
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Link to={`/product/${product.slug}`} key={product.slug}>
                <Card className="hover:shadow-lg transition-shadow duration-200 h-full">
                  <CardHeader>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-50 object-cover rounded-md"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge className="bg-yellow-500 text-black text-xs">{product.category}</Badge>
                    <CardTitle className="text-base font-semibold truncate">{product.title}</CardTitle>
                    <p className="text-sm text-gray-500 truncate">{product.brand}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="mt-10 text-gray-500 text-center">No products match your selected filters.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}