import Link from "next/link";
import { Check, Minus } from "lucide-react";

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
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.10 0.02 275)" }}
      id="pricing"
    >
      {/* Brand glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.55 0.26 278 / 0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(0.68 0.22 278)" }}
          >
            Pricing
          </span>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
              color: "oklch(0.97 0 0)",
            }}
          >
            Simple, honest pricing
          </h2>
          <p
            className="max-w-md"
            style={{
              fontSize: "clamp(1rem, 1.2vw + 0.2rem, 1.125rem)",
              color: "oklch(0.65 0.03 275)",
            }}
          >
            Start free. Upgrade when you need the full system.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl p-8"
              style={
                plan.highlight
                  ? {
                      background: "oklch(0.55 0.26 278)",
                      boxShadow:
                        "0 20px 40px -10px oklch(0.55 0.26 278 / 0.4)",
                    }
                  : {
                      background: "oklch(0.14 0.02 278)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                    }
              }
            >
              <div className="flex flex-col gap-2 mb-8">
                <h3
                  className="font-semibold text-lg"
                  style={{
                    color: plan.highlight
                      ? "oklch(0.98 0 0)"
                      : "oklch(0.90 0 0)",
                  }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "clamp(2.25rem, 4vw, 3rem)",
                      color: plan.highlight
                        ? "oklch(0.98 0 0)"
                        : "oklch(0.95 0 0)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      color: plan.highlight
                        ? "oklch(0.90 0.05 278)"
                        : "oklch(0.55 0.02 278)",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: plan.highlight
                      ? "oklch(0.88 0.06 278)"
                      : "oklch(0.55 0.02 278)",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map(({ text, included }) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    {included ? (
                      <Check
                        size={16}
                        className="shrink-0"
                        style={{
                          color: plan.highlight
                            ? "oklch(0.95 0 0)"
                            : "oklch(0.65 0.22 278)",
                        }}
                        aria-hidden
                      />
                    ) : (
                      <Minus
                        size={16}
                        className="shrink-0"
                        style={{ color: "oklch(0.40 0.02 278)" }}
                        aria-hidden
                      />
                    )}
                    <span
                      style={{
                        color: included
                          ? plan.highlight
                            ? "oklch(0.95 0 0)"
                            : "oklch(0.80 0 0)"
                          : "oklch(0.42 0.02 278)",
                      }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className="w-full inline-flex items-center justify-center rounded-xl font-semibold text-sm py-3 transition-all hover:opacity-90 focus-visible:outline-2"
                style={
                  plan.highlight
                    ? {
                        background: "oklch(0.98 0 0)",
                        color: "oklch(0.30 0.20 278)",
                      }
                    : {
                        background: "oklch(0.55 0.26 278)",
                        color: "oklch(0.98 0 0)",
                      }
                }
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
