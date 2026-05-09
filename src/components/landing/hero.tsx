"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

const DEMO_PALETTES = [
  {
    name: "Violet",
    role: "Primary",
    level: "AAA",
    shades: [
      { stop: "50", color: "oklch(0.97 0.025 278)" },
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
      { stop: "50", color: "oklch(0.97 0.025 38)" },
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
      { stop: "50", color: "oklch(0.97 0.025 185)" },
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

      gsap.to(mockupRef.current, {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "oklch(0.10 0.02 275)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(1 0 0 / 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Brand glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 50%, oklch(0.55 0.26 278 / 0.13) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32 w-full">
        {/* Text */}
        <div className="flex flex-col gap-6 lg:gap-7">
          <div
            className="hero-badge inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-medium"
            style={{
              fontSize: "var(--fs-label)",
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              color: "oklch(0.78 0.12 278)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "oklch(0.65 0.22 278)" }}
              aria-hidden
            />
            WCAG-compliant color systems
          </div>

          <h1
            className="hero-title font-bold leading-[1.08] tracking-tight"
            style={{
              fontSize: "var(--fs-display)",
              color: "oklch(0.98 0 0)",
            }}
          >
            Color palettes
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.68 0.22 278), oklch(0.68 0.20 220), oklch(0.65 0.18 185))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built for the web.
            </span>
          </h1>

          <p
            className="hero-subtitle max-w-lg leading-relaxed"
            style={{
              fontSize: "var(--fs-body-lg)",
              color: "oklch(0.72 0.04 275)",
            }}
          >
            Generate professional palettes from a single base color — with 6
            harmony types, a full 50–950 shade scale, WCAG accessibility
            scoring, and instant export to CSS, Tailwind, or JSON.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2"
              style={{
                fontSize: "var(--fs-button)",
                padding: "clamp(0.65rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.75rem)",
                backgroundColor: "oklch(0.55 0.26 278)",
                color: "oklch(0.98 0 0)",
              }}
            >
              Get started free
              <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-colors hover:bg-white/5 focus-visible:outline-2"
              style={{
                fontSize: "var(--fs-button)",
                padding: "clamp(0.65rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.75rem)",
                border: "1px solid oklch(1 0 0 / 0.15)",
                color: "oklch(0.88 0 0)",
              }}
            >
              Sign in
            </Link>
          </div>

          <p style={{ fontSize: "var(--fs-caption)", color: "oklch(0.42 0.03 275)" }}>
            Free forever · No credit card required
          </p>
        </div>

        {/* Palette mockup */}
        <div
          ref={mockupRef}
          className="w-full max-w-lg mx-auto lg:mx-0"
          aria-hidden
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "oklch(0.14 0.02 278)",
              border: "1px solid oklch(1 0 0 / 0.10)",
              boxShadow:
                "0 25px 50px -12px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.06)",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{
                background: "oklch(0.11 0.02 278)",
                borderColor: "oklch(1 0 0 / 0.08)",
              }}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "oklch(0.65 0.20 25)" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "oklch(0.75 0.18 90)" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "oklch(0.65 0.18 145)" }}
              />
              <span
                className="ml-4 text-xs font-mono"
                style={{ color: "oklch(0.40 0.02 278)" }}
              >
                shadeworks.app
              </span>
            </div>

            {/* Input row */}
            <div
              className="px-4 py-3 flex items-center gap-2 border-b"
              style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
            >
              <div
                className="flex items-center gap-2 flex-1 rounded-lg px-3 py-2"
                style={{ background: "oklch(1 0 0 / 0.05)" }}
              >
                <span
                  className="w-3.5 h-3.5 rounded shrink-0"
                  style={{ background: "oklch(0.55 0.26 278)" }}
                />
                <span
                  className="text-xs font-mono"
                  style={{ color: "oklch(0.60 0.03 278)" }}
                >
                  oklch(0.55 0.26 278)
                </span>
              </div>
              <div
                className="rounded-lg px-3 py-2 text-xs whitespace-nowrap"
                style={{
                  background: "oklch(1 0 0 / 0.05)",
                  color: "oklch(0.55 0.03 278)",
                }}
              >
                Complementary ▾
              </div>
            </div>

            {/* Palette rows */}
            <div className="p-4 flex flex-col gap-4">
              {DEMO_PALETTES.map((palette) => (
                <div key={palette.name} className="palette-row">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.90 0 0)" }}
                      >
                        {palette.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "oklch(0.45 0.02 278)" }}
                      >
                        {palette.role}
                      </span>
                    </div>
                    <span
                      className="text-xs font-medium rounded px-1.5 py-0.5"
                      style={{
                        background:
                          palette.level === "AAA"
                            ? "oklch(0.42 0.18 145)"
                            : "oklch(0.42 0.16 185)",
                        color: "oklch(0.97 0 0)",
                      }}
                    >
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
                        className="flex-1 text-center"
                        style={{
                          fontSize: "8px",
                          fontFamily: "monospace",
                          color: "oklch(0.32 0.02 278)",
                          visibility: i % 2 === 0 ? "visible" : "hidden",
                        }}
                      >
                        {shade.stop}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Export bar */}
            <div
              className="px-4 py-3 border-t flex items-center justify-between"
              style={{
                borderColor: "oklch(1 0 0 / 0.08)",
                background: "oklch(0.11 0.02 278)",
              }}
            >
              <div className="flex gap-2">
                {["CSS", "Tailwind", "JSON"].map((fmt) => (
                  <span
                    key={fmt}
                    className="text-xs rounded px-2 py-1 font-medium"
                    style={{
                      background:
                        fmt === "CSS"
                          ? "oklch(0.55 0.26 278)"
                          : "oklch(1 0 0 / 0.07)",
                      color:
                        fmt === "CSS"
                          ? "oklch(0.98 0 0)"
                          : "oklch(0.50 0.02 278)",
                    }}
                  >
                    {fmt}
                  </span>
                ))}
              </div>
              <span
                className="text-xs"
                style={{ color: "oklch(0.40 0.02 278)" }}
              >
                Export ↓
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(0.10 0.02 275), transparent)",
        }}
        aria-hidden
      />
    </section>
  );
}
