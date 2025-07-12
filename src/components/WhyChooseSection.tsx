import { Card, CardContent } from "@/components/ui/card";
import { Settings, Shield, Clock, Globe } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Settings,
      title: "OEM Capability",
      description: "Custom manufacturing solutions tailored to your specifications"
    },
    {
      icon: Shield,
      title: "Strict Quality Control",
      description: "Rigorous testing and inspection processes ensure premium quality"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Efficient production and delivery to meet your deadlines"
    },
    {
      icon: Globe,
      title: "Global Shipping",
      description: "Worldwide delivery with reliable logistics partners"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional value through our comprehensive capabilities and commitment to excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <IconComponent className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;