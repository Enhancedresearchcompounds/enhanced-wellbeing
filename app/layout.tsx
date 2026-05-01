import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const PORTAL = "https://portal.enhancedwellbeing.co";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enhancedwellbeing.co"),
  title: {
    default: "Enhanced Wellbeing | Specialist Telehealth Wellness Clinic",
    template: "%s | Enhanced Wellbeing",
  },
  description:
    "Specialist-led telehealth clinic. Personalised programs for weight management, hair restoration, skin rejuvenation, and sexual health. AHPRA registered prescribers.",
  keywords: [
    "telehealth clinic Australia",
    "telehealth Australia",
    "weight management",
    "hair restoration",
    "skin rejuvenation",
    "specialist telehealth",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://enhancedwellbeing.co",
    siteName: "Enhanced Wellbeing",
  },
};

function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold tracking-wide uppercase text-foreground">
        Enhanced <span className="text-accent">Wellbeing</span>
      </span>
      <span className="text-[0.55rem] font-medium tracking-[0.22em] uppercase text-accent-hover mt-0.5">
        Telehealth Clinic
      </span>
    </Link>
  );
}

function MarketingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-[5%] bg-accent-light/70 backdrop-blur-xl border-b border-accent/15">
      <Logo />
      <nav className="hidden md:flex items-center gap-8">
        <a href="/#services" className="text-xs font-medium tracking-widest uppercase text-foreground/65 hover:text-foreground transition-opacity">Treatments</a>
        <a href="/#how" className="text-xs font-medium tracking-widest uppercase text-foreground/65 hover:text-foreground transition-opacity">How It Works</a>
        <a href="/#why" className="text-xs font-medium tracking-widest uppercase text-foreground/65 hover:text-foreground transition-opacity">About</a>
        <a href={`${PORTAL}/login`} className="text-xs font-medium tracking-widest uppercase text-foreground/65 hover:text-foreground transition-opacity">Sign In</a>
        <a
          href={`${PORTAL}/signup`}
          className="inline-flex items-center gap-1.5 bg-accent/15 border border-accent/50 text-accent-hover backdrop-blur-sm px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-accent/25 transition-all"
        >
          Begin Your Journey
        </a>
      </nav>
      <div className="flex md:hidden items-center gap-3">
        <a href={`${PORTAL}/login`} className="text-xs font-medium text-muted">Sign In</a>
        <a href={`${PORTAL}/signup`} className="bg-accent/15 border border-accent/50 text-accent-hover px-4 py-2 rounded-full text-xs font-semibold">
          Start
        </a>
      </div>
    </header>
  );
}

function MarketingFooter() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                Enhanced <span className="text-accent">Wellbeing</span>
              </span>
              <span className="block text-[0.55rem] font-medium tracking-[0.22em] uppercase text-accent mt-1">
                Telehealth Clinic
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Australia&apos;s premium online peptide clinic. Personalised treatments prescribed by qualified practitioners and delivered to your door.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Treatments</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors">Weight Loss</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Hair &amp; Skin</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Sexual Wellness</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Peptide Therapies</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Clinic</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#how" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href={`${PORTAL}/login`} className="hover:text-white transition-colors">Patient Portal</a></li>
              <li><a href="/#why" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Legal</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/telehealth-agreement" className="hover:text-white transition-colors">Telehealth Agreement</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <span>&copy; 2026 Enhanced Wellbeing. All rights reserved.</span>
        </div>

        <p className="mt-6 text-[0.68rem] leading-relaxed text-white/30">
          Enhanced Wellbeing is an Australian online telehealth clinic. All treatments require a real-time consultation with an AHPRA-registered Australian practitioner prior to any prescription being issued. All medications are prescribed and dispensed in compliance with TGA regulations by licensed Australian pharmacies. This website does not constitute medical advice. Individual results may vary.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <MarketingHeader />
        <main>{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}
