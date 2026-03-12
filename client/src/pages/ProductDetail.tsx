import { Link, useParams, Redirect } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronRight, HelpCircle, Package, CheckCircle } from "lucide-react";
import { getProductBySlug, WHATSAPP_LINK } from "@/lib/data";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) return <Redirect to="/404" />;

  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in ${product.name}. Could you provide pricing and availability?`);

  return (
    <div>
      {/* Breadcrumb + Header */}
      <section className="bg-navy py-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 flex-wrap">
            <Link href="/products" className="hover:text-signal transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/brands/${product.brandSlug}`} className="hover:text-signal transition-colors">{product.brand}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{product.name}</span>
          </div>
          <div className="flex items-start gap-4">
            <div>
              <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm inline-block mb-2 ${
                product.category === "rtk" ? "bg-signal/20 text-signal" : "bg-blue-500/20 text-blue-400"
              }`}>
                {product.category === "rtk" ? "RTK GNSS RECEIVER" : "TOTAL STATION"}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
              <p className="text-white/60 text-sm mt-1 font-mono">{product.brand} | {product.positioning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-cool-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-border rounded-sm p-8 flex items-center justify-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[400px] object-contain"
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-white border border-border rounded-sm p-6"
              >
                <h2 className="text-lg font-bold text-navy mb-3">Overview</h2>
                <p className="text-steel leading-relaxed">{product.shortDescription}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-border rounded-sm p-6"
              >
                <h2 className="text-lg font-bold text-navy mb-4">Key Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                      <span className="text-sm text-steel">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-border rounded-sm p-6 blueprint-corner"
              >
                <h2 className="text-lg font-bold text-navy mb-4">Technical Specifications</h2>
                <div className="divide-y divide-border">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between py-3">
                      <span className="text-sm text-steel">{key}</span>
                      <span className="text-sm font-mono text-navy font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-border rounded-sm p-6"
              >
                <h2 className="text-lg font-bold text-navy mb-4">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map(app => (
                    <span key={app} className="text-xs bg-secondary text-navy px-3 py-1.5 rounded-sm">{app}</span>
                  ))}
                </div>
              </motion.div>

              {/* Package Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-border rounded-sm p-6"
              >
                <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-signal" />
                  Package Options
                </h2>
                <ul className="space-y-2">
                  {product.packageOptions.map((opt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                      <span className="text-signal mt-1">&#8226;</span>
                      {opt}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white border border-border rounded-sm p-6"
              >
                <h2 className="text-lg font-bold text-navy mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {product.faq.map((item, i) => (
                    <details key={i} className="group border border-border rounded-sm">
                      <summary className="flex items-center justify-between p-4 cursor-pointer text-sm text-navy font-medium hover:text-signal transition-colors">
                        {item.q}
                        <HelpCircle className="w-4 h-4 text-steel group-open:text-signal shrink-0 ml-4" />
                      </summary>
                      <div className="px-4 pb-4 text-sm text-steel leading-relaxed border-t border-border pt-3">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Sticky Inquiry Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Inquiry Card */}
                <div className="bg-white border border-border rounded-sm p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Inquiry for {product.name}</h3>
                  <p className="text-sm text-steel mb-6">
                    Get pricing, availability, and package options. We typically respond within 24 hours.
                  </p>

                  <div className="space-y-3">
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`${WHATSAPP_LINK}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white font-medium rounded-sm hover:bg-[#20BD5A] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="bg-navy rounded-sm p-5">
                  <h4 className="text-white font-bold text-sm mb-3">Quick Specs</h4>
                  <div className="space-y-2">
                    {Object.entries(product.specs).slice(0, 5).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-white/50">{key}</span>
                        <span className="text-white font-mono">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Link */}
                <Link
                  href={`/brands/${product.brandSlug}`}
                  className="block bg-white border border-border rounded-sm p-4 hover:border-signal/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center">
                      <span className="text-navy font-bold text-xs font-mono">
                        {product.brand.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-navy group-hover:text-signal transition-colors">{product.brand}</div>
                      <div className="text-xs text-steel">View all models</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
