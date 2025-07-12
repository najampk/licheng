import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Star, Trophy } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    { name: "ISO 9001:2015", type: "Quality Management" },
    { name: "ISO 14001", type: "Environmental Management" },
    { name: "CE Certification", type: "European Conformity" },
    { name: "SGS Verified", type: "Quality Assurance" }
  ];

  const clients = [
    { name: "Fortune 500 Manufacturing", industry: "Automotive" },
    { name: "Global Construction Corp", industry: "Construction" },
    { name: "Industrial Solutions Ltd", industry: "Heavy Industry" },
    { name: "Engineering Partners Inc", industry: "Engineering" },
    { name: "OEM Specialists", industry: "Manufacturing" },
    { name: "Supply Chain Leaders", industry: "Logistics" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Certifications & Clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide with internationally recognized certifications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-orange-500 mr-2" />
              <h3 className="text-2xl font-semibold text-black">Our Certifications</h3>
            </div>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <div className="font-semibold text-black">{cert.name}</div>
                      <div className="text-sm text-gray-600">{cert.type}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Clients */}
          <div>
            <div className="flex items-center mb-6">
              <Trophy className="h-6 w-6 text-orange-500 mr-2" />
              <h3 className="text-2xl font-semibold text-black">Trusted Clients</h3>
            </div>
            <div className="grid gap-4">
              {clients.map((client, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center">
                    <Star className="h-5 w-5 text-orange-500 mr-3" />
                    <div>
                      <div className="font-semibold text-black">{client.name}</div>
                      <Badge variant="outline" className="text-xs">{client.industry}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;