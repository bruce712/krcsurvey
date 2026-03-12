// ============================================================
// Design: "Precision Engineering" — Swiss Industrial Style
// Slate Navy (#0F1B2D) | Steel Gray (#64748B) | Signal Orange (#E8590C)
// Cool White (#F8FAFC) | DM Sans + Inter + JetBrains Mono
// ============================================================

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  rtkModels: string[];
  totalStationModels: string[];
  logo?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  brandSlug: string;
  category: "rtk" | "total-station";
  shortDescription: string;
  positioning: string;
  highlights: string[];
  applications: string[];
  packageOptions: string[];
  specs: Record<string, string>;
  faq: { q: string; a: string }[];
  image: string;
  gallery: string[];
  metaTitle: string;
  metaDescription: string;
}

export const WHATSAPP_NUMBER = "8613851920376";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "info@surveyequiphub.com";

export const brands: Brand[] = [
  {
    id: "hi-target",
    name: "Hi-Target",
    slug: "hi-target",
    description:
      "Hi-Target is one of China's leading GNSS and surveying instrument manufacturers, known for high-precision RTK receivers and integrated survey solutions used worldwide.",
    longDescription:
      "Hi-Target Navigation Technology Co., Ltd. is a publicly listed company based in Guangzhou, China, specializing in high-precision GNSS products, optical surveying instruments, and spatial information solutions. Their RTK receivers are widely adopted across Asia, Africa, the Middle East, and Latin America for land surveying, construction layout, and engineering measurement applications. Hi-Target products are recognized for stable performance, competitive pricing, and comprehensive after-sales support networks.",
    rtkModels: ["V200", "V300"],
    totalStationModels: [],
  },
  {
    id: "chcnav",
    name: "CHCNAV",
    slug: "chcnav",
    description:
      "CHCNAV (CHC Navigation) delivers professional GNSS and geospatial solutions with a strong international presence, serving survey professionals and construction teams globally.",
    longDescription:
      "CHCNAV (formerly CHC Navigation) is a Shanghai-based manufacturer of high-precision GNSS receivers, UAV mapping systems, and machine control solutions. The company has built a strong global dealer network and is known for its i-series RTK receivers that combine advanced satellite tracking with user-friendly field software. CHCNAV products are particularly popular among survey companies and construction contractors who require reliable centimeter-level positioning.",
    rtkModels: ["i73+", "i93"],
    totalStationModels: [],
  },
  {
    id: "south",
    name: "SOUTH",
    slug: "south",
    description:
      "SOUTH Surveying & Mapping Instrument Co. is a well-established Chinese brand offering a comprehensive range of RTK receivers and total stations for professional surveying applications.",
    longDescription:
      "SOUTH Surveying & Mapping Instrument Co., Ltd., headquartered in Guangzhou, is one of China's oldest and most recognized surveying instrument manufacturers. With decades of experience, SOUTH offers a full product line including GNSS RTK receivers, total stations, levels, and UAV systems. Their products are known for excellent cost-performance ratio and are widely distributed across developing markets in Africa, Southeast Asia, and South America.",
    rtkModels: ["G1", "G1 Plus"],
    totalStationModels: ["N7", "N40"],
  },
  {
    id: "kolida",
    name: "KOLIDA",
    slug: "kolida",
    description:
      "KOLIDA Instrument Co. provides reliable and cost-effective surveying solutions, with a strong product line of RTK receivers and total stations suitable for dealer supply.",
    longDescription:
      "KOLIDA Instrument Co., Ltd. is a Guangzhou-based manufacturer specializing in surveying and mapping instruments. Known for practical design and competitive pricing, KOLIDA products are popular among local distributors and dealers in emerging markets. Their K-series RTK receivers and KTS-series total stations offer solid field performance for routine survey work, construction layout, and engineering projects.",
    rtkModels: ["K5"],
    totalStationModels: ["KTS-462R10"],
  },
  {
    id: "foif",
    name: "FOIF",
    slug: "foif",
    description:
      "FOIF (Suzhou FOIF Co.) is a heritage Chinese surveying brand with a comprehensive range of total stations and GNSS receivers, backed by decades of manufacturing expertise.",
    longDescription:
      "FOIF Co., Ltd., based in Suzhou, is one of China's earliest surveying instrument manufacturers with a history spanning several decades. FOIF produces a wide range of products including GNSS RTK receivers, total stations, digital levels, and theodolites. Their instruments are known for robust build quality and are widely used in government surveying projects, infrastructure construction, and land management across Asia and Africa.",
    rtkModels: ["A90"],
    totalStationModels: ["RTS-112SR10"],
  },
];

