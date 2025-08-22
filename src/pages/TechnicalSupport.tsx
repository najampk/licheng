import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageCircle, Monitor, Wrench, Users, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TechnicalSupport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
       <main className="mt-20"> 
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reliable Technical Support & Engineering Expertise
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We Stand With You — Before, During & After the Sale
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Contact Technical Team
          </Button>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Support Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Product Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert guidance on product selection and specifications</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Quick problem diagnosis and resolution support</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Maintenance Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Preventive maintenance and optimization tips</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Support Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">24/7 email support</p>
                <Badge variant="secondary">Response: 2 hours</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Direct phone assistance</p>
                <Badge variant="secondary">Available: 9AM-6PM</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>WeChat Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Instant messaging</p>
                <Badge variant="secondary">Real-time chat</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Remote Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Screen sharing support</p>
                <Badge variant="secondary">By appointment</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engineer Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Engineering Team</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Expert Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  <span>15+ years average experience</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Certified mechanical engineers</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Multilingual support team</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Industry-specific expertise</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Response Times</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span>Email Queries</span>
                  <Badge className="bg-green-500">&lt; 2 hours</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span>Phone Calls</span>
                  <Badge className="bg-green-500">Immediate</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span>Remote Sessions</span>
                  <Badge className="bg-orange-500">Same day</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span>On-site Visits</span>
                  <Badge className="bg-orange-500">Within 48h</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Technical Support?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert technical team is ready to help you with any questions or challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Contact Technical Team
            </Button>
            <Button size="lg" variant="outline">
              Schedule Remote Session
            </Button>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;