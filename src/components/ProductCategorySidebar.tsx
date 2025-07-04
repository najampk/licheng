import React from 'react';
import { cn } from '@/lib/utils';
import {
  Package,
  Hammer,
  Truck,
  Layers,
  Settings,
  ChevronRight,
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  subcategories: {
    id: string;
    name: string;
    items?: string[];
  }[];
}

interface ProductCategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

// Assign icons to categories by ID or fallback
const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case 'excavator-attachments':
      return <Hammer className="w-4 h-4 mr-2" />;
    case 'ground-engaging-tools':
      return <Package className="w-4 h-4 mr-2" />;
    case 'undercarriage-parts':
      return <Truck className="w-4 h-4 mr-2" />;
    case 'rubber-components':
      return <Layers className="w-4 h-4 mr-2" />;
    case 'other-components':
      return <Settings className="w-4 h-4 mr-2" />;
    default:
      return <ChevronRight className="w-4 h-4 mr-2" />;
  }
};

export const ProductCategorySidebar: React.FC<ProductCategorySidebarProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Product Categories</h2>
        <nav className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="space-y-1">
              <button
                onClick={() => onCategoryClick(category.id)}
                className={cn(
                  'w-full flex items-center text-left px-3 py-2 rounded-md font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {getCategoryIcon(category.id)}
                {category.name}
              </button>
              {category.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onCategoryClick(sub.id)}
                  className={cn(
                    'w-full text-left px-6 py-1.5 text-sm rounded-md transition-colors',
                    activeCategory === sub.id
                      ? 'bg-yellow-50 text-yellow-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  )}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};