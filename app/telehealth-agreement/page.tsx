export const metadata = { title: 'Telehealth Agreement' };

export default function TelehealthAgreementPage() {
  return (
    <div className="pt-28 pb-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground mb-2">Telehealth Service Agreement</h1>
        <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

        <div className="prose prose-sm max-w-none text-muted space-y-6">
          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">1. Scope of Telehealth Services</h2>
            <p>Enhanced Wellbeing provides telehealth consultations via video and/or audio with AHPRA-registered medical practitioners. These consultations are for the purpose of assessment, diagnosis, and prescription of treatments within our service areas: weight management, hair restoration, skin rejuvenation, and sexual health.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">2. Patient Consent</h2>
            <p>By using our telehealth services, you consent to receiving healthcare services via electronic communications. You understand that telehealth consultations have limitations compared to in-person consultations, and that the practitioner may recommend an in-person visit if clinically appropriate.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">3. Medical Information</h2>
            <p>You agree to provide complete and accurate medical history, including current medications, allergies, and pre-existing conditions. Withholding or providing inaccurate information may compromise the safety and effectiveness of your treatment.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">4. Prescribing</h2>
            <p>All prescribing decisions are at the sole clinical discretion of the treating AHPRA-registered practitioner. A consultation does not guarantee a prescription will be issued. All medications are dispensed by licensed Australian pharmacies in compliance with TGA regulations.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">5. Privacy and Confidentiality</h2>
            <p>All telehealth consultations are private and confidential. We use encrypted communication platforms and store all health records securely in Australia in accordance with the Privacy Act 1988 (Cth) and applicable state health records legislation.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mt-8 mb-3">6. Emergency Situations</h2>
            <p>Enhanced Wellbeing telehealth services are not suitable for medical emergencies. If you experience a medical emergency, call 000 immediately or attend your nearest emergency department.</p>
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
