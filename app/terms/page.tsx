export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

        <div className="prose prose-sm max-w-none text-muted space-y-6">
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">1. About Enhanced Wellbeing</h2>
            <p>Enhanced Wellbeing operates enhancedwellbeing.co, an Australian telehealth clinic providing personalised treatment programs for weight management, hair restoration, skin rejuvenation, and sexual health. All services require a consultation with an AHPRA-registered practitioner.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">2. Eligibility</h2>
            <p>You must be at least 18 years of age and an Australian resident to use our services. By using our services, you confirm that the information you provide is accurate and complete.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">3. Telehealth Services</h2>
            <p>Our services are delivered via telehealth. All prescriptions are issued by AHPRA-registered practitioners following a real-time consultation. Enhanced Wellbeing does not guarantee that a prescription will be issued; this is at the clinical discretion of the treating practitioner.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">4. Pricing and Payment</h2>
            <p>All prices are displayed in Australian Dollars (AUD). Subscription payments are processed via Stripe. Your subscription covers the full program including consultations, medications, and delivery. Pricing may vary by treatment category.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">5. Cancellation and Refunds</h2>
            <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. Refunds are considered on a case-by-case basis. Contact hello@enhancedwellbeing.co for refund requests.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">6. Limitation of Liability</h2>
            <p>Enhanced Wellbeing provides a platform connecting patients with qualified practitioners and pharmacy partners. We are not liable for clinical outcomes, adverse reactions, or individual treatment results. All medical decisions are made by the treating practitioner.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">7. Governing Law</h2>
            <p>These terms are governed by the laws of Queensland, Australia.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">8. Contact</h2>
            <p>Enhanced Wellbeing<br />Email: hello@enhancedwellbeing.co</p>
          </section>
        </div>
      </div>
    </div>
  );
}
