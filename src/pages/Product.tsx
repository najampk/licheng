import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Star, Shield, Truck, Award } from 'lucide-react'
import {
  sampleProduct,
  hydraulicPumpProducts,
  hydraulicCrusherProducts,
  extendedArmProducts,
  extendedArmCylinderProducts,
  swingBearingsProducts,
  cuttingEdgeEndBitProducts,
  bucketToothProducts,
  bucketBushingProducts,
  boltAndNutProducts,
  bucketPinProducts,
  hLinkSideLinkProducts,
  rubberPadProducts,
  rubberTrackProducts
} from '@/data/products'

export default function Product() {

  const { slug } = useParams<{ slug: string }>()
  const allProducts = [
    sampleProduct,
    ...hydraulicPumpProducts,
    ...hydraulicCrusherProducts,
    ...extendedArmProducts,
    ...extendedArmCylinderProducts,
    ...swingBearingsProducts,
    ...cuttingEdgeEndBitProducts,
    ...bucketToothProducts,
    ...bucketBushingProducts,
    ...boltAndNutProducts,
    ...bucketPinProducts,
    ...hLinkSideLinkProducts,
    ...rubberPadProducts,
    ...rubberTrackProducts
  ]
  // Find product by slug
  const product = allProducts.find((p) => p.slug === slug) || null

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The requested product could not be found.</p>
        </div>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: 'N/A',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.brand
    }
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | {product.brand}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.category}, ${product.tags.join(', ')}`} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://yourdomain.com/product/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">(4.8/5)</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Certified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-sm font-medium">{key}:</span>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}