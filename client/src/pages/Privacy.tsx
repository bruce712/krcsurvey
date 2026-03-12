import { EMAIL } from "@/lib/data";

export default function Privacy() {
  return (
    <div>
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 text-sm mt-2">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-cool-white">
        <div className="container max-w-3xl">
          <div className="bg-white border border-border rounded-sm p-6 md:p-8 space-y-6 text-steel leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">1. Information We Collect</h2>
              <p>When you submit an inquiry through our contact form, we collect the information you provide, including your name, email address, company name, country, phone number, and message content. We may also collect basic usage data through analytics tools to improve our website.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide solely for the purpose of responding to your inquiry, providing quotations, and communicating about our products and services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">3. Cookies and Analytics</h2>
              <p>Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. This data is collected anonymously and helps us improve our website experience. You can disable cookies in your browser settings.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">4. Data Security</h2>
              <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">5. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${EMAIL}`} className="text-signal hover:underline">{EMAIL}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
