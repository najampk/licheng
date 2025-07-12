import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageCircle, Monitor, Wrench, Shield, Clock, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AfterSalesSupport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Full Lifecycle After-Sales Support
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our Commitment Doesn't End at Delivery
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Submit a Support Request
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Support Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Spare Parts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Genuine parts with fast delivery worldwide</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Remote Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Quick troubleshooting via remote access</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Product Upgrades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Keep your equipment up-to-date</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Warranty Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive warranty support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Workflow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Support Workflow</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Issue Report</h3>
              <p className="text-gray-600">Submit your support request</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">Our team responds within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Diagnosis</h3>
              <p className="text-gray-600">Expert analysis and solution</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">Problem solved and verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="h-8 w-8 text-orange-500" />
                  <Badge variant="secondary">24/7</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-semibold">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution Rate:</span>
                    <span className="font-semibold">98.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Phone className="h-8 w-8 text-orange-500" />
                  <Badge variant="secondary">Global</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Countries Served:</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="font-semibold">15+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-500" />
                  <Badge variant="secondary">Certified</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Satisfaction:</span>
                    <span className="font-semibold">99.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="font-semibold">2 Years</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Support Now</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">support@lichengrongwang.com</p>
              <Button variant="outline">Send Email</Button>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">+86 138 0000 0000</p>
              <Button variant="outline">Call Now</Button>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Available 24/7</p>
              <Button variant="outline">Start Chat</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AfterSalesSupport;