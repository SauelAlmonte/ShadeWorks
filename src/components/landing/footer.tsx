import Link from "next/link";
import styles from "./footer.module.css";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Sign in", href: "/login" },
  { label: "Get started", href: "/signup" },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-surface-footer`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className={`${styles.logo} flex items-center gap-2.5 font-bold`}
            aria-label="ShadeWorks home"
          >
            <span className="w-5 h-5 rounded-md bg-brand shrink-0" aria-hidden />
            ShadeWorks
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ShadeWorks
          </p>
        </div>
      </div>
    </footer>
  );
}
