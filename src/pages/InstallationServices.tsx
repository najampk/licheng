import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Settings, Shield, Users, CheckCircle, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InstallationServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            On-Site & Remote Installation Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional Installation, Anywhere You Need It
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Book an Installation Appointment
          </Button>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Installation Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Machinery Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete machinery installation and configuration</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Seamless integration with existing systems</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Safety Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive safety checks and compliance testing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Global Service Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Asia Pacific</h3>
              <p className="text-gray-600">China, Japan, Korea, Southeast Asia</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Europe</h3>
              <p className="text-gray-600">Germany, UK, France, Netherlands</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Americas</h3>
              <p className="text-gray-600">USA, Canada, Mexico, Brazil</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Middle East</h3>
              <p className="text-gray-600">UAE, Saudi Arabia, Turkey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Installation Plan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Site Assessment</h3>
              <p className="text-gray-600">Evaluate installation requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Detailed installation timeline</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">Professional setup execution</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Comprehensive system testing</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold mb-2">Handover</h3>
              <p className="text-gray-600">Training and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Certification */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certified Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Team Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>ISO 9001 Quality Management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Safety Training Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Equipment Manufacturer Trained</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>International Standards Compliance</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Equipment & Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Professional installation tools</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Safety equipment and PPE</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Testing and calibration instruments</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Documentation and reporting systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Schedule Your Installation?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our certified installation team is ready to ensure your equipment is set up correctly and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Book an Installation Appointment
            </Button>
            <Button size="lg" variant="outline">
              Request Site Assessment
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InstallationServices;