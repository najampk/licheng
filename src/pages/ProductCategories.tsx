import React, { useState } from "react";
import {
  ArrowRight,
  Settings,
  Construction,
  Layers,
  Wrench,
} from "lucide-react";
import { ProductCategorySidebar } from "@/components/ProductCategorySidebar";
import { ProductCategoryContent } from "@/components/ProductCategoryContent";
import { ProductCard } from "@/components/ProductCard";
import {
  hydraulicPumpProducts,
  hydraulicCrusherProducts,
  extendedArmProducts,
  extendedArmCylinderProducts,
  swingBearingsProducts,
  bucketToothProducts,
  cuttingEdgeEndBitProducts,
  boltAndNutProducts,
  bucketBushingProducts,
  bucketPinProducts,
  hLinkSideLinkProducts,
  rubberPadProducts,
  rubberTrackProducts,
} from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const productCategories = [
  {
    id: "excavator-attachments",
    name: "Excavator Attachments",
    description:
      "High-quality excavator attachments for enhanced productivity and performance.",
    subcategories: [
      {
        id: "extended-arm",
        name: "Extended Arm",
        description: "Long reach arms for extended excavation capabilities.",
      },
      {
        id: "swing-bearings",
        name: "Swing Bearings",
        description: "Durable swing stands for stable excavator operation.",
      },
      {
        id: "hydraulic-crusher",
        name: "Hydraulic Crusher",
        description: "Powerful hydraulic crushers for demolition work.",
      },
      {
        id: "hydraulic-pump",
        name: "Hydraulic Pump",
        description: "Reliable hydraulic pumps for consistent performance.",
      },
      {
        id: "cylinder",
        name: "Cylinder",
        description: "Heavy-duty cylinders for various excavator functions.",
      },
    ],
  },
  {
    id: "ground-engaging-tools",
    name: "Ground Engaging Tools (GET)",
    description:
      "Durable ground engaging tools designed for maximum efficiency and longevity.",
    subcategories: [
      {
        id: "cutting-edge-end-bit",
        name: "Cutting Edge & End Bit",
        description: "Sharp cutting edges and end bits for precise excavation.",
      },
      {
        id: "bulldozer-tooth",
        name: "Bulldozer Tooth",
        description: "Heavy-duty teeth for bulldozer applications.",
        items: ["Bucket Tooth", "Ripper Tooth"],
      },
    ],
  },
  {
    id: "undercarriage-parts",
    name: "Undercarriage Parts",
    description:
      "Complete range of undercarriage components for optimal machine mobility.",
    subcategories: [
      {
        id: "track-roller",
        name: "Track Roller",
        description: "High-quality track rollers for smooth operation.",
      },
      {
        id: "carrier-roller",
        name: "Carrier Roller",
        description: "Durable carrier rollers for track support.",
      },
      {
        id: "sprocket",
        name: "Sprocket",
        description: "Precision-engineered sprockets for track drive.",
      },
      {
        id: "idler",
        name: "Idler",
        description: "Reliable idlers for track tension control.",
      },
      {
        id: "track-link",
        name: "Track Link",
        description: "Strong track links for continuous track systems.",
      },
      {
        id: "track-shoe",
        name: "Track Shoe",
        description: "Durable track shoes for various ground conditions.",
      },
    ],
  },
  {
    id: "rubber-components",
    name: "Rubber Components",
    description:
      "High-grade rubber components for reduced noise and improved traction.",
    subcategories: [
      {
        id: "rubber-track",
        name: "Rubber Track",
        description: "Flexible rubber tracks for compact equipment.",
      },
      {
        id: "rubber-pad",
        name: "Rubber Pad",
        description: "Protective rubber pads for surface preservation.",
      },
    ],
  },
  {
    id: "other-components",
    name: "Other Components",
    description:
      "Custom solutions and specialized components for unique requirements.",
    subcategories: [
      {
        id: "bucket-bushing",
        name: "Bucket Bushing",
        description: "Durable bushings for excavator buckets and linkages.",
      },
      {
        id: "bucket-pin",
        name: "Bucket Pin",
        description: "High-strength pins for bucket and linkage connections.",
      },
      {
        id: "bolt-and-nut",
        name: "Bolt & Nut",
        description: "Heavy-duty bolts and nuts for machinery assembly.",
      },
      {
        id: "h-link-side-link",
        name: "H-Link & Side Link",
        description: "Precision H-links and side links for excavator buckets.",
      },
      {
        id: "custom-orders",
        name: "Custom Orders",
        description: "Tailored solutions designed to meet your specific needs.",
      },
    ],
  },
];

export const ProductCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("excavator-attachments");

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 md:px-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://cdn.brooksindustrialmetals.com/wp-content/uploads/2023/06/background-image.png')] opacity-5 bg-cover bg-center pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Icon Strip */}
          <div className="flex justify-center gap-6 mb-6 text-yellow-400">
            <Settings className="w-6 h-6" />
            <Construction className="w-6 h-6" />
            <Layers className="w-6 h-6" />
            <Wrench className="w-6 h-6" />
          </div>

          {/* Heading & Text */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Heavy Machinery Parts, Built to Perform
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore excavator attachments, undercarriage parts, and custom
            components — all engineered to push limits and power productivity.
          </p>

          {/* CTA */}
          <a
            href="#categories"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            <ArrowRight className="w-5 h-5" />
            Browse Product Categories
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="pt-16 flex">
        <ProductCategorySidebar
          categories={productCategories}
          activeCategory={activeCategory}
          onCategoryClick={setActiveCategory}
        />
        <div className="flex-1 px-6">
          {/* Show product cards for the selected category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {(() => {
              let products = [];
              if (activeCategory === "hydraulic-pump")
                products = hydraulicPumpProducts;
              else if (activeCategory === "hydraulic-crusher")
                products = hydraulicCrusherProducts;
              else if (activeCategory === "extended-arm")
                products = extendedArmProducts;
              else if (activeCategory === "cylinder")
                products = extendedArmCylinderProducts;
              else if (activeCategory === "swing-bearings")
                products = swingBearingsProducts;
              else if (activeCategory === "cutting-edge-end-bit")
                products = cuttingEdgeEndBitProducts;
   else if (activeCategory === "bulldozer-tooth")
                products = bucketToothProducts;
              else if (activeCategory === "bolt-and-nut")
                products = boltAndNutProducts;
              else if (activeCategory === "bucket-bushing")
                products = bucketBushingProducts;
              else if (activeCategory === "bucket-pin")
                products = bucketPinProducts;
              else if (activeCategory === "h-link-side-link")
                products = hLinkSideLinkProducts;
              else if (activeCategory === "rubber-pad")
                products = rubberPadProducts;
              else if (activeCategory === "rubber-track")
                products = rubberTrackProducts;
              // Add more categories as needed
              return products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ));
            })()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductCategories;
