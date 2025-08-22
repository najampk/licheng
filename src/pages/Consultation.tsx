import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Settings, Truck, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Free Expert Consultation - Licheng Rongwang Trading Co., Ltd.</title>
        <meta name="description" content="Free Expert Consultation - Need Help Finding the Right Product or Supplier?" />
      </Helmet>
      
      <Header />
       <main className="mt-20"> 
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Expert Consultation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Need Help Finding the Right Product or Supplier?
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <User className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">1-on-1 Session</h3>
                <p className="text-gray-600">Personal consultation with a product expert who understands your industry needs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Custom Orders</h3>
                <p className="text-gray-600">Get guidance on custom manufacturing and OEM solutions tailored to your specifications</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Shipping & Sourcing</h3>
                <p className="text-gray-600">Expert advice on logistics, shipping options, and supply chain optimization</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Calendar className="h-6 w-6 text-orange-500 mr-2" />
                    Book Your Consultation
                  </CardTitle>
                  <p className="text-gray-600">Schedule a free 30-minute consultation with our experts</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company (optional)" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="topic">Topic / Requirement *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What would you like to discuss?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-selection">Product Selection</SelectItem>
                        <SelectItem value="custom-manufacturing">Custom Manufacturing</SelectItem>
                        <SelectItem value="oem-solutions">OEM Solutions</SelectItem>
                        <SelectItem value="shipping-logistics">Shipping & Logistics</SelectItem>
                        <SelectItem value="quality-control">Quality Control</SelectItem>
                        <SelectItem value="pricing-negotiation">Pricing & Negotiation</SelectItem>
                        <SelectItem value="supplier-evaluation">Supplier Evaluation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="details">Additional Details</Label>
                    <Textarea 
                      id="details" 
                      placeholder="Please provide any specific questions or requirements you'd like to discuss during the consultation..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3">
                    Book My Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-black">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium text-black">Consultation Confirmation</p>
                      <p className="text-gray-600 text-sm">We'll confirm your appointment within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium text-black">Pre-Consultation Prep</p>
                      <p className="text-gray-600 text-sm">We'll review your requirements beforehand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium text-black">Expert Discussion</p>
                      <p className="text-gray-600 text-sm">30-minute focused consultation session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-medium text-black">Follow-up Resources</p>
                      <p className="text-gray-600 text-sm">Receive recommendations and next steps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-black">Consultation Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Completely free, no obligation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Industry-specific expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Customized recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Direct access to decision makers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Follow-up support included</span>
                  </div>
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

export default Consultation;