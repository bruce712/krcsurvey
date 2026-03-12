import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Globe, Package, Zap, Shield } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/about-team-h38NmurauSTUfKjbLqr75W.webp";
const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663320372087/Ca77yy5uTvFN5bEDcMT5et/warehouse-supply-hB5TfyJzWCv52d5uNaUHy9.webp";

const values = [
  { icon: Globe, title: "Global Reach", desc: "We serve dealers, contractors, and survey teams across 50+ countries in Africa, Southeast Asia, the Middle East, Latin America, and beyond." },
  { icon: Package, title: "Multi-Brand Selection", desc: "Access mainstream Chinese surveying brands in one place. Compare models, request quotations, and find the right equipment for your needs." },
  { icon: Zap, title: "Fast Response", desc: "We prioritize quick communication. Expect quotation responses within 24 hours through WhatsApp, email, or our contact form." },
  { icon: Shield, title: "Practical Support", desc: "From model recommendation to package configuration, we provide practical guidance to help you make informed purchasing decisions." },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <span className="text-xs font-mono tracking-widest text-signal uppercase">About Us</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            About SurveyEquipHub
          </h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Your reliable partner for sourcing professional surveying equipment from China.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-cool-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-navy mb-4">Who We Are</h2>
              <div className="space-y-4 text-steel leading-relaxed">
                <p>
                  SurveyEquipHub is a China-based supplier specializing in professional surveying equipment, 
                  including RTK GNSS receivers and total stations from mainstream Chinese manufacturers.
                </p>
                <p>
                  We work with well-known brands such as Hi-Target, CHCNAV, SOUTH, KOLIDA, and FOIF, 
                  providing inquiry and supply services for dealers, contractors, and survey teams worldwide.
                </p>
                <p>
                  Our goal is to make it easy for international buyers to find, compare, and source 
                  high-quality surveying equipment from China with transparent communication and practical support.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden"
            >
              <img src={ABOUT_IMG} alt="SurveyEquipHub showroom" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-steel uppercase">Our Values</span>
            <h2 className="text-2xl font-bold text-navy mt-2">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-white border border-border rounded-sm"
              >
                <div className="w-10 h-10 bg-signal/10 rounded-sm flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5 text-signal" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{v.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse */}
      <section className="py-16 bg-cool-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden order-2 lg:order-1"
            >
              <img src={WAREHOUSE_IMG} alt="Equipment warehouse" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl font-bold text-navy mb-4">Supply Capability</h2>
              <div className="space-y-4 text-steel leading-relaxed">
                <p>
                  We maintain close relationships with major Chinese surveying equipment manufacturers 
                  and can provide competitive pricing for both sample and bulk orders.
                </p>
                <p>
                  Whether you need a single unit for evaluation or a container load for your dealer network, 
                  we can accommodate your requirements with flexible package configurations.
                </p>
                <p>
                  Our typical lead time is 3-7 business days, with shipping support to destinations worldwide 
                  via air freight, sea freight, or express courier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Source Equipment?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Contact us today for pricing, availability, and model recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
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
