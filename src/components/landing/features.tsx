import {
  Palette,
  Layers,
  SunMoon,
  ShieldCheck,
  FileCode2,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Palette,
    title: "6 Harmony Types",
    description:
      "Complementary, analogous, triadic, split-complementary, tetradic, and monochromatic — each with smart 60/30/10 dominant/secondary/accent role assignment.",
  },
  {
    icon: Layers,
    title: "Full Shade Scale",
    description:
      "11-stop scale from 50 to 950, interpolated in perceptually uniform oklch. Every stop looks intentional — no muddy midtones.",
  },
  {
    icon: SunMoon,
    title: "Dark & Light Preview",
    description:
      "Generate and preview your palette in dark and light modes simultaneously. See exactly how your colors behave in both contexts.",
  },
  {
    icon: ShieldCheck,
    title: "WCAG 2.1 Scoring",
    description:
      "Automatic contrast ratio scoring across the full shade scale with AA and AAA pass/fail badges and actionable improvement suggestions.",
  },
  {
    icon: FileCode2,
    title: "Flexible Export",
    description:
      "Export as CSS custom properties, Tailwind CSS v4 @theme format, or raw JSON — ready to drop into any project without modification.",
  },
  {
    icon: Sparkles,
    title: "Freemium Model",
    description:
      "Start free with 3 palette saves and clipboard export. Upgrade to Pro for unlimited saves, all export formats, and full AAA scoring.",
  },
];

export default function Features() {
  return (
    <section className="bg-background py-24 lg:py-32" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">
            What you get
          </span>
          <h2
            className="font-bold tracking-tight text-foreground"
            style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)" }}
          >
            Everything a color system needs
          </h2>
          <p
            className="text-muted-foreground max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.2vw + 0.2rem, 1.125rem)" }}
          >
            Built specifically for designers and developers who need accessible,
            production-ready color systems — fast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-subtle flex items-center justify-center shrink-0 group-hover:bg-brand/15 transition-colors">
                <Icon
                  size={20}
                  className="text-brand"
                  aria-hidden
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
