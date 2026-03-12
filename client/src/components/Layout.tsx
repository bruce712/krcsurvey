// Design: "Precision Engineering" — Swiss Industrial Style
// Global layout with top navigation, footer, and floating WhatsApp button
import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, MessageCircle, Mail, Phone } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, EMAIL } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Brands",
    href: "/brands",
    children: [
      { label: "Hi-Target", href: "/brands/hi-target" },
      { label: "CHCNAV", href: "/brands/chcnav" },
      { label: "SOUTH", href: "/brands/south" },
      { label: "KOLIDA", href: "/brands/kolida" },
      { label: "FOIF", href: "/brands/foif" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-sm font-mono">SE</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold tracking-tight leading-none ${scrolled ? "text-navy" : "text-navy"}`}>
              SurveyEquipHub
            </span>
            <span className={`text-[10px] tracking-widest uppercase ${scrolled ? "text-steel" : "text-steel"}`}>
              RTK & Total Station
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.label)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  location === link.href || (link.children && location.startsWith(link.href))
                    ? "text-signal"
                    : "text-navy hover:text-signal"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && dropdownOpen === link.label && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-white border border-border rounded-sm shadow-lg py-1 min-w-[180px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-navy hover:bg-secondary hover:text-signal transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-sm hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-signal text-white text-sm font-medium rounded-sm hover:bg-signal-hover transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-sm ${
                      location === link.href ? "text-signal bg-secondary" : "text-navy hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-steel hover:text-signal"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-signal text-white text-sm font-medium rounded-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-signal flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-sm font-mono">SE</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">SurveyEquipHub</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50">RTK & Total Station</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Reliable China supplier for RTK GNSS receivers and total stations. 
              Serving dealers, contractors, and survey teams worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-white/60 hover:text-signal transition-colors">All Products</Link></li>
              <li><Link href="/products?category=rtk" className="text-sm text-white/60 hover:text-signal transition-colors">RTK GNSS Receivers</Link></li>
              <li><Link href="/products?category=total-station" className="text-sm text-white/60 hover:text-signal transition-colors">Total Stations</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Brands</h4>
            <ul className="space-y-2">
              <li><Link href="/brands/hi-target" className="text-sm text-white/60 hover:text-signal transition-colors">Hi-Target</Link></li>
              <li><Link href="/brands/chcnav" className="text-sm text-white/60 hover:text-signal transition-colors">CHCNAV</Link></li>
              <li><Link href="/brands/south" className="text-sm text-white/60 hover:text-signal transition-colors">SOUTH</Link></li>
              <li><Link href="/brands/kolida" className="text-sm text-white/60 hover:text-signal transition-colors">KOLIDA</Link></li>
              <li><Link href="/brands/foif" className="text-sm text-white/60 hover:text-signal transition-colors">FOIF</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-signal transition-colors">
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-signal" />
                <a href={`mailto:${EMAIL}`} className="text-sm text-white/60 hover:text-signal transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} SurveyEquipHub. All rights reserved.
            </p>
            <p className="text-[10px] text-white/30 mt-1">
              All brand names, product names, and trademarks are the property of their respective owners. SurveyEquipHub is an independent supplier, not an authorized distributor of any brand.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 bg-white text-navy text-xs font-medium px-3 py-1.5 rounded-sm shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-18">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
