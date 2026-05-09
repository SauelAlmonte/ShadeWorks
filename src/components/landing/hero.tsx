"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import styles from "./hero.module.css";

const DEMO_PALETTES = [
  {
    name: "Violet",
    role: "Primary",
    level: "AAA",
    shades: [
      { stop: "50",  color: "oklch(0.97 0.025 278)" },
      { stop: "100", color: "oklch(0.94 0.055 278)" },
      { stop: "200", color: "oklch(0.88 0.095 278)" },
      { stop: "300", color: "oklch(0.80 0.145 278)" },
      { stop: "400", color: "oklch(0.68 0.205 278)" },
      { stop: "500", color: "oklch(0.55 0.260 278)" },
      { stop: "600", color: "oklch(0.47 0.240 278)" },
      { stop: "700", color: "oklch(0.39 0.200 278)" },
      { stop: "800", color: "oklch(0.30 0.150 278)" },
      { stop: "900", color: "oklch(0.22 0.100 278)" },
      { stop: "950", color: "oklch(0.15 0.065 278)" },
    ],
  },
  {
    name: "Coral",
    role: "Secondary",
    level: "AA",
    shades: [
      { stop: "50",  color: "oklch(0.97 0.025 38)" },
      { stop: "100", color: "oklch(0.94 0.050 38)" },
      { stop: "200", color: "oklch(0.88 0.090 38)" },
      { stop: "300", color: "oklch(0.80 0.140 38)" },
      { stop: "400", color: "oklch(0.72 0.185 38)" },
      { stop: "500", color: "oklch(0.62 0.220 38)" },
      { stop: "600", color: "oklch(0.52 0.200 38)" },
      { stop: "700", color: "oklch(0.42 0.160 38)" },
      { stop: "800", color: "oklch(0.32 0.115 38)" },
      { stop: "900", color: "oklch(0.22 0.075 38)" },
      { stop: "950", color: "oklch(0.15 0.045 38)" },
    ],
  },
  {
    name: "Teal",
    role: "Accent",
    level: "AA",
    shades: [
      { stop: "50",  color: "oklch(0.97 0.025 185)" },
      { stop: "100", color: "oklch(0.94 0.050 185)" },
      { stop: "200", color: "oklch(0.88 0.090 185)" },
      { stop: "300", color: "oklch(0.80 0.135 185)" },
      { stop: "400", color: "oklch(0.70 0.175 185)" },
      { stop: "500", color: "oklch(0.60 0.200 185)" },
      { stop: "600", color: "oklch(0.50 0.180 185)" },
      { stop: "700", color: "oklch(0.40 0.145 185)" },
      { stop: "800", color: "oklch(0.30 0.105 185)" },
      { stop: "900", color: "oklch(0.20 0.065 185)" },
      { stop: "950", color: "oklch(0.14 0.040 185)" },
    ],
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-title", { y: 32, opacity: 0, duration: 0.65 }, "-=0.3")
        .from(".hero-subtitle", { y: 24, opacity: 0, duration: 0.55 }, "-=0.35")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(
          mockupRef.current,
          { x: 60, opacity: 0, duration: 0.85, ease: "power2.out" },
          "-=0.6"
        )
        .from(
          ".palette-row",
          { y: 18, opacity: 0, duration: 0.4, stagger: 0.1 },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh flex items-center overflow-hidden pt-16 bg-surface-invert"
    >
      <div className={styles.dotGrid} aria-hidden />
      <div className={styles.brandGlow} aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32 w-full">
        {/* Text column */}
        <div className="flex flex-col gap-6 lg:gap-7">
          <div className={`hero-badge ${styles.badge} inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-medium`}>
            <span className={`${styles.badgeDot} w-1.5 h-1.5 rounded-full animate-pulse`} aria-hidden />
            WCAG-compliant color systems
          </div>

          <h1 className={`hero-title ${styles.title} font-bold leading-[1.08] tracking-tight`}>
            Color palettes
            <br />
            <span className={styles.titleGradient}>built for the web.</span>
          </h1>

          <p className={`hero-subtitle ${styles.subtitle} max-w-lg leading-relaxed`}>
            Generate professional palettes from a single base color — with 6
            harmony types, a full 50–950 shade scale, WCAG accessibility
            scoring, and instant export to CSS, Tailwind, or JSON.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              href="/signup"
              className={`${styles.ctaPrimary} inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-opacity focus-visible:outline-2`}
            >
              Get started free
              <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              href="/login"
              className={`${styles.ctaSecondary} inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-2`}
            >
              Sign in
            </Link>
          </div>

          <p className={styles.finePrint}>
            Free forever · No credit card required
          </p>
        </div>

        {/* Palette mockup */}
        <div ref={mockupRef} className="w-full max-w-lg mx-auto lg:mx-0" aria-hidden>
          <div className={`${styles.mockupCard} rounded-2xl overflow-hidden`}>
            {/* Window chrome */}
            <div className={`${styles.mockupChrome} flex items-center gap-2 px-4 py-3`}>
              <span className={`${styles.chromeDot1} w-3 h-3 rounded-full`} />
              <span className={`${styles.chromeDot2} w-3 h-3 rounded-full`} />
              <span className={`${styles.chromeDot3} w-3 h-3 rounded-full`} />
              <span className={styles.chromeAddress}>shadeworks.app</span>
            </div>

            {/* Input row */}
            <div className={`${styles.inputRow} px-4 py-3 flex items-center gap-2`}>
              <div className={`${styles.inputField} flex items-center gap-2 flex-1 rounded-lg px-3 py-2`}>
                <span className={`${styles.colorSwatch} w-3.5 h-3.5 rounded shrink-0`} />
                <span className={styles.colorValue}>oklch(0.55 0.26 278)</span>
              </div>
              <div className={`${styles.harmonySelect} rounded-lg px-3 py-2`}>
                Complementary ▾
              </div>
            </div>

            {/* Palette rows */}
            <div className="p-4 flex flex-col gap-4">
              {DEMO_PALETTES.map((palette) => (
                <div key={palette.name} className="palette-row">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`${styles.paletteLabel} text-xs font-semibold`}>
                        {palette.name}
                      </span>
                      <span className={`${styles.paletteRole} text-xs`}>
                        {palette.role}
                      </span>
                    </div>
                    <span className={`${palette.level === "AAA" ? styles.wcagAAA : styles.wcagAA} text-xs font-medium rounded px-1.5 py-0.5`}>
                      {palette.level} ✓
                    </span>
                  </div>

                  <div className="flex rounded-lg overflow-hidden h-7">
                    {palette.shades.map((shade) => (
                      <div
                        key={shade.stop}
                        className="flex-1"
                        style={{ background: shade.color }}
                        title={`${palette.name} ${shade.stop}`}
                      />
                    ))}
                  </div>

                  <div className="flex mt-1">
                    {palette.shades.map((shade, i) => (
                      <div
                        key={shade.stop}
                        className={`${styles.shadeLabel} flex-1 text-center ${i % 2 !== 0 ? "invisible" : ""}`}
                      >
                        {shade.stop}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Export bar */}
            <div className={`${styles.exportBar} px-4 py-3 flex items-center justify-between`}>
              <div className="flex gap-2">
                {["CSS", "Tailwind", "JSON"].map((fmt) => (
                  <span
                    key={fmt}
                    className={`${fmt === "CSS" ? styles.exportFmtActive : styles.exportFmtInactive} text-xs rounded px-2 py-1 font-medium`}
                  >
                    {fmt}
                  </span>
                ))}
              </div>
              <span className={`${styles.exportArrow} text-xs`}>Export ↓</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fadeBottom} absolute bottom-0 left-0 right-0 h-32 pointer-events-none`} aria-hidden />
    </section>
  );
}
