// Design: "Precision Engineering" — Swiss Industrial Style
// Home page: Hero, Categories, Featured Brands, Featured Models, Why Choose Us, FAQ, CTA
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Satellite, Target, Package, Users, Zap, HelpCircle, MessageCircle, ChevronRight } from "lucide-react";
import { brands, products, WHATSAPP_LINK } from "@/lib/data";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/hero-banner-Z5dvotCoaDsW9mcAkqwJKK.webp";
const RTK_FIELD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/rtk-field-scene-a7XmsHHNoBhPCS2LDrtYdb.webp";
const TS_FIELD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/total-station-field-ducXX55iuQQaLAUCaDV7Vf.webp";
const WAREHOUSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/warehouse-supply-hB5TfyJzWCv52d5uNaUHy9.webp";

const categories = [
  {
    title: "RTK GNSS Receivers",
    desc: "High-precision satellite positioning systems for land surveying, construction, and engineering.",
    icon: Satellite,
    image: RTK_FIELD,
    href: "/products?category=rtk",
  },
  {
    title: "Total Stations",
    desc: "Optical/electronic instruments for precise angle and distance measurement in the field.",
    icon: Target,
    image: TS_FIELD,
    href: "/products?category=total-station",
  },
  {
    title: "Full Set Packages",
    desc: "Complete equipment sets including receiver/station, controller, accessories, and carrying case.",
    icon: Package,
    image: WAREHOUSE,
    href: "/contact",
  },
];

const whyChooseUs = [
  {
    icon: Package,
    title: "Multi-Brand Selection",
    desc: "Compare mainstream RTK and total station models in one place. Hi-Target, CHCNAV, SOUTH, KOLIDA, FOIF.",
  },
  {
    icon: Target,
    title: "Practical Full-Set Packages",
    desc: "Support for main unit, controller, accessories, and carrying case — ready for field deployment.",
  },
  {
    icon: Zap,
    title: "Fast Inquiry Response",
    desc: "Quick quotation through WhatsApp and contact form. Typical response within 24 hours.",
  },
  {
    icon: Users,
    title: "Dealer & Project Friendly",
    desc: "Suitable for local distributors, contractors, and survey companies. Flexible model recommendation.",
  },
];

const faqs = [
  {
    q: "What brands do you supply?",
    a: "We supply mainstream Chinese surveying equipment brands including Hi-Target, CHCNAV, SOUTH, KOLIDA, and FOIF.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ is typically 1 set. We welcome both sample orders and bulk inquiries.",
  },
  {
    q: "Do you offer full set packages?",
    a: "Yes, we offer complete packages including the main unit, controller, survey pole, tripod, and carrying case.",
  },
  {
    q: "What is the typical lead time?",
    a: "Standard lead time is 3-7 business days depending on model availability and order quantity.",
  },
  {
    q: "Do you support dealer and distributor inquiries?",
    a: "Absolutely. We welcome dealer and distributor inquiries with competitive pricing for volume orders.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm text-white/80 text-xs font-mono tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 bg-signal rounded-full" />
              RELIABLE CHINA SUPPLIER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              RTK & Total Station
              <br />
              <span className="text-signal">Supply from China</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg"
            >
              Full-set solutions for dealers, contractors, and survey teams worldwide. 
              Compare mainstream models and get fast quotation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-sm hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-8 text-white/50"
            >
              <div>
                <div className="text-2xl font-bold text-white font-mono">5+</div>
                <div className="text-xs uppercase tracking-wider">Brands</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-white font-mono">10+</div>
                <div className="text-xs uppercase tracking-wider">Models</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-xs uppercase tracking-wider">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-20 bg-cool-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-steel uppercase">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Surveying Equipment Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link href={cat.href} className="group block">
                  <div className="relative overflow-hidden rounded-sm blueprint-corner bg-white border border-border">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <cat.icon className="w-5 h-5 text-signal" />
                        <h3 className="text-lg font-bold text-navy">{cat.title}</h3>
                      </div>
                      <p className="text-sm text-steel leading-relaxed">{cat.desc}</p>
                      <div className="mt-4 flex items-center gap-1 text-signal text-sm font-medium group-hover:gap-2 transition-all">
                        Explore <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED BRANDS ===== */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-steel uppercase">Trusted Brands</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Mainstream Brands We Supply
            </h2>
            <p className="text-steel mt-3 max-w-xl mx-auto">
              We provide inquiry and supply support for the following well-known Chinese surveying equipment brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group block p-6 bg-white border border-border rounded-sm hover:border-signal/30 hover:shadow-md transition-all text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-secondary rounded-sm flex items-center justify-center">
                    <span className="text-navy font-bold text-sm font-mono">
                      {brand.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy text-sm group-hover:text-signal transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-steel mt-1">
                    {brand.rtkModels.length > 0 && `RTK: ${brand.rtkModels.join(", ")}`}
                    {brand.rtkModels.length > 0 && brand.totalStationModels.length > 0 && " | "}
                    {brand.totalStationModels.length > 0 && `TS: ${brand.totalStationModels.join(", ")}`}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED MODELS ===== */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-signal uppercase">Featured Models</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Popular Models for Inquiry
            </h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto">
              Browse our most inquired models. Click any model to view details and request a quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.slice(0, 8).map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block bg-navy-light border border-white/10 rounded-sm overflow-hidden hover:border-signal/40 transition-all"
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-white/5 flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm ${
                        product.category === "rtk"
                          ? "bg-signal/20 text-signal"
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {product.category === "rtk" ? "RTK GNSS" : "TOTAL STATION"}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-base group-hover:text-signal transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-1 font-mono">{product.brand}</p>
                    <p className="text-white/40 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-signal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-cool-white grid-pattern">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-steel uppercase">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Why Choose SurveyEquipHub
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4 p-6 bg-white border border-border rounded-sm"
              >
                <div className="w-10 h-10 bg-signal/10 rounded-sm flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-signal" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-steel uppercase">FAQ</span>
            <h2 className="text-3xl font-bold text-navy mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-white border border-border rounded-sm"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-navy font-medium text-sm hover:text-signal transition-colors">
                  {faq.q}
                  <HelpCircle className="w-4 h-4 text-steel group-open:text-signal transition-colors shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-steel leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Quotation?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Send us your inquiry and we will reply with a practical offer. 
            We support WhatsApp, email, and contact form.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-sm hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
