import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, EMAIL } from "@/lib/data";

export default function ThankYou() {
  return (
    <div>
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <h1 className="text-3xl font-bold text-white">Thank You</h1>
        </div>
      </section>

      <section className="py-20 bg-cool-white">
        <div className="container max-w-lg text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-navy mb-3">Your Inquiry Has Been Received</h2>
          <p className="text-steel mb-6">
            Thank you for your interest. We will review your inquiry and get back to you within 24 hours.
          </p>
          <p className="text-steel mb-8">
            For immediate assistance, contact us on WhatsApp or email us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-signal hover:underline">{EMAIL}</a>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-medium rounded-sm hover:bg-navy-light transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-sm hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
