import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./cta-banner.module.css";

export default function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${styles.gradientCard} flex flex-col items-center text-center gap-8 rounded-3xl px-8 py-16 lg:py-20 relative overflow-hidden`}>
          <div className={styles.dotPattern} aria-hidden />

          <div className="relative flex flex-col items-center gap-4 max-w-2xl">
            <h2 className={`${styles.heading} font-bold tracking-tight`}>
              Start building accessible color systems today.
            </h2>
            <p className={`${styles.subtext} leading-relaxed`}>
              Free to start. No credit card required.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className={`${styles.ctaPrimary} inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2`}
            >
              Get started free
              <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              href="#features"
              className={`${styles.ctaSecondary} inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-2`}
            >
              See all features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
