import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Building2, Mountain, Ruler, Compass, Factory } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

const RTK_FIELD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/rtk-field-scene-a7XmsHHNoBhPCS2LDrtYdb.webp";
const TS_FIELD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/total-station-field-ducXX55iuQQaLAUCaDV7Vf.webp";

const solutions = [
  {
    icon: MapPin,
    title: "Land Surveying & Cadastral",
    desc: "RTK GNSS receivers provide centimeter-level accuracy for boundary surveys, land registration, and parcel mapping. Ideal for government land departments and private survey firms.",
    recommended: ["Hi-Target V200", "SOUTH G1", "KOLIDA K5"],
    image: RTK_FIELD,
  },
  {
    icon: Building2,
    title: "Construction Layout & Stakeout",
    desc: "Both RTK receivers and total stations are essential for construction layout, building positioning, and as-built surveys. Full-set packages ensure immediate field deployment.",
    recommended: ["CHCNAV i73+", "SOUTH N7", "KOLIDA KTS-462R10"],
    image: TS_FIELD,
  },
  {
    icon: Mountain,
    title: "Topographic Mapping",
    desc: "High-channel RTK receivers with tilt compensation enable efficient topographic data collection across varied terrain. Suitable for mapping projects of all scales.",
    recommended: ["Hi-Target V300", "CHCNAV i93", "FOIF A90"],
    image: RTK_FIELD,
  },
  {
    icon: Ruler,
    title: "Engineering Measurement",
    desc: "Total stations with reflectorless EDM capability provide precise angle and distance measurement for infrastructure, tunnels, and precision engineering projects.",
    recommended: ["SOUTH N7", "FOIF RTS-112SR10", "SOUTH N40"],
    image: TS_FIELD,
  },
  {
    icon: Compass,
    title: "Road & Bridge Survey",
    desc: "Combination of RTK and total station for road alignment, bridge construction, and highway engineering. We can recommend the right model mix for your project scale.",
    recommended: ["Hi-Target V300", "SOUTH N7"],
    image: RTK_FIELD,
  },
  {
    icon: Factory,
    title: "Dealer & Distributor Supply",
    desc: "We support local dealers and distributors with competitive pricing, flexible MOQ, and multi-brand selection. Build your inventory with mainstream Chinese surveying brands.",
    recommended: ["All brands available"],
    image: TS_FIELD,
  },
];

export default function Solutions() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <span className="text-xs font-mono tracking-widest text-signal uppercase">Solutions</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Application Solutions
          </h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Find the right surveying equipment for your specific application. We provide model recommendations based on your project requirements.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-cool-white">
        <div className="container">
          <div className="space-y-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <sol.icon className="w-5 h-5 text-signal" />
                      <h2 className="text-xl font-bold text-navy">{sol.title}</h2>
                    </div>
                    <p className="text-steel leading-relaxed mb-4">{sol.desc}</p>
                    <div>
                      <span className="text-xs font-mono tracking-wider text-steel uppercase">Recommended Models:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {sol.recommended.map(m => (
                          <span key={m} className="text-xs bg-signal/10 text-signal px-2 py-1 rounded-sm font-mono">{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Which Model to Choose?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Tell us about your project requirements and we will recommend the most suitable models and package options.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors">
              Get Recommendation <ArrowRight className="w-4 h-4" />
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
