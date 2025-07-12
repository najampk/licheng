// pages/Product.tsx
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Star, Shield, Truck, Award, Hammer, Flame, Settings,
  LayoutGrid, CheckCircle, Paintbrush, Package, ChevronLeft,
  ChevronRight, PlayCircle, PauseCircle, ArrowUp
} from 'lucide-react';
import allProducts from '@/data/products.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Product() {
  const { slug } = useParams();
  const product = allProducts.find((p) => p.slug === slug);

  const [mediaIndex, setMediaIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-500">We couldn't find the product you're looking for.</p>
        </div>
      </div>
    );
  }

  const mediaItems = [
    ...(product.videos?.length ? [{ type: 'video', src: product.videos[0] }] : []),
    ...product.images.map((src) => ({ type: 'image', src })),
  ];

  const isVideo = mediaItems[mediaIndex]?.type === 'video';

  const toggleVideo = () => {
    if (!videoRef.current) return;
    videoPlaying ? videoRef.current.pause() : videoRef.current.play();
    setVideoPlaying(!videoPlaying);
  };

  const prevMedia = () => {
    setMediaIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
    setVideoPlaying(false);
  };

  const nextMedia = () => {
    setMediaIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
    setVideoPlaying(false);
  };

  const processSteps = [
    { label: 'Rough Piece', icon: Hammer },
    { label: 'Heat Treatment', icon: Flame },
    { label: 'Process', icon: Settings },
    { label: 'Assembly Line', icon: LayoutGrid },
    { label: 'Testing', icon: CheckCircle },
    { label: 'Spray Painting', icon: Paintbrush },
    { label: 'Packing', icon: Package },
    { label: 'Loading', icon: Truck },
  ];

  return (
    <>
      <Helmet>
        <title>{`${product.title} | ${product.brand}`}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.category}, ${product.tags.join(', ')}`} />
      </Helmet>

      <Header solidBackground />

      <section className="bg-white text-gray-900 px-4 md:px-8 pt-[120px] pb-20 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left: Content */}
          <div className="space-y-6">
            <Badge className="bg-yellow-500 text-black font-medium text-xs px-3 py-1 rounded-full w-fit">{product.category}</Badge>
            <h1 className="text-4xl font-bold leading-tight">{product.title}</h1>
            <div className="flex items-center space-x-3">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}
              <span className="text-sm text-gray-500">(4.8/5)</span>
            </div>
            <p className="text-base text-gray-600">{product.description}</p>
            <div className="mt-6 bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-700 uppercase tracking-wide text-xs mb-1">Get more info</p>
                <p>About availability,<br />price and delivery</p>
              </div>

              <Button
                asChild
                className="rounded-full bg-yellow-500 text-white font-semibold hover:bg-black hover:text-yellow-400 px-6 py-2 text-sm"
              >
                <Link to="/contact">Express interest</Link>
              </Button>

            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div><Shield className="mx-auto mb-1 text-yellow-500" /> Quality Assured</div>
              <div><Truck className="mx-auto mb-1 text-yellow-500" /> Fast Delivery</div>
              <div><Award className="mx-auto mb-1 text-yellow-500" /> Certified</div>
            </div>
          </div>

          {/* Right: Media */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 shadow">
              {isVideo ? (
                <>
                  <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={mediaItems[mediaIndex].src} type="video/mp4" />
                  </video>
                  <button onClick={toggleVideo} className="absolute bottom-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70">
                    {videoPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
                  </button>
                </>
              ) : (
                <img src={mediaItems[mediaIndex].src} alt={`Media ${mediaIndex}`} className="w-full h-full object-cover" />
              )}
              <button onClick={prevMedia} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button onClick={nextMedia} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto mt-4">
              {mediaItems.map((item, index) => (
                <div key={index} className={`border-2 rounded-md cursor-pointer overflow-hidden w-20 h-20 flex-shrink-0 ${index === mediaIndex ? 'border-yellow-500' : 'border-transparent'}`} onClick={() => { setMediaIndex(index); setVideoPlaying(false); }}>
                  {item.type === 'video' ? (
                    <video muted className="w-full h-full object-cover">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item.src} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        {product.features?.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20" id="features">
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.features.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
          </div>
        )}

        {/* Applications */}
        {product.applications?.length > 0 && (
          <div className="max-w-5xl mx-auto mt-10" id="applications">
            <h2 className="text-xl font-semibold mb-3">Applications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.applications.map((app, idx) => <li key={idx}>{app}</li>)}
            </ul>
          </div>
        )}

        {/* Scroll to Top */}
        {showScrollTop && (
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg z-50">
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </section>

      {/* Production Process */}
      <section className="max-w-7xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-bold mb-6">Production Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map(({ label, icon: Icon }, i) => (
            <div key={i} className="border rounded-lg p-5 text-center shadow-sm hover:shadow-md transition">
              <div className="text-yellow-500 mb-3"><Icon className="mx-auto w-8 h-8" /></div>
              <p className="font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging & Shipping */}
      <section className="max-w-7xl mx-auto mt-20 px-4 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Packaging & Shipping</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md">
            <Shield className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure Packaging</h3>
            <p className="text-sm text-gray-600">Each component is bubble-wrapped and boxed to prevent transit damage.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md">
            <Award className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Custom Labeling</h3>
            <p className="text-sm text-gray-600">Labeled for easy identification, with optional barcodes and instructions.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md">
            <Truck className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fast Global Shipping</h3>
            <p className="text-sm text-gray-600">Shipped via trusted partners with tracking and insurance.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
