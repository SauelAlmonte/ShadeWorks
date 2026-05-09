import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import CtaBanner from "@/components/landing/cta-banner";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm"
        style={{ background: "oklch(0.55 0.26 278)", color: "oklch(0.98 0 0)" }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
