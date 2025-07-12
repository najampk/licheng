// components/Breadcrumbs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbsProps {
  current: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ current }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": current,
        "item": `https://yourdomain.com/category/${current.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li className="inline-flex items-center">
            <Link to="/" className="hover:underline text-yellow-600 font-medium">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="inline-flex items-center">
            <span className="text-gray-700 font-semibold">{current}</span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;