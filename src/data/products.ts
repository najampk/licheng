export interface ProductSpecifications {
  material: string;
  weight: string;
  dimensions: string;
  temperatureRange: string;
  countryOfOrigin: string;
  pressure?: string;
  voltage?: string;
  capacity?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: ProductSpecifications;
  images: string[];
  certifications: string[];
  availability: string;
  brand: string;
  tags: string[];
}

export const sampleProduct: Product = {
  id: "HMP-001",
  title: "Heavy Duty Hydraulic Excavator Main Pump",
  slug: "heavy-duty-hydraulic-excavator-main-pump",
  category: "Heavy Machinery Parts",
  description: "Professional grade hydraulic main pump designed for heavy-duty excavators. Features advanced hydraulic technology with superior durability and performance for demanding construction and mining applications.",
  features: [
    "High-pressure hydraulic system",
    "Corrosion-resistant coating",
    "Advanced sealing technology",
    "Low noise operation",
    "Energy efficient design",
    "Easy maintenance access"
  ],
  applications: [
    "Construction excavators",
    "Mining equipment",
    "Demolition machinery",
    "Road construction",
    "Foundation work",
    "Material handling"
  ],
  specifications: {
    material: "High-grade steel with anti-corrosion coating",
    weight: "85 kg",
    dimensions: "450mm x 350mm x 280mm",
    temperatureRange: "-20°C to +80°C",
    countryOfOrigin: "Germany",
    pressure: "350 bar maximum",
    capacity: "180 L/min"
  },
  images: [
    "/images/hydraulic-pump-1.jpg",
    "/images/hydraulic-pump-2.jpg",
    "/images/hydraulic-pump-3.jpg",
    "/images/hydraulic-pump-installation.jpg"
  ],
  certifications: [
    "ISO 9001:2015",
    "CE Marking",
    "ANSI B93.1",
    "SAE J1926"
  ],
  availability: "In Stock",
  brand: "HydroTech Pro",
  tags: [
    "hydraulic",
    "excavator",
    "pump",
    "heavy-duty",
    "construction",
    "mining"
  ]
};