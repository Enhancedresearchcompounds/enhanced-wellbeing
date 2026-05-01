import Link from 'next/link';
import { ParticleHero } from '@/components/marketing/ParticleHero';

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center px-[5%] pt-28 pb-20 overflow-hidden bg-[radial-gradient(ellipse_90%_90%_at_25%_35%,#fefafb_0%,#FEF8F9_45%,#fdf5eb_100%)]">
        {/* Glows */}
        <div className="absolute w-[850px] h-[850px] -top-56 -right-56 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
        <div className="absolute w-[650px] h-[650px] -bottom-48 -left-44 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="absolute w-[420px] h-[420px] top-[15%] left-[38%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <ParticleHero />

        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <span className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
              <span className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-accent-hover">
                TGA Compliant &middot; Australian Owned &middot; AHPRA Registered
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5.5vw,5.2rem)] font-bold leading-[1.06] tracking-tight text-foreground mb-6 animate-fade-in-up delay-1">
              Your wellness,<br />
              <em className="font-normal italic text-accent-richer">elevated.</em>
            </h1>

            <p className="text-base sm:text-lg font-light leading-relaxed text-muted max-w-[460px] mb-8 animate-fade-in-up delay-2">
              Australia&apos;s premium telehealth clinic. Personalised treatments for weight loss, hair restoration, skin rejuvenation, and sexual wellness, prescribed by AHPRA-registered practitioners and delivered discreetly to your door.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-3">
              <Link
                href="https://portal.enhancedwellbeing.co/assessment"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#D6BA62] to-[#B08830] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase shadow-[0_4px_22px_rgba(168,135,58,0.38)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(168,135,58,0.48)] transition-all"
              >
                Start Your Assessment
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-accent/10 border border-accent/40 text-accent-hover backdrop-blur-sm px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-accent/20 transition-all"
              >
                Explore Treatments
              </a>
            </div>

            <div className="flex items-center gap-5 flex-wrap mt-10 pt-7 border-t border-foreground/7 animate-fade-in-up delay-4">
              {['AHPRA Registered', 'Fast Consult', 'Secure Platform'].map((label) => (
                <span key={label} className="flex items-center gap-2 text-xs font-medium text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Process card */}
          <div className="hidden lg:block animate-fade-in-up delay-2">
            <div className="bg-white/75 backdrop-blur-2xl border border-accent/15 rounded-[var(--radius-xl)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.07)] relative">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-accent/10 border border-accent/25 text-accent-hover text-[0.66rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Your Journey
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-success">
                  <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_0_3px_rgba(75,168,120,0.22)] animate-pulse" />
                  Accepting Patients
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mb-1">How it works</h3>
              <p className="text-sm text-muted mb-5">From first click to treatment at your door.</p>
              <div className="space-y-2">
                {[
                  { num: '01', label: 'Complete health assessment', status: 'done' },
                  { num: '02', label: 'Consult a practitioner', status: 'active' },
                  { num: '03', label: 'Receive your prescription', status: 'waiting' },
                  { num: '04', label: 'Ongoing support', status: 'waiting' },
                ].map((step) => (
                  <div
                    key={step.num}
                    className={`flex items-center gap-3 p-3 rounded-xl text-sm ${
                      step.status === 'done' ? 'bg-accent/8' :
                      step.status === 'active' ? 'bg-primary-light border border-primary/30' :
                      'bg-foreground/3 text-muted'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      step.status === 'done' ? 'bg-gradient-to-br from-accent to-accent-hover text-white' :
                      step.status === 'active' ? 'bg-gradient-to-br from-primary to-primary-hover text-white' :
                      'bg-foreground/5 text-muted'
                    }`}>
                      {step.status === 'done' ? '✓' : step.num}
                    </span>
                    {step.label}
                  </div>
                ))}
              </div>

              {/* Floating tags */}
              <div className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-lg border border-white/90 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <strong className="block text-xs font-semibold text-foreground">Fast Turnaround</strong>
                  <span className="text-[0.68rem] text-muted">Quick consult booking</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur-lg border border-white/90 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <strong className="block text-xs font-semibold text-foreground">Clinically Safe</strong>
                  <span className="text-[0.68rem] text-muted">Doctor supervised</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="bg-dark-warm py-3 overflow-hidden border-y border-accent/15">
        <div className="flex w-max" style={{ animation: 'marquee-scroll 44s linear infinite' }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {['TGA Compliant Compounds', 'AHPRA Registered Practitioners', 'Discreet Pharmacy Delivery', 'Specialist Weight Management', 'Hair & Skin Treatments', 'Sexual Wellness', 'Telehealth Consultations'].map((text) => (
                <span key={`${i}-${text}`} className="flex items-center gap-2.5 px-8 text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-white/40 whitespace-nowrap">
                  <span className="text-accent text-[0.45rem]">&#9670;</span>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========== STATS ========== */}
      <section className="bg-blush-pale py-12 border-b border-primary/20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { n: '100%', l: 'Australian Owned' },
            { n: 'AHPRA', l: 'Registered Doctors' },
            { n: 'TGA', l: 'Compliant Compounds' },
            { n: '24/7', l: 'Patient Portal' },
          ].map((stat, i) => (
            <div key={stat.l} className={`text-center py-4 px-6 ${i > 0 ? 'border-l border-foreground/8' : ''}`}>
              <p className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-foreground leading-none mb-1">{stat.n}</p>
              <p className="text-xs font-medium tracking-wider uppercase text-muted">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== TREATMENTS ========== */}
      <section id="services" className="py-24 px-[5%] bg-gradient-to-b from-blush-pale to-blush-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-accent-hover mb-4">
              <span className="w-5 h-px bg-accent/50" /> Our Treatments <span className="w-5 h-px bg-accent/50" />
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-tight text-foreground mb-3">
              Science-backed therapies,<br /><em className="font-normal italic text-accent-richer">beautifully delivered.</em>
            </h2>
            <p className="text-base text-muted max-w-md mx-auto">
              Every treatment is TGA compliant, prescribed by licensed Australian practitioners, and tailored specifically to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', icon: '⚖️', title: 'Weight Management', desc: 'Medically supervised weight management programs, personalised to your health profile by specialist practitioners.', color: 'ic-pink', price: 'from $449/mo' },
              { num: '02', icon: '✨', title: 'Hair & Skin', desc: 'Clinically backed treatments for hair loss and skin rejuvenation, tailored to your hair and skin goals.', color: 'ic-gold', price: 'from $149/mo' },
              { num: '03', icon: '💪', title: 'Sexual Wellness', desc: 'Discreet, evidence-based treatments for sexual health. Prescribed by specialists with pharmacy-direct delivery.', color: 'ic-pink', price: 'from $149/mo' },
              { num: '04', icon: '🔬', title: 'Advanced Wellness', desc: 'Specialist-led programs for recovery and vitality. Your practitioner will recommend the right approach for you.', color: 'ic-gold', price: 'from $449/mo' },
            ].map((svc) => (
              <div key={svc.num} className="bg-white border border-primary/20 rounded-[var(--radius-lg)] p-7 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] hover:border-accent/30 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-mid to-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <span className="absolute top-4 right-5 font-[family-name:var(--font-playfair)] text-5xl font-bold text-primary/15 pointer-events-none">{svc.num}</span>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-5 group-hover:scale-110 group-hover:-rotate-4 transition-transform duration-300 ${svc.color === 'ic-pink' ? 'bg-primary/15' : 'bg-accent/10'}`}>
                  {svc.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground mb-2">{svc.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{svc.desc}</p>
                <p className="text-sm font-semibold text-accent-hover mb-3">{svc.price}</p>
                <Link href="https://portal.enhancedwellbeing.co/assessment" className="text-xs font-bold tracking-wider uppercase text-accent-hover inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn more <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section id="how" className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-accent-hover mb-4">
              <span className="w-5 h-px bg-accent/50" /> The Process
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-tight text-foreground mb-3">
              Simple. Private.<br /><em className="font-normal italic text-accent-richer">Effective.</em>
            </h2>
            <p className="text-base text-muted">
              From your first click to treatment at the door, we&apos;ve made every step effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Steps */}
            <div className="space-y-1">
              {[
                { num: '01', title: 'Complete Your Health Quiz', desc: 'Answer a few questions about your health, goals and history. Takes under five minutes.', active: true },
                { num: '02', title: 'Consult a Practitioner', desc: 'A licensed Australian practitioner reviews your case and conducts a telehealth consultation at your convenience.' },
                { num: '03', title: 'Receive Your Prescription', desc: 'Processed and dispatched directly from our partner pharmacy, discreetly packaged to your door.' },
                { num: '04', title: 'Ongoing Support', desc: 'Check in with your care team anytime. We adjust your programme as your results evolve.' },
              ].map((step, i) => (
                <div key={step.num} className={`flex gap-5 p-5 rounded-[var(--radius-lg)] border transition-colors ${step.active ? 'bg-blush-light border-primary/30' : 'border-transparent hover:bg-blush-pale'}`}>
                  <div className="flex flex-col items-center">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-[family-name:var(--font-playfair)] text-sm font-bold shrink-0 ${step.active ? 'bg-gradient-to-br from-accent to-accent-hover text-white' : 'bg-foreground/5 text-muted'}`}>
                      {step.num}
                    </span>
                    {i < 3 && <span className="flex-1 w-px bg-foreground/7 my-1.5 min-h-[20px]" />}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Practitioner card */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blush-pale to-accent-light border border-primary/25 rounded-[var(--radius-xl)] p-7 space-y-4">
                <div className="bg-white/80 backdrop-blur-sm border border-white/90 rounded-[var(--radius-lg)] p-5 shadow-sm">
                  <p className="text-[0.67rem] font-bold tracking-widest uppercase text-accent-hover mb-3">Your Practitioner</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-mid flex items-center justify-center text-lg">🩺</div>
                    <div className="flex-1">
                      <strong className="block text-sm font-semibold text-foreground">AHPRA Registered</strong>
                      <span className="text-xs text-muted">Matched to your needs</span>
                    </div>
                    <span className="bg-success/10 text-success text-[0.66rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">Accepting</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white/90 rounded-[var(--radius-lg)] p-5 shadow-sm">
                  <p className="text-[0.67rem] font-bold tracking-widest uppercase text-accent-hover mb-3">Quick Health Check</p>
                  <div className="space-y-2">
                    <div className="bg-blush-pale rounded-lg px-3 py-2 text-sm text-muted">What are your health goals?</div>
                    <div className="bg-blush-pale rounded-lg px-3 py-2 text-sm text-muted">Any current medications?</div>
                    <div className="bg-gradient-to-br from-accent to-accent-hover text-white rounded-lg px-3 py-2.5 text-sm font-bold text-center tracking-wider mt-3">
                      SUBMIT ASSESSMENT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY SECTION (dark) ========== */}
      <section id="why" className="py-24 px-[5%] bg-dark-warm relative overflow-hidden">
        <div className="absolute w-[550px] h-[550px] bg-accent/5 rounded-full blur-[100px] -top-28 -right-24 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] -bottom-20 left-[5%] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent/50" /> Why Enhanced Wellbeing
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-tight text-white mb-3">
            A clinic built for<br /><em className="font-normal italic text-[#E8D090]">modern Australia.</em>
          </h2>
          <p className="text-base text-white/40 mb-12">
            Clinical excellence meets the convenience of a fully digital experience. No waiting rooms, no judgement, just results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🩺', title: 'AHPRA Registered Practitioners', desc: 'Every consultation is a real, live telehealth session with a licensed, AHPRA-registered Australian medical practitioner.' },
              { icon: '🔒', title: 'Complete Privacy', desc: 'Your health data is encrypted and stored securely in Australia. Pharmacy delivers in discreet, unmarked packaging.' },
              { icon: '✅', title: 'TGA Compliant Only', desc: 'We prescribe only TGA-approved medications from licensed compounding and dispensing pharmacies. No grey-market products.' },
              { icon: '📱', title: 'Fully Digital Experience', desc: 'Consult, get prescribed, and receive treatment, all from your phone or computer. No waiting rooms, no referrals.' },
            ].map((card) => (
              <div key={card.title} className="bg-white/4 border border-white/7 rounded-[var(--radius-lg)] p-6 hover:bg-white/7 hover:border-accent/15 hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl block mb-4">{card.icon}</span>
                <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 px-[5%] bg-gradient-to-br from-blush-pale to-accent-light border-t border-primary/25">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-dark-warm rounded-[var(--radius-xl)] py-20 px-8 text-center relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[90px] -top-28 left-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] bg-accent/6 rounded-full blur-[90px] -bottom-20 right-[8%] pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-accent mb-4">
                <span className="w-5 h-px bg-accent/50" /> Get Started Today <span className="w-5 h-px bg-accent/50" />
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-tight text-white mb-3">
                Find your treatment<br />in <em className="font-normal italic text-[#E8D090]">5 minutes.</em>
              </h2>
              <p className="text-base text-white/40 max-w-md mx-auto mb-10">
                Answer a few questions and our system will match you with the right treatment and practitioner.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="https://portal.enhancedwellbeing.co/assessment"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#D6BA62] to-[#B08830] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase shadow-[0_4px_22px_rgba(168,135,58,0.38)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(168,135,58,0.48)] transition-all"
                >
                  Start Free Assessment &rarr;
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/80 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/12 transition-all"
                >
                  View All Treatments
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
