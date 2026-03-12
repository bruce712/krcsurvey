import { EMAIL } from "@/lib/data";

export default function Terms() {
  return (
    <div>
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/60 text-sm mt-2">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-cool-white">
        <div className="container max-w-3xl">
          <div className="bg-white border border-border rounded-sm p-6 md:p-8 space-y-6 text-steel leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">1. About This Website</h2>
              <p>SurveyEquipHub is an independent supplier website providing inquiry and supply services for surveying equipment. We are not an authorized distributor or official representative of any brand mentioned on this website. All brand names, product names, and trademarks are the property of their respective owners.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">2. Product Information</h2>
              <p>Product specifications, descriptions, and images on this website are provided for reference purposes only. While we strive to keep information accurate and up-to-date, specifications may vary between production batches. Please confirm exact specifications with us before placing an order.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">3. Pricing and Orders</h2>
              <p>Prices are not listed on this website. All pricing is provided through direct quotation based on your specific requirements, including model, quantity, package configuration, and destination. A quotation does not constitute a binding offer until confirmed by both parties.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">4. Warranty and After-Sales</h2>
              <p>Warranty terms are subject to the specific product and manufacturer policy. Please inquire about warranty details before placing an order. We will communicate applicable warranty terms clearly during the quotation process.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">5. Limitation of Liability</h2>
              <p>SurveyEquipHub shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or the products supplied. Our liability is limited to the value of the products ordered.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">6. Contact</h2>
              <p>For any questions regarding these terms, please contact us at <a href={`mailto:${EMAIL}`} className="text-signal hover:underline">{EMAIL}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
