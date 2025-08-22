import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings, Zap, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CustomManufacturing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
       <main className="mt-20"> 
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Precision Custom Manufacturing Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From Prototype to Production
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Get a Quote
          </Button>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>CNC Machining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">High-precision CNC machining for complex parts</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Die Casting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced die casting for metal components</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Injection Molding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Plastic injection molding solutions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Fabrication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Custom metal fabrication services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-600">CAD design and engineering</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-6 w-6 text-orange-500 mx-auto mb-6 hidden md:block" />
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Prototype</h3>
              <p className="text-gray-600">Rapid prototyping</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-6 w-6 text-orange-500 mx-auto mb-6 hidden md:block" />
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">Production execution</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-6 w-6 text-orange-500 mx-auto mb-6 hidden md:block" />
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Quality Control</h3>
              <p className="text-gray-600">Rigorous testing</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-6 w-6 text-orange-500 mx-auto mb-6 hidden md:block" />
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">On-time delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-500">OEM/ODM</Badge>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored to your specifications</p>
            </div>
            <div className="text-center">
              <Badge className="mb-4 bg-orange-500">Cost Efficient</Badge>
              <h3 className="font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Best value for your investment</p>
            </div>
            <div className="text-center">
              <Badge className="mb-4 bg-orange-500">Fast Delivery</Badge>
              <h3 className="font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Meet your deadlines</p>
            </div>
            <div className="text-center">
              <Badge className="mb-4 bg-orange-500">Confidential</Badge>
              <h3 className="font-semibold mb-2">IP Protection</h3>
              <p className="text-gray-600">Your designs stay secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Custom Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Submit your manufacturing specifications and let our experts bring your vision to life.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Submit Your Manufacturing Specs
          </Button>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomManufacturing;