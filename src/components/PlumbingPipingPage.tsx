import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import InquireNowModal from '@/components/InquireNowModal';
import { getPlumbingProducts, type Product } from '@/utils/productDiscovery';

const PlumbingPipingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const plumbingProducts = await getPlumbingProducts();
        setProducts(plumbingProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleInquireNow = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <>
      <Helmet>
        <title>Plumbing & Piping Products | Licheng Rongwang Trading</title>
        <meta
          name="description"
          content="Explore our comprehensive range of plumbing and piping products including valves, connectors, and fittings. High-quality industrial plumbing solutions with global shipping."
        />
        <meta property="og:title" content="Plumbing & Piping Products - Licheng Rongwang Trading" />
        <meta
          property="og:description"
          content="Professional plumbing and piping solutions for industrial applications. Quality valves, fittings, and connectors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/category/plumbing-piping" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="pt-24 px-6 md:px-12 pb-12 bg-white min-h-screen">
        <Breadcrumbs current="Plumbing & Piping" />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Plumbing & Piping Products</h1>
          <p className="text-gray-600 max-w-4xl text-lg leading-relaxed">
            Discover our comprehensive range of high-quality plumbing and piping products designed for 
            industrial applications. From precision valves to reliable connectors, our products meet 
            international standards and are engineered for durability and performance in demanding environments.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onInquireNow={handleInquireNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </main>

      <Footer />

      <InquireNowModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
};

export default PlumbingPipingPage;

