import { Pipette, Shuffle, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STEPS: {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    step: 1,
    icon: Pipette,
    title: "Enter a base color",
    description:
      "Provide any color in hex, RGB, or oklch. ShadeWorks treats it as the foundation of your entire palette.",
  },
  {
    step: 2,
    icon: Shuffle,
    title: "Choose a harmony type",
    description:
      "Pick from 6 harmony algorithms. The engine generates complementary, secondary, and accent roles automatically.",
  },
  {
    step: 3,
    icon: Download,
    title: "Export and ship",
    description:
      "Copy CSS variables, Tailwind @theme tokens, or JSON. Your palette is accessible and production-ready.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "oklch(0.97 0.005 275)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="font-semibold text-brand uppercase tracking-widest" style={{ fontSize: "var(--fs-label)" }}>
            How it works
          </span>
          <h2
            className="font-bold tracking-tight text-foreground"
            style={{ fontSize: "var(--fs-h2)" }}
          >
            From one color to a full system
          </h2>
          <p
            className="text-muted-foreground max-w-xl"
            style={{ fontSize: "var(--fs-body-lg)" }}
          >
            Three steps. Under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px"
            style={{ background: "oklch(0.88 0.05 278)" }}
            aria-hidden
          />

          {STEPS.map(({ step, icon: Icon, title, description }) => (
            <div
              key={step}
              className="flex-1 flex flex-col items-center text-center gap-4 px-4"
            >
              {/* Step circle */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-brand-subtle border border-brand/20 flex items-center justify-center">
                  <Icon size={28} className="text-brand" aria-hidden />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand text-brand-foreground font-bold flex items-center justify-center"
                  style={{ fontSize: "var(--fs-caption)" }}
                  aria-label={`Step ${step}`}
                >
                  {step}
                </span>
              </div>

              <div className="flex flex-col gap-2 max-w-xs">
                <h3 className="font-semibold text-foreground" style={{ fontSize: "var(--fs-h3)" }}>
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "var(--fs-body)" }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
