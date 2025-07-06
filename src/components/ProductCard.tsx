import React from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}


import { useState } from "react";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const rating = 4;
  const [current, setCurrent] = useState(0);
  const total = product.images.length;

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pb-6 bg-yellow-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-lg shadow">
      <div className="relative w-full mx-auto aspect-square overflow-hidden rounded-lg bg-gray-100" style={{ maxWidth: 360, maxHeight: 360 }}>
        <img
          src={product.images[current]}
          alt={product.title}
          className="w-full h-full object-contain mx-auto"
          style={{ aspectRatio: '1 / 1', maxWidth: 360, maxHeight: 360 }}
        />
        {total > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-1 shadow"
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-1 shadow"
              aria-label="Next image"
            >
              &#8594;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-2 rounded-full ${i === current ? "bg-yellow-500" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="space-x-1  py-5 p-5 flex justify-center mt-10">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 mx-px fill-current ${i < rating ? "text-orange-600" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
          </svg>
        ))}
      </div>
      <h1 className="text-3xl my-5">{product.title}</h1>
      {/* <p className="mb-5">{product.description}</p> */}
      <h2 className="font-semibold mb-5">{product.availability}</h2>
      <button className="p-2 px-6 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Add To Cart</button>
    </section>
  );
};

export default ProductCard;
