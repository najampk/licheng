import { useState } from 'react';
 import { useEffect } from 'react';
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
import { ChevronDown, ChevronRight, Filter, X } from 'lucide-react';

export default function ProductsCategories() {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Get all unique categories from all products, regardless of subcategory presence
  const categories = Array.from(new Set(allProducts.map(p => p.category)));

  const subCategoryMap = {};
  allProducts.forEach(p => {
    // Only consider valid subcategories (not empty or 'General')
    const sub = p.sub_category && p.sub_category.trim() !== '' && p.sub_category !== 'General' ? p.sub_category : null;
    if (sub) {
      if (!subCategoryMap[p.category]) subCategoryMap[p.category] = new Set();
      subCategoryMap[p.category].add(sub);
    }
  });

  // Initialize expanded categories to show all subcategories by default
 

  useEffect(() => {
    const initialExpanded = new Set();
    categories.forEach(category => {
      if (subCategoryMap[category] && subCategoryMap[category].size > 0) {
        initialExpanded.add(category);
      }
    });
    setExpandedCategories(initialExpanded);
  }, [categories, subCategoryMap]);

  const brands = Array.from(new Set(allProducts.map(p => p.brand)));

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = categoryFilter === '' || p.category === categoryFilter;
    
    // Handle subcategory filtering: if subCategoryFilter is set, ensure product's sub_category matches and is not 'General'
    const productSub = p.sub_category && p.sub_category.trim() !== '' && p.sub_category !== 'General' ? p.sub_category : null;
    const matchesSubCategory = subCategoryFilter === '' || (productSub && productSub === subCategoryFilter);

    const matchesBrand = brandFilter === '' || p.brand === brandFilter;
    
    // If a subCategoryFilter is active, only show products with valid subcategories
    if (subCategoryFilter && !productSub) return false;

    return matchesCategory && matchesSubCategory && matchesBrand;
  });

  // Filter out products with "General" subcategory for display count, but not for initial category mapping
  const displayableProducts = allProducts.filter(p => 
    p.sub_category && p.sub_category.trim() !== '' && p.sub_category !== 'General'
  );

  const toggleCategory = (category) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const clearFilters = () => {
    setCategoryFilter('');
    setSubCategoryFilter('');
    setBrandFilter('');
  };

  const hasActiveFilters = categoryFilter || subCategoryFilter || brandFilter;

  return (
    <>
      <Helmet>
        <title>All Products | Licheng Trading</title>
        <meta name="description" content="Explore our full range of high-quality industrial products including machinery parts, packaging solutions and more." />
      </Helmet>

      <Header />
      <main className="mt-20">
      <section className="bg-gradient-to-br from-white to-gray-50 text-gray-900 min-h-screen">
        {/* Full width container */}
        <div className="w-full px-4 md:px-6 lg:px-8 pt-14 pb-10">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-colors duration-300 mb-4">
            Explore Our Product Range
          </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
                Browse high-performance machinery parts designed for durability, precision, and industry excellence.
            </p>
          </div>

          <div className="flex gap-6 lg:gap-8 relative">
            {/* Mobile filter toggle */}
            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden fixed top-20 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
            >
              <Filter className="w-5 h-5" />
            </Button>

            {/* Enhanced Sidebar */}
            <aside className={`
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-72 xl:w-80
              bg-white border-r lg:border lg:rounded-2xl shadow-xl lg:shadow-lg
              transition-transform duration-300 ease-in-out z-40 lg:z-auto
              overflow-y-auto
            `}>
              {/* Mobile close button */}
              <div className="lg:hidden flex justify-between items-center p-4 border-b bg-blue-50">
                <h2 className="text-lg font-bold text-blue-900">Filters</h2>
                <Button
                  onClick={() => setSidebarOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6">
                {/* Filter header with clear button */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-yellow-600">Categories</h2>
                  {hasActiveFilters && (
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      size="sm"
                      className="text-xs text-gray-600 hover:text-gray-800 border-gray-300"
                    >
                      Clear All
                    </Button>
                  )}
                </div>

                {/* Active filters display */}
                {hasActiveFilters && (
                  <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-2">Active Filters:</p>
                    <div className="flex flex-wrap gap-2">
                      {categoryFilter && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {categoryFilter}
                          <button
                            onClick={() => setCategoryFilter('')}
                            className="ml-1 hover:text-blue-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      )}
                      {subCategoryFilter && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                          {subCategoryFilter}
                          <button
                            onClick={() => setSubCategoryFilter('')}
                            className="ml-1 hover:text-green-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      )}
                      {brandFilter && (
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {brandFilter}
                          <button
                            onClick={() => setBrandFilter('')}
                            className="ml-1 hover:text-purple-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Categories list */}
                <ul className="space-y-2">
                  {categories.map(category => {
                    const hasSubCategories = subCategoryMap[category] && subCategoryMap[category].size > 0;
                    const isExpanded = expandedCategories.has(category);
                    const isSelected = category === categoryFilter;

                    return (
                      <li key={category} className="border-b border-gray-100 last:border-b-0 pb-2">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => {
                              setCategoryFilter(category === categoryFilter ? '' : category);
                              setSubCategoryFilter('');
                            }}
                            className={`
                              flex-1 text-left py-2 px-3 rounded-lg transition-all duration-200
                              ${isSelected 
                                ? 'bg-blue-100 text-blue-800 font-semibold shadow-sm' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                              }
                            `}
                          >
                            <span className="text-sm font-medium">{category}</span>
                          </button>
                          
                          {hasSubCategories && (
                            <button
                              onClick={() => toggleCategory(category)}
                              className={`
                                p-2 rounded-lg transition-all duration-200
                                ${isSelected 
                                  ? 'text-blue-600 hover:bg-blue-200' 
                                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                                }
                              `}
                            >
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Subcategories */}
                        {hasSubCategories && isExpanded && (
                          <ul className="ml-4 mt-2 space-y-1 border-l-2 border-gray-100 pl-3">
                            {[...subCategoryMap[category]].sort().map(sub => (
                              <li key={sub}>
                                <button
                                  onClick={() => {
                                    setSubCategoryFilter(sub === subCategoryFilter ? '' : sub);
                                    if (!categoryFilter) setCategoryFilter(category);
                                  }}
                                  className={`
                                    w-full text-left py-1.5 px-2 rounded-md text-sm transition-all duration-200
                                    ${sub === subCategoryFilter 
                                      ? 'bg-green-100 text-green-800 font-medium shadow-sm' 
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                                    }
                                  `}
                                >
                                  {sub}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

            
              </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
              <div
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Main Content - Full width */}
            <div className="flex-1 min-w-0">
              {/* Results header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-lg text-gray-600">
                    Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
                    {hasActiveFilters && (
                      <span className="text-sm text-gray-500 ml-2">
                        (filtered from {allProducts.length} total)
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Products grid - Responsive and full width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {filteredProducts.map(product => (
                  <Link to={`/product/${product.slug}`} key={product.slug}>
                    <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden bg-white">
                      <CardHeader className="p-0 relative overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                         {product.sub_category && product.sub_category.trim() !== '' && product.sub_category !== 'General' && (
  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-medium rounded-full px-3 py-1 shadow-sm">
    {product.sub_category}
  </Badge>
)}

                          
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                            {product.brand}
                          </span>
                        </div>
                        <CardTitle className="text-sm font-semibold text-gray-800 line-clamp-2 leading-relaxed group-hover:text-blue-700 transition-colors duration-200">
                          {product.title}
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* No results message */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <Filter className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-6">
                      No products match your current filter selection. Try adjusting your filters or clearing them to see more results.
                    </p>
                    {hasActiveFilters && (
                      <Button
                        onClick={clearFilters}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                      >
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </main>          
      <Footer />
    </>
  );
}
