import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center text-center gap-8 rounded-3xl px-8 py-16 lg:py-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.26 278), oklch(0.50 0.22 240), oklch(0.48 0.18 210))",
          }}
        >
          {/* Background noise */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, oklch(1 0 0 / 0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          <div className="relative flex flex-col items-center gap-4 max-w-2xl">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: "clamp(2rem, 4vw + 0.5rem, 3.25rem)",
                color: "oklch(0.98 0 0)",
              }}
            >
              Start building accessible color systems today.
            </h2>
            <p
              className="leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.2vw + 0.2rem, 1.2rem)",
                color: "oklch(0.88 0.05 278)",
              }}
            >
              Free to start. No credit card required.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-sm px-7 py-3.5 transition-all hover:opacity-90 focus-visible:outline-2"
              style={{
                background: "oklch(0.98 0 0)",
                color: "oklch(0.30 0.20 278)",
              }}
            >
              Get started free
              <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-xl font-semibold text-sm px-7 py-3.5 transition-all hover:bg-white/10 focus-visible:outline-2"
              style={{
                border: "1px solid oklch(1 0 0 / 0.30)",
                color: "oklch(0.98 0 0)",
              }}
            >
              See all features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
