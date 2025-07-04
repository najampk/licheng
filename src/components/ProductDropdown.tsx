import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ProductItem {
  name: string;
  href?: string;
  children?: ProductItem[];
}

const productCategories: ProductItem[] = [
  {
    name: 'Excavator Attachments',
    children: [
      { name: 'Extended Arm', href: '/products/excavator/extended-arm' },
      { name: 'Swing Stand', href: '/products/excavator/swing-stand' },
      { name: 'Hydraulic Crusher', href: '/products/excavator/hydraulic-crusher' },
      { name: 'Hydraulic Pump', href: '/products/excavator/hydraulic-pump' },
      { name: 'Cylinder', href: '/products/excavator/cylinder' },
    ],
  },
  {
    name: 'Ground Engaging Tools (GET)',
    children: [
      { name: 'Cutting Edge & End Bit', href: '/products/get/cutting-edge' },
      {
        name: 'Bulldozer Tooth',
        children: [
          { name: 'Bucket Tooth', href: '/products/get/bucket-tooth' },
          { name: 'Ripper Tooth', href: '/products/get/ripper-tooth' },
        ],
      },
    ],
  },
  {
    name: 'Undercarriage Parts',
    children: [
      { name: 'Track Roller', href: '/products/undercarriage/track-roller' },
      { name: 'Carrier Roller', href: '/products/undercarriage/carrier-roller' },
      { name: 'Sprocket', href: '/products/undercarriage/sprocket' },
      { name: 'Idler', href: '/products/undercarriage/idler' },
      { name: 'Track Link', href: '/products/undercarriage/track-link' },
      { name: 'Track Shoe', href: '/products/undercarriage/track-shoe' },
    ],
  },
  {
    name: 'Rubber Components',
    children: [
      { name: 'Rubber Track', href: '/products/rubber/rubber-track' },
      { name: 'Rubber Pad', href: '/products/rubber/rubber-pad' },
    ],
  },
  {
    name: 'Other Components',
    children: [
      { name: 'Custom Orders', href: '/products/other/custom-orders' },
    ],
  },
];

interface ProductDropdownProps {
  isScrolled: boolean;
  isMobile?: boolean;
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({ isScrolled, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = (categoryName: string) => {
    const newOpenSubmenus = new Set(openSubmenus);
    if (newOpenSubmenus.has(categoryName)) {
      newOpenSubmenus.delete(categoryName);
    } else {
      newOpenSubmenus.add(categoryName);
    }
    setOpenSubmenus(newOpenSubmenus);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-2 text-white font-medium"
        >
          Products
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-2">
            {productCategories.map((category) => (
              <div key={category.name}>
                <button
                  onClick={() => toggleSubmenu(category.name)}
                  className="w-full flex items-center justify-between py-1 text-gray-300 text-sm"
                >
                  {category.name}
                  <ChevronRight className={`h-3 w-3 transition-transform ${
                    openSubmenus.has(category.name) ? 'rotate-90' : ''
                  }`} />
                </button>
                {openSubmenus.has(category.name) && category.children && (
                  <div className="pl-4 space-y-1 border-l border-gray-700 ml-2">
                    {category.children.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <>
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="w-full flex items-center justify-between py-1 text-gray-400 text-xs"
                            >
                              {item.name}
                              <ChevronRight className={`h-3 w-3 transition-transform ${
                                openSubmenus.has(item.name) ? 'rotate-90' : ''
                              }`} />
                            </button>
                            {openSubmenus.has(item.name) && (
                              <div className="pl-4 space-y-1 border-l border-gray-600 ml-2">
                                {item.children.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href || '#'}
                                    className="block py-1 text-gray-500 text-xs hover:text-yellow-400"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <a
                            href={item.href || '#'}
                            className="block py-1 text-gray-400 text-xs hover:text-yellow-400"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`font-medium transition-colors duration-300 hover:text-yellow-500 flex items-center gap-1 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Products
        <ChevronDown className="h-4 w-4" />
      </button>

      <div
        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white rounded-lg shadow-xl border transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="p-6 grid grid-cols-5 gap-6">
          {productCategories.map((category) => (
            <div key={category.name} className="space-y-3 min-h-[120px]">
              <h3 className="font-semibold text-gray-800 text-sm border-b border-gray-200 pb-2">
                {category.name}
              </h3>
              {category.children && (
                <div className="space-y-2">
                  {category.children.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <>
                          <div className="text-xs font-medium text-gray-600 mb-1">
                            {item.name}
                          </div>
                          <div className="pl-2 space-y-1">
                            {item.children.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href || '#'}
                                className="block text-xs text-gray-500 hover:text-yellow-600 transition-colors py-0.5"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </>
                      ) : (
                        <a
                          href={item.href || '#'}
                          className="block text-xs text-gray-600 hover:text-yellow-600 transition-colors py-0.5"
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;