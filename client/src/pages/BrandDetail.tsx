import { Link, useParams, Redirect } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getBrandBySlug, getProductsByBrand, WHATSAPP_LINK } from "@/lib/data";

export default function BrandDetail() {
  const { slug } = useParams<{ slug: string }>();
  const brand = getBrandBySlug(slug || "");

  if (!brand) return <Redirect to="/404" />;

  const brandProducts = getProductsByBrand(brand.slug);
  const rtkProducts = brandProducts.filter(p => p.category === "rtk");
  const tsProducts = brandProducts.filter(p => p.category === "total-station");

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/brands" className="hover:text-signal transition-colors">Brands</Link>
            <span>/</span>
            <span className="text-white">{brand.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg font-mono">
                {brand.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{brand.name}</h1>
              <p className="text-white/60 text-sm mt-1">Surveying Equipment Supplier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Info */}
      <section className="py-12 bg-cool-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-navy mb-4">About {brand.name}</h2>
            <p className="text-steel leading-relaxed">{brand.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-xl font-bold text-navy mb-6">Available Models</h2>

          {rtkProducts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-mono tracking-wider text-steel uppercase mb-4">RTK GNSS Receivers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rtkProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group block bg-white border border-border rounded-sm overflow-hidden hover:border-signal/30 hover:shadow-md transition-all blueprint-corner"
                    >
                      <div className="aspect-[4/3] bg-secondary flex items-center justify-center p-6 overflow-hidden">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-signal/10 text-signal rounded-sm">RTK GNSS</span>
                      <h4 className="text-base font-bold text-navy mt-3 group-hover:text-signal transition-colors">{product.name}</h4>
                      <p className="text-sm text-steel mt-2 line-clamp-2">{product.shortDescription}</p>
                      <div className="mt-4 flex items-center gap-1 text-signal text-sm font-medium">
                        View Details <ArrowRight className="w-3 h-3" />
                      </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {tsProducts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-mono tracking-wider text-steel uppercase mb-4">Total Stations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tsProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group block bg-white border border-border rounded-sm overflow-hidden hover:border-blue-500/30 hover:shadow-md transition-all blueprint-corner"
                    >
                      <div className="aspect-[4/3] bg-secondary flex items-center justify-center p-6 overflow-hidden">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded-sm">TOTAL STATION</span>
                      <h4 className="text-base font-bold text-navy mt-3 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                      <p className="text-sm text-steel mt-2 line-clamp-2">{product.shortDescription}</p>
                      <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium">
                        View Details <ArrowRight className="w-3 h-3" />
                      </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 bg-cool-white">
        <div className="container">
          <h2 className="text-xl font-bold text-navy mb-6">Typical Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Land Surveying", "Construction Layout", "Engineering Projects", "Infrastructure", "Mining Survey", "Cadastral Survey", "Road & Bridge", "Dealer Supply"].map(app => (
              <div key={app} className="bg-white border border-border rounded-sm p-4 text-center">
                <span className="text-sm text-navy font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in {brand.name} Products?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Send us your inquiry for {brand.name} models. We provide fast quotation and practical package offers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-sm hover:bg-[#20BD5A] transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
