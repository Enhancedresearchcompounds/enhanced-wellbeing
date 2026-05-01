export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

        <div className="prose prose-sm max-w-none text-muted space-y-6">
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, date of birth, email address, phone number, shipping address, medical history, and payment information. We also collect usage data about how you interact with our website and services.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to process your orders, facilitate telehealth consultations, manage your treatment program, communicate with you about your account and services, comply with legal and regulatory obligations, and improve our services.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">3. Disclosure of Information</h2>
            <p>We may share your information with our AHPRA-registered prescribers for the purpose of consultations and prescriptions, licensed pharmacy partners for medication dispensing and delivery, payment processors (Stripe) for transaction processing, and government authorities when required by law.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. All health data is encrypted at rest and in transit, stored on servers located in Australia, and protected by role-based access controls. We comply with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal information. You can opt out of marketing communications at any time. To exercise these rights, contact us at hello@enhancedwellbeing.co.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">6. Complaints</h2>
            <p>If you believe we have breached the Australian Privacy Principles, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">7. Contact</h2>
            <p>Enhanced Wellbeing<br />Email: hello@enhancedwellbeing.co</p>
          </section>
        </div>
      </div>
    </div>
  );
}
