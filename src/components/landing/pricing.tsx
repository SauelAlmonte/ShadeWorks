import Link from "next/link";
import { Check, Minus } from "lucide-react";
import styles from "./pricing.module.css";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out ShadeWorks and small projects.",
    cta: "Get started free",
    href: "/signup",
    highlight: false,
    features: [
      { text: "3 palette saves", included: true },
      { text: "Clipboard copy (CSS only)", included: true },
      { text: "WCAG AA badge", included: true },
      { text: "6 shade stops visible", included: true },
      { text: "All export formats", included: false },
      { text: "WCAG AAA scoring", included: false },
      { text: "Full 50–950 shade scale", included: false },
      { text: "Unlimited saves", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For designers and developers who ship production color systems.",
    cta: "Upgrade to Pro",
    href: "/signup?plan=pro",
    highlight: true,
    features: [
      { text: "Unlimited palette saves", included: true },
      { text: "CSS, Tailwind & JSON export", included: true },
      { text: "WCAG AA + AAA scoring", included: true },
      { text: "Full 50–950 shade scale (11 stops)", included: true },
      { text: "All 6 harmony types", included: true },
      { text: "Dark & light mode preview", included: true },
      { text: "Improvement suggestions", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-surface-invert" id="pricing">
      <div className={styles.brandGlow} aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className={`${styles.sectionLabel} font-semibold uppercase tracking-widest`}>
            Pricing
          </span>
          <h2 className={`${styles.sectionHeading} font-bold tracking-tight`}>
            Simple, honest pricing
          </h2>
          <p className={`${styles.sectionSubtext} max-w-md`}>
            Start free. Upgrade when you need the full system.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.highlight ? styles.cardPro : styles.cardFree} flex flex-col rounded-2xl p-8`}
            >
              <div className="flex flex-col gap-2 mb-8">
                <h3 className={`${plan.highlight ? styles.namePro : styles.nameFree} font-semibold`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span className={`${plan.highlight ? styles.pricePro : styles.priceFree} font-bold`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? styles.periodPro : styles.periodFree}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.highlight ? styles.descPro : styles.descFree} leading-relaxed`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map(({ text, included }) => (
                  <li key={text} className={`${styles.featureItem} flex items-center gap-3`}>
                    {included ? (
                      <Check
                        size={16}
                        className={`${plan.highlight ? styles.checkPro : styles.checkFree} shrink-0`}
                        aria-hidden
                      />
                    ) : (
                      <Minus size={16} className={`${styles.minusIcon} shrink-0`} aria-hidden />
                    )}
                    <span className={
                      included
                        ? plan.highlight ? styles.featureTextIncludedPro : styles.featureTextIncludedFree
                        : styles.featureTextExcluded
                    }>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`${plan.highlight ? styles.ctaPro : styles.ctaFree} w-full inline-flex items-center justify-center rounded-xl font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
