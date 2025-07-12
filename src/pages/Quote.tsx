import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, CheckCircle, Upload, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Quote = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Get Your Custom Quote - Licheng Rongwang Trading Co., Ltd.</title>
        <meta name="description" content="Get Your Custom Quote - We respond within 24 hours" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Custom Quote</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We respond within 24 hours. Tell us what you need.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Quote Request Form</CardTitle>
                  <p className="text-gray-600">Fill out the details below and we'll get back to you with a competitive quote.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="product">Product Needed *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="heavy-machinery">Heavy Machinery Parts</SelectItem>
                        <SelectItem value="construction">Construction Equipment</SelectItem>
                        <SelectItem value="industrial">Industrial Components</SelectItem>
                        <SelectItem value="automotive">Automotive Parts</SelectItem>
                        <SelectItem value="custom">Custom Manufacturing</SelectItem>
                        <SelectItem value="other">Other (Please specify)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="quantity">Quantity Required *</Label>
                    <Input id="quantity" placeholder="e.g., 100 units, 50 sets, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Please provide any specific requirements, technical specifications, delivery timeline, or other details that would help us provide an accurate quote..."
                      rows={5}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="attachment">Upload Attachment (Optional)</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload drawings, specifications, or reference images</p>
                      <p className="text-xs text-gray-500 mt-1">Max file size: 10MB (PDF, JPG, PNG, DOC)</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3">
                    Request My Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Trust Signals */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-black">Why Choose Our Quotes?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-black">Fast Response</p>
                      <p className="text-gray-600 text-sm">24-hour response guarantee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-black">No Obligation</p>
                      <p className="text-gray-600 text-sm">Free quotes with no commitment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-black">Competitive Pricing</p>
                      <p className="text-gray-600 text-sm">Best value for quality products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-black">Trust Signals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">1000+</div>
                    <div className="text-sm text-gray-600">Quotes Delivered</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">24hr</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">100%</div>
                    <div className="text-sm text-gray-600">No Obligation</div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">ISO Certified</Badge>
                      <Badge variant="outline">Global Shipping</Badge>
                      <Badge variant="outline">OEM Capable</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Quote;