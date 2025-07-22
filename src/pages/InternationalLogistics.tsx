import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Plane, Ship, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InternationalLogistics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
       <main className="mt-20"> 
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            End-to-End International Logistics Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Global Freight, Delivered On Time
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Request a Shipping Plan
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Logistics Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Ship className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Sea Freight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cost-effective ocean shipping worldwide</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Plane className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Air Freight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fast air cargo for urgent shipments</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Rail Cargo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Efficient rail transport solutions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Multimodal Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Combined transport modes for optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Global Network</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Ship Globally?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a customized shipping solution for your international logistics needs.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Request a Shipping Plan
          </Button>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default InternationalLogistics;