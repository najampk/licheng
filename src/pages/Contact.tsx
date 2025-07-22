import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - Licheng Rongwang Trading Co., Ltd.</title>
        <meta name="description" content="Let's Connect - Contact Licheng Rongwang Trading Co., Ltd." />
      </Helmet>
      
      <Header />
      <main className="mt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your industrial needs? We're here to help you find the perfect solution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Request Quote</SelectItem>
                        <SelectItem value="product">Product Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." rows={6} />
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Company Info & Quick Links */}
            <div className="space-y-6">
              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-black">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-black">Address</p>
                      <p className="text-gray-600 text-sm">
                        Room 202, No. 2, Xiakuqiao Lane<br />
                        Licheng District, Quanzhou City<br />
                        Fujian Province, China
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-600 text-sm">guishengchen76@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600 text-sm">+86 18750503103</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Social Credit Code:</strong><br />
                      91350502MAE0N6DK00
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm font-medium text-black mb-2">WeChat QR Code</p>
                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-black">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/products" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-black">Products</div>
                    <div className="text-sm text-gray-600">Browse our product catalog</div>
                  </Link>
                  
                  <Link to="/quote" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-black">Get a Quote</div>
                    <div className="text-sm text-gray-600">Request custom pricing</div>
                  </Link>
                  
                  <Link to="/consultation" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-black">Consultation</div>
                    <div className="text-sm text-gray-600">Book expert consultation</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;