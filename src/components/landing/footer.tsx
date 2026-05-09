import Link from "next/link";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Sign in", href: "/login" },
  { label: "Get started", href: "/signup" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "oklch(0.08 0.01 275)",
        borderColor: "oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold"
            style={{
              fontSize: "var(--fs-h3)",
              color: "oklch(0.85 0 0)",
            }}
            aria-label="ShadeWorks home"
          >
            <span
              className="w-5 h-5 rounded-md bg-brand shrink-0"
              aria-hidden
            />
            ShadeWorks
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white/80"
                  style={{ fontSize: "var(--fs-body)", color: "oklch(0.48 0.02 275)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p style={{ fontSize: "var(--fs-caption)", color: "oklch(0.38 0.02 275)" }}>
            © {new Date().getFullYear()} ShadeWorks
          </p>
        </div>
      </div>
    </footer>
  );
}
