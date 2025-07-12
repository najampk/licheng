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
  videos?: string[];
  certifications: string[];
  availability: string;
  brand: string;
  tags: string[];
}

export const longReachArmProduct: Product = {
  id: "HMP-002",
  title: "Long Reach Excavator Arm and Boom – Demolition & Dredging",
  slug: "long-reach-excavator-arm-boom",
  category: "Heavy Machinery Parts",
  description:
    "Engineered for precision in demolition and dredging, this long reach arm and boom assembly offers optimized performance for high-rise demolition and waterway maintenance. Built using high-grade steel and includes all essential components for excavator compatibility.",
  features: [
    "Two-piece (TB) and three-piece configurations available",
    "Applicable to all excavator models with OEM service",
    "Optimized materials: Q345B, Q690D, Weldox",
    "Standard package includes bucket, coupling, bucket cylinder, oil hoses, pins, lubrication system",
    "Heavy-duty forging/casting construction",
    "Grounded manufacturing process aligned with global standards"
  ],
  applications: [
    "High-rise demolition",
    "Waterway dredging",
    "Concrete breaking",
    "Highway slope maintenance",
    "Sand and earth excavation",
    "General construction and mining tasks"
  ],
  specifications: {
    material: "Q345B / Q690D / Weldox",
    weight: "50,000 kg",
    dimensions: "10X10X10 cm (pack size)",
    temperatureRange: "-20°C to +80°C",
    countryOfOrigin: "Fujian, China",
    pressure: undefined,
    voltage: undefined,
    capacity: undefined
  },
  images: [
    "https://s.alicdn.com/@sc04/kf/Ha2d40e9b38bd4290ac05c66609ae4bfaX.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/H3e1cfe941ba742f2a9f11422b5e5457b5.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/H7bb2f31272ff433abeb686ffff467b461.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/H30526e87a1074fa781bcdf8b2ec035f7f.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/H37e97288a1f3426aa67d9b1cb69b6d9cx.jpg_720x720q50.jpg"
  ],
  videos: [
    "https://gv.videocdn.alibaba.com/4f4e1c368ac918af/a0e3ac6885a55ee8/20240527_f14a96c61bc93d16_464177076636_mp4_264_ld_unlimit_taobao.mp4"
  ],
  certifications: [
    "Testing machines report",
    "Surface hardness HRC52-58",
    "Material: 42Mn2",
    "Hardness depth: 8–12"
  ],
  availability: "In Stock",
  brand: "Licheng Machinery",
  tags: [
    "excavator",
    "long arm",
    "demolition",
    "dredging",
    "mining",
    "construction"
  ]
};

export const slewingBearingProduct: Product = {
  id: "SBP-301",
  title: "Excavator Slewing Bearing for E70B / E120B / 365B / E320D",
  slug: "excavator-slewing-bearing-e70b-e320d",
  category: "Heavy Machinery Parts",
  description:
    "High-quality excavator slewing bearing designed for models E70B, E120B, 365B, and E320D. Built to deliver reliable performance in construction and mining applications with long-lasting durability.",
  features: [
    "Precision-engineered for E70B, E120B, 365B, and E320D excavators",
    "High load-bearing capacity and smooth rotation",
    "Certified to ISO 9001 international quality standards",
    "1-year warranty with video technical support",
    "Robust design ensures long operational life",
    "Cost-effective upgrade with MOQ of 1 PC"
  ],
  applications: [
    "Construction machinery",
    "Mining operations",
    "Building material shops",
    "Farms and agricultural machinery",
    "Machinery repair shops",
    "Retail and energy industries"
  ],
  specifications: {
    material: "High-strength steel",
    weight: "270 kg",
    dimensions: "Custom fit for listed models",
    temperatureRange: "-30°C to +80°C",
    countryOfOrigin: "Fujian, China"
  },
  images: [
    "https://s.alicdn.com/@sc04/kf/Hfa45233b8dd74311b09f704154a5cdff4.png_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/He413c2f15035472bab7f689ecf6f3d45H.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/Hc19edacfcfce420d931a5fa26fd1f1c7V.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/H6004d413e1fe4c9893efb9982eafc3b6f.jpg_720x720q50.jpg",
    "https://s.alicdn.com/@sc04/kf/H8494158973714f8db3078885a3e150f22.jpg_720x720q50.jpg"
  ],
  videos: [
    "https://gv.videocdn.alibaba.com/icbu_vod_video/video_target/gv93-d038b165-a1bf917b-93b8dcd9-5d69/trans/a829c71e-49b4-4839-af53-8464687911db-h264-sd.mp4"
  ],
  certifications: ["ISO 9001"],
  availability: "In Stock",
  brand: "Licheng Parts",
  tags: [
    "slewing bearing",
    "excavator part",
    "E70B",
    "E120B",
    "E320D",
    "construction",
    "mining",
    "crawler"
  ]
};


// ✅ Combine both into one array
export const allProducts: Product[] = [longReachArmProduct, slewingBearingProduct];

// ✅ Filter by category example
export const heavyMachineryProducts = allProducts.filter(
  (product) => product.category === "Heavy Machinery Parts"
);
