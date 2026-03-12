import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brands, getProductsByBrand } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Brands() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <span className="text-xs font-mono tracking-widest text-signal uppercase">Our Brands</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Surveying Equipment Brands
          </h1>
          <p className="text-white/60 mt-3 max-w-xl">
            We supply mainstream Chinese surveying equipment brands. Browse by brand to find the right models for your needs.
          </p>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="py-16 bg-cool-white">
        <div className="container">
          <div className="space-y-6">
            {brands.map((brand, i) => {
              const brandProducts = getProductsByBrand(brand.slug);
              const rtkProducts = brandProducts.filter(p => p.category === "rtk");
              const tsProducts = brandProducts.filter(p => p.category === "total-station");

              return (
                <motion.div
                  key={brand.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white border border-border rounded-sm p-6 md:p-8 blueprint-corner"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center shrink-0">
                      <span className="text-navy font-bold text-lg font-mono">
                        {brand.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-navy">{brand.name}</h2>
                      <p className="text-steel text-sm mt-2 leading-relaxed max-w-2xl">
                        {brand.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4">
                        {brand.rtkModels.length > 0 && (
                          <div>
                            <span className="text-xs font-mono tracking-wider text-steel uppercase">RTK Models:</span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {brand.rtkModels.map(m => (
                                <span key={m} className="text-xs bg-signal/10 text-signal px-2 py-0.5 rounded-sm font-mono">{m}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        {brand.totalStationModels.length > 0 && (
                          <div>
                            <span className="text-xs font-mono tracking-wider text-steel uppercase">Total Stations:</span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {brand.totalStationModels.map(m => (
                                <span key={m} className="text-xs bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-sm font-mono">{m}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <Link
                        href={`/brands/${brand.slug}`}
                        className="inline-flex items-center gap-2 mt-5 text-signal text-sm font-medium hover:gap-3 transition-all"
                      >
                        View Models <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
