import { useState, useEffect } from "react";
import { useSearch } from "wouter";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, CheckCircle } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, EMAIL, products } from "@/lib/data";
import { toast } from "sonner";

export default function Contact() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const preselectedProduct = params.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    product: preselectedProduct,
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setForm(prev => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in required fields (Name, Email, Message).");
      return;
    }
    setSending(true);

    // Build mailto link as fallback (static site)
    const subject = encodeURIComponent(`Inquiry: ${form.product || "Surveying Equipment"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nCountry: ${form.country}\nPhone: ${form.phone}\nProduct: ${form.product}\nQuantity: ${form.quantity}\n\nMessage:\n${form.message}`
    );

    // Save UTM params from URL if present
    const utmParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: utmParams.get("utm_source") || "",
      utm_medium: utmParams.get("utm_medium") || "",
      utm_campaign: utmParams.get("utm_campaign") || "",
    };

    // For a static site, we open mailto
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_self");

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-navy py-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container relative z-10">
            <span className="text-xs font-mono tracking-widest text-signal uppercase">Contact</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Inquiry Sent</h1>
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
            <h2 className="text-2xl font-bold text-navy mb-3">Thank You for Your Inquiry</h2>
            <p className="text-steel mb-6">
              Your email client should have opened with the inquiry details. If it didn't, 
              please send your inquiry directly to <a href={`mailto:${EMAIL}`} className="text-signal hover:underline">{EMAIL}</a>.
            </p>
            <p className="text-steel mb-8">
              For faster response, you can also reach us on WhatsApp:
            </p>
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
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <span className="text-xs font-mono tracking-widest text-signal uppercase">Contact</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Get a Quote
          </h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Fill out the form below or contact us directly via WhatsApp or email. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-cool-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-border rounded-sm p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Country</label>
                    <input
                      type="text"
                      value={form.country}
                      onChange={e => setForm({ ...form, country: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="text"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Quantity</label>
                    <input
                      type="text"
                      value={form.quantity}
                      onChange={e => setForm({ ...form, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                      placeholder="e.g. 5 sets"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Product of Interest</label>
                  <select
                    value={form.product}
                    onChange={e => setForm({ ...form, product: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal"
                  >
                    <option value="">Select a product (optional)</option>
                    <optgroup label="RTK GNSS Receivers">
                      {products.filter(p => p.category === "rtk").map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Total Stations">
                      {products.filter(p => p.category === "total-station").map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-cool-white focus:outline-none focus:border-signal resize-none"
                    placeholder="Please describe your requirements, including model preference, quantity, destination country, and any special needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-medium rounded-sm hover:bg-signal-hover transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <div className="bg-white border border-border rounded-sm p-6">
                <h3 className="text-lg font-bold text-navy mb-3">Quick Contact</h3>
                <p className="text-sm text-steel mb-4">
                  For faster response, reach us directly on WhatsApp or email.
                </p>
                <div className="space-y-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#25D366]/10 rounded-sm hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div>
                      <div className="text-sm font-medium text-navy">WhatsApp</div>
                      <div className="text-xs text-steel font-mono">+{WHATSAPP_NUMBER}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 p-3 bg-signal/10 rounded-sm hover:bg-signal/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-signal" />
                    <div>
                      <div className="text-sm font-medium text-navy">Email</div>
                      <div className="text-xs text-steel">{EMAIL}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="bg-navy rounded-sm p-6">
                <h3 className="text-white font-bold text-sm mb-3">What to Include</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-signal mt-0.5">1.</span>
                    Product model(s) you are interested in
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-signal mt-0.5">2.</span>
                    Quantity needed (sample or bulk)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-signal mt-0.5">3.</span>
                    Destination country for shipping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-signal mt-0.5">4.</span>
                    Package preference (unit only or full set)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-signal mt-0.5">5.</span>
                    Any special requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