export const products: Product[] = [
  // ===== RTK GNSS Receivers =====
  {
    id: "hi-target-v200",
    name: "Hi-Target V200",
    slug: "hi-target-v200",
    brand: "Hi-Target",
    brandSlug: "hi-target",
    category: "rtk",
    shortDescription:
      "Compact and reliable GNSS RTK receiver with 800 channels, ideal for daily field survey work and dealer stock.",
    positioning:
      "Practical RTK Solution for Dealers and Field Projects",
    highlights: [
      "800 channels for reliable satellite tracking",
      "Compact and lightweight design for easy field use",
      "Tilt compensation for faster measurement",
      "Long battery life for all-day operation",
      "Full constellation support: GPS, GLONASS, BeiDou, Galileo",
      "Suitable for dealer and distributor inquiry",
    ],
    applications: [
      "Land surveying",
      "Construction layout",
      "Topographic mapping",
      "Cadastral survey",
      "Dealer supply",
    ],
    packageOptions: [
      "Main unit (receiver) only",
      "Full set: receiver + controller + pole + carrying case",
      "Accessories available separately",
    ],
    specs: {
      Channels: "800",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo, QZSS, SBAS",
      "Static Accuracy (H)": "2.5mm + 0.5ppm",
      "Static Accuracy (V)": "5mm + 0.5ppm",
      "RTK Accuracy (H)": "8mm + 1ppm",
      "RTK Accuracy (V)": "15mm + 1ppm",
      "Tilt Compensation": "Yes, IMU-based",
      "Battery Life": "Up to 10 hours",
      "IP Rating": "IP67",
      Weight: "~1.1 kg",
      Communication: "Bluetooth, Wi-Fi, 4G, UHF radio",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set. We welcome both sample and bulk orders." },
      { q: "What is the lead time?", a: "Typically 3-7 business days depending on stock availability." },
      { q: "Is a full set package available?", a: "Yes, we offer full set packages including receiver, controller, survey pole, and carrying case." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies. Contact us for specific warranty terms." },
      { q: "Can you support dealer inquiry?", a: "Absolutely. We welcome dealer and distributor inquiries with competitive pricing." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/Sgr7K38cUFy2_91d8bc3f.png",
    gallery: [],
    metaTitle: "Hi-Target V200 RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about Hi-Target V200 RTK GNSS receiver. 800 channels, compact design, full set available. Fast quotation for dealers and survey teams.",
  },
  {
    id: "hi-target-v300",
    name: "Hi-Target V300",
    slug: "hi-target-v300",
    brand: "Hi-Target",
    brandSlug: "hi-target",
    category: "rtk",
    shortDescription:
      "Advanced GNSS RTK receiver with 1408 channels and enhanced IMU tilt compensation for professional surveying applications.",
    positioning:
      "Advanced RTK Solution for Professional Survey Teams",
    highlights: [
      "1408 channels for maximum satellite availability",
      "Advanced IMU tilt compensation for fast measurement",
      "Web-based remote management",
      "Rugged design for harsh field conditions",
      "Full constellation and frequency support",
      "Ideal for professional survey companies and large projects",
    ],
    applications: [
      "Professional land surveying",
      "Infrastructure construction",
      "Engineering measurement",
      "Mining survey",
      "Dealer and distributor supply",
    ],
    packageOptions: [
      "Main unit (receiver) only",
      "Full set: receiver + controller + pole + carrying case",
      "Base + rover configuration available",
    ],
    specs: {
      Channels: "1408",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo, QZSS, SBAS, NavIC",
      "Static Accuracy (H)": "2.5mm + 0.5ppm",
      "Static Accuracy (V)": "5mm + 0.5ppm",
      "RTK Accuracy (H)": "8mm + 0.5ppm",
      "RTK Accuracy (V)": "15mm + 0.5ppm",
      "Tilt Compensation": "Yes, advanced IMU",
      "Battery Life": "Up to 12 hours",
      "IP Rating": "IP68",
      Weight: "~1.2 kg",
      Communication: "Bluetooth, Wi-Fi, 4G/5G, UHF radio, NFC",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set packages are available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer and distributor inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/Qd1j7qhEhBbs_9e0e6a42.jpg",
    gallery: [],
    metaTitle: "Hi-Target V300 RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about Hi-Target V300 RTK GNSS receiver. 1408 channels, advanced IMU, full set available. Fast quotation for dealers and survey teams.",
  },
  {
    id: "chcnav-i73-plus",
    name: "CHCNAV i73+",
    slug: "chcnav-i73-plus",
    brand: "CHCNAV",
    brandSlug: "chcnav",
    category: "rtk",
    shortDescription:
      "Versatile GNSS RTK receiver from CHCNAV's popular i-series, offering reliable performance for survey and construction applications.",
    positioning:
      "Versatile RTK Solution for Survey and Construction",
    highlights: [
      "Full constellation tracking with high channel count",
      "Built-in tilt compensation",
      "Compact and ergonomic design",
      "Long battery life for extended field work",
      "Compatible with popular survey software",
      "Strong dealer support network",
    ],
    applications: [
      "Land surveying",
      "Construction stakeout",
      "Road and pipeline survey",
      "Topographic mapping",
      "Dealer supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with controller and accessories",
      "Custom configuration available",
    ],
    specs: {
      Channels: "1408",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo",
      "RTK Accuracy (H)": "8mm + 1ppm",
      "RTK Accuracy (V)": "15mm + 1ppm",
      "Tilt Compensation": "Yes",
      "Battery Life": "Up to 10 hours",
      "IP Rating": "IP67",
      Weight: "~1.0 kg",
      Communication: "Bluetooth, Wi-Fi, 4G, UHF",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set packages are available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/MSpQK6b6DVwV_11943f01.jpg",
    gallery: [],
    metaTitle: "CHCNAV i73+ RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about CHCNAV i73+ RTK GNSS receiver. Full constellation, tilt compensation, full set available. Fast quotation for dealers.",
  },
  {
    id: "chcnav-i93",
    name: "CHCNAV i93",
    slug: "chcnav-i93",
    brand: "CHCNAV",
    brandSlug: "chcnav",
    category: "rtk",
    shortDescription:
      "High-end GNSS RTK receiver from CHCNAV with advanced features for demanding professional survey applications.",
    positioning:
      "High-Performance RTK for Professional Applications",
    highlights: [
      "Premium satellite tracking performance",
      "Advanced IMU tilt compensation",
      "Robust build for extreme conditions",
      "Web-based remote monitoring",
      "Multi-frequency full constellation support",
      "Ideal for large-scale projects",
    ],
    applications: [
      "Professional surveying",
      "Large-scale construction",
      "Infrastructure projects",
      "Precision agriculture",
      "Dealer and distributor supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with controller and accessories",
      "Base + rover configuration",
    ],
    specs: {
      Channels: "1598",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo, QZSS, NavIC",
      "RTK Accuracy (H)": "8mm + 0.5ppm",
      "RTK Accuracy (V)": "15mm + 0.5ppm",
      "Tilt Compensation": "Yes, advanced IMU",
      "Battery Life": "Up to 14 hours",
      "IP Rating": "IP68",
      Weight: "~1.15 kg",
      Communication: "Bluetooth, Wi-Fi, 4G/5G, UHF, NFC",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set packages are available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/tQlARaR033qU_51e2b721.jpg",
    gallery: [],
    metaTitle: "CHCNAV i93 RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about CHCNAV i93 RTK GNSS receiver. 1598 channels, advanced IMU, full set available. Fast quotation for dealers.",
  },
  {
    id: "south-g1",
    name: "SOUTH G1 / G1 Plus",
    slug: "south-g1",
    brand: "SOUTH",
    brandSlug: "south",
    category: "rtk",
    shortDescription:
      "Popular and cost-effective GNSS RTK receiver from SOUTH, widely used by survey teams and dealers in emerging markets.",
    positioning:
      "Cost-Effective RTK for Dealers and Survey Teams",
    highlights: [
      "Excellent cost-performance ratio",
      "Reliable satellite tracking",
      "Lightweight and portable design",
      "Easy to operate with intuitive software",
      "Widely adopted in emerging markets",
      "Strong dealer supply demand",
    ],
    applications: [
      "Land surveying",
      "Construction layout",
      "Cadastral survey",
      "Topographic mapping",
      "Dealer and distributor supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with controller and pole",
      "Accessories available separately",
    ],
    specs: {
      Channels: "1408",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo",
      "RTK Accuracy (H)": "8mm + 1ppm",
      "RTK Accuracy (V)": "15mm + 1ppm",
      "Tilt Compensation": "Yes (G1 Plus)",
      "Battery Life": "Up to 10 hours",
      "IP Rating": "IP67",
      Weight: "~1.0 kg",
      Communication: "Bluetooth, Wi-Fi, 4G, UHF",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set packages are available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome with competitive pricing." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/IsuSCtkWIs9W_d6911e39.png",
    gallery: [],
    metaTitle: "SOUTH G1 / G1 Plus RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about SOUTH G1 / G1 Plus RTK GNSS receiver. Cost-effective, reliable, full set available. Fast quotation for dealers.",
  },
  {
    id: "kolida-k5",
    name: "KOLIDA K5",
    slug: "kolida-k5",
    brand: "KOLIDA",
    brandSlug: "kolida",
    category: "rtk",
    shortDescription:
      "Practical and affordable GNSS RTK receiver from KOLIDA, suitable for routine survey work and dealer stock supply.",
    positioning:
      "Affordable RTK for Routine Survey and Dealer Supply",
    highlights: [
      "Budget-friendly pricing for volume supply",
      "Solid field performance for daily work",
      "Compact and durable design",
      "Easy setup and operation",
      "Full constellation support",
      "Popular among local dealers",
    ],
    applications: [
      "Routine land surveying",
      "Construction stakeout",
      "Small to medium projects",
      "Dealer and distributor supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with controller and accessories",
      "K5 IMU version available",
    ],
    specs: {
      Channels: "1408",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo",
      "RTK Accuracy (H)": "8mm + 1ppm",
      "RTK Accuracy (V)": "15mm + 1ppm",
      "Tilt Compensation": "Optional (K5 IMU)",
      "Battery Life": "Up to 8 hours",
      "IP Rating": "IP67",
      Weight: "~1.0 kg",
      Communication: "Bluetooth, Wi-Fi, 4G, UHF",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set packages are available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/OKHnNA4wlKaE_9b37994c.png",
    gallery: [],
    metaTitle: "KOLIDA K5 RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about KOLIDA K5 RTK GNSS receiver. Affordable, practical, full set available. Fast quotation for dealers.",
  },
  {
    id: "foif-a90",
    name: "FOIF A90",
    slug: "foif-a90",
    brand: "FOIF",
    brandSlug: "foif",
    category: "rtk",
    shortDescription:
      "Reliable GNSS RTK receiver from FOIF with 1408 channels, combining heritage manufacturing quality with modern features.",
    positioning:
      "Reliable RTK from Heritage Manufacturer",
    highlights: [
      "1408 channels for comprehensive tracking",
      "Heritage brand with decades of experience",
      "Robust and field-proven design",
      "Permanent code activation",
      "Good value for money",
      "Suitable for government and commercial projects",
    ],
    applications: [
      "Government surveying projects",
      "Land management",
      "Infrastructure construction",
      "Engineering measurement",
      "Dealer supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with controller and accessories",
      "Custom configuration available",
    ],
    specs: {
      Channels: "1408",
      "Satellite Systems": "GPS, GLONASS, BeiDou, Galileo",
      "RTK Accuracy (H)": "8mm + 1ppm",
      "RTK Accuracy (V)": "15mm + 1ppm",
      "Tilt Compensation": "Yes",
      "Battery Life": "Up to 10 hours",
      "IP Rating": "IP67",
      Weight: "~1.1 kg",
      Communication: "Bluetooth, Wi-Fi, 4G, UHF",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set packages are available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/XVO2IQOnqZWi_f56415f6.jpg",
    gallery: [],
    metaTitle: "FOIF A90 RTK GNSS Receiver | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about FOIF A90 RTK GNSS receiver. 1408 channels, reliable, full set available. Fast quotation for dealers.",
  },
  // ===== Total Stations =====
  {
    id: "south-n7",
    name: "SOUTH N7",
    slug: "south-n7",
    brand: "SOUTH",
    brandSlug: "south",
    category: "total-station",
    shortDescription:
      "High-accuracy total station from SOUTH with reflectorless measurement capability, suitable for construction and engineering projects.",
    positioning:
      "Practical Total Station for Construction and Engineering",
    highlights: [
      "High angular accuracy for precise measurement",
      "Reflectorless EDM up to 800m",
      "Large color display with intuitive interface",
      "Dual-axis compensator",
      "Long battery life",
      "Competitive pricing for dealer supply",
    ],
    applications: [
      "Construction layout",
      "Engineering measurement",
      "Road and bridge survey",
      "Building survey",
      "Dealer and distributor supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with tripod and prism",
      "Accessories available separately",
    ],
    specs: {
      "Angular Accuracy": '2"',
      "EDM Range (Reflectorless)": "800m",
      "EDM Range (Single Prism)": "5000m",
      "EDM Accuracy": "±(2+2ppm·D)mm",
      Display: "Color LCD",
      "Dual-axis Compensator": "Yes",
      "Battery Life": "Up to 20 hours",
      "IP Rating": "IP66",
      Weight: "~5.6 kg",
      "Operating Temperature": "-20°C to +50°C",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set with tripod and prism is available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/IoJOwyP6bJC0_09729428.jpg",
    gallery: [],
    metaTitle: "SOUTH N7 Total Station | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about SOUTH N7 total station. 2\" accuracy, reflectorless 800m, full set available. Fast quotation for dealers.",
  },
  {
    id: "south-n40",
    name: "SOUTH N40",
    slug: "south-n40",
    brand: "SOUTH",
    brandSlug: "south",
    category: "total-station",
    shortDescription:
      "Versatile total station from SOUTH offering excellent value for routine survey and construction applications.",
    positioning:
      "Value Total Station for Survey and Construction",
    highlights: [
      "Good accuracy for routine measurement tasks",
      "Reflectorless EDM capability",
      "User-friendly operation system",
      "Compact and lightweight design",
      "Excellent cost-performance ratio",
      "Popular among dealers in emerging markets",
    ],
    applications: [
      "Construction layout",
      "Topographic survey",
      "Cadastral survey",
      "Small to medium projects",
      "Dealer supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with tripod and prism",
      "Accessories available",
    ],
    specs: {
      "Angular Accuracy": '2"',
      "EDM Range (Reflectorless)": "600m",
      "EDM Range (Single Prism)": "5000m",
      "EDM Accuracy": "±(2+2ppm·D)mm",
      Display: "Color LCD",
      "Dual-axis Compensator": "Yes",
      "Battery Life": "Up to 18 hours",
      "IP Rating": "IP66",
      Weight: "~5.4 kg",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set with tripod and prism is available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/ZntJfsjT7kwH_d27fcd18.webp",
    gallery: [],
    metaTitle: "SOUTH N40 Total Station | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about SOUTH N40 total station. Versatile, cost-effective, full set available. Fast quotation for dealers.",
  },
  {
    id: "kolida-kts-462r10",
    name: "KOLIDA KTS-462R10",
    slug: "kolida-kts-462r10",
    brand: "KOLIDA",
    brandSlug: "kolida",
    category: "total-station",
    shortDescription:
      "Affordable reflectorless total station from KOLIDA, designed for practical field work and dealer supply markets.",
    positioning:
      "Affordable Total Station for Field Work and Dealers",
    highlights: [
      "Budget-friendly pricing",
      "Reflectorless measurement capability",
      "Reliable performance for daily use",
      "Easy to learn and operate",
      "Compact design for easy transport",
      "Popular in dealer supply chains",
    ],
    applications: [
      "Construction layout",
      "Routine surveying",
      "Building measurement",
      "Small projects",
      "Dealer and distributor supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with tripod and prism",
      "Accessories available",
    ],
    specs: {
      "Angular Accuracy": '2"',
      "EDM Range (Reflectorless)": "1000m",
      "EDM Range (Single Prism)": "5000m",
      "EDM Accuracy": "±(2+2ppm·D)mm",
      Display: "Color LCD",
      "Dual-axis Compensator": "Yes",
      "Battery Life": "Up to 16 hours",
      "IP Rating": "IP66",
      Weight: "~5.5 kg",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/ITTBYkueBAl8_1a2e3c7d.png",
    gallery: [],
    metaTitle: "KOLIDA KTS-462R10 Total Station | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about KOLIDA KTS-462R10 total station. Affordable, reflectorless, full set available. Fast quotation for dealers.",
  },
  {
    id: "foif-rts-112sr10",
    name: "FOIF RTS-112SR10",
    slug: "foif-rts-112sr10",
    brand: "FOIF",
    brandSlug: "foif",
    category: "total-station",
    shortDescription:
      "Professional reflectorless total station from FOIF with high accuracy and robust build quality for demanding applications.",
    positioning:
      "Professional Total Station from Heritage Manufacturer",
    highlights: [
      "High angular accuracy",
      "Long-range reflectorless EDM",
      "Robust and durable construction",
      "Heritage brand reliability",
      "Comprehensive measurement functions",
      "Suitable for government and commercial projects",
    ],
    applications: [
      "Engineering measurement",
      "Infrastructure construction",
      "Government surveying projects",
      "Mining survey",
      "Dealer supply",
    ],
    packageOptions: [
      "Main unit only",
      "Full set with tripod and prism",
      "Custom configuration available",
    ],
    specs: {
      "Angular Accuracy": '2"',
      "EDM Range (Reflectorless)": "1000m",
      "EDM Range (Single Prism)": "5000m",
      "EDM Range (Reflective Sheet)": "800m",
      "EDM Accuracy": "±(2+2ppm·D)mm",
      Display: "Color LCD",
      "Dual-axis Compensator": "Yes",
      "Battery Life": "Up to 20 hours",
      "IP Rating": "IP66",
      Weight: "~5.8 kg",
    },
    faq: [
      { q: "What is the MOQ?", a: "Minimum order quantity is 1 set." },
      { q: "What is the lead time?", a: "Typically 3-7 business days." },
      { q: "Is a full set package available?", a: "Yes, full set available." },
      { q: "What about warranty?", a: "Standard manufacturer warranty applies." },
      { q: "Can you support dealer inquiry?", a: "Yes, dealer inquiries are welcome." },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/aUx8o7LUurv4_3c5b89f9.jpg",
    gallery: [],
    metaTitle: "FOIF RTS-112SR10 Total Station | Supplier & Price Inquiry",
    metaDescription:
      "Inquire about FOIF RTS-112SR10 total station. Professional grade, reflectorless, full set available. Fast quotation for dealers.",
  },
];

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brandSlug === brandSlug);
}

export function getProductsByCategory(category: "rtk" | "total-station"): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
