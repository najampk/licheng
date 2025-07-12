import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Search, Globe, Shield, CheckCircle, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ImportExportAgency = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Import/Export Agency Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simplifying Global Trade for Your Business
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Let's Handle Your Trade Logistics
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Agency Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Customs Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete customs clearance and documentation handling</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Product Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Find the right suppliers and products for your needs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>International Procurement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">End-to-end procurement management services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Global Trade Routes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>China → Europe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Germany, UK, France, Netherlands, Italy</p>
                <Badge className="mt-2 bg-green-500">Active Route</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>China → USA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">West Coast, East Coast, Gulf Ports</p>
                <Badge className="mt-2 bg-green-500">Active Route</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>China → MENA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">UAE, Saudi Arabia, Egypt, Turkey</p>
                <Badge className="mt-2 bg-green-500">Active Route</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>China → South Asia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">India, Bangladesh, Pakistan, Sri Lanka</p>
                <Badge className="mt-2 bg-green-500">Active Route</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Simplify Your Global Trade?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle all aspects of your import/export operations.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Let's Handle Your Trade Logistics
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ImportExportAgency;