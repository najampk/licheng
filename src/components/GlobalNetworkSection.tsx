import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Truck, Users } from "lucide-react";

const GlobalNetworkSection = () => {
  const regions = [
    { name: "Asia Pacific", countries: ["China", "Japan", "South Korea", "Singapore"] },
    { name: "Europe", countries: ["Germany", "UK", "France", "Netherlands"] },
    { name: "Americas", countries: ["USA", "Canada", "Brazil", "Mexico"] },
    { name: "Middle East & Africa", countries: ["UAE", "Saudi Arabia", "South Africa"] }
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "1000+", label: "Global Clients" },
    { icon: Truck, value: "99%", label: "On-Time Delivery" },
    { icon: MapPin, value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Global Network</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serving customers worldwide with reliable supply chain solutions
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <IconComponent className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Regions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">{region.name}</h3>
                <div className="space-y-2">
                  {region.countries.map((country, idx) => (
                    <Badge key={idx} variant="outline" className="mr-2 mb-2">
                      {country}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;