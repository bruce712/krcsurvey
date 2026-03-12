import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { products, brands } from "@/lib/data";

export default function Products() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [brandFilter, setBrandFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (category !== "all" && p.category !== category) return false;
      if (brandFilter !== "all" && p.brandSlug !== brandFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
      }
      return true;
    });
  }, [category, brandFilter, searchQuery]);

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <span className="text-xs font-mono tracking-widest text-signal uppercase">Product Catalog</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Surveying Equipment
          </h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Browse our range of RTK GNSS receivers and total stations. Filter by category or brand to find the right model.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 bg-cool-white">
        <div className="container">
          {/* Filter bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white border border-border rounded-sm">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="px-4 py-2 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
            >
              <option value="all">All Categories</option>
              <option value="rtk">RTK GNSS Receivers</option>
              <option value="total-station">Total Stations</option>
            </select>

            {/* Brand */}
            <select
              value={brandFilter}
              onChange={e => setBrandFilter(e.target.value)}
              className="px-4 py-2 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
            >
              <option value="all">All Brands</option>
              {brands.map(b => (
                <option key={b.id} value={b.slug}>{b.name}</option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="text-sm text-steel mb-6">
            Showing <span className="font-mono text-navy font-medium">{filtered.length}</span> products
          </p>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.3) }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block bg-white border border-border rounded-sm overflow-hidden hover:border-signal/30 hover:shadow-md transition-all blueprint-corner"
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm ${
                        product.category === "rtk"
                          ? "bg-signal/10 text-signal"
                          : "bg-blue-500/10 text-blue-600"
                      }`}>
                        {product.category === "rtk" ? "RTK GNSS" : "TOTAL STATION"}
                      </span>
                      <span className="text-xs text-steel font-mono">{product.brand}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy group-hover:text-signal transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-steel mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Quick specs */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
                        <span key={key} className="text-[10px] font-mono bg-secondary text-steel-light px-2 py-0.5 rounded-sm">
                          {key}: {val}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-signal text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-steel text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => { setCategory("all"); setBrandFilter("all"); setSearchQuery(""); }}
                className="mt-4 text-signal text-sm font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
