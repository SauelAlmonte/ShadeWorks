import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight"
          style={{ fontSize: "clamp(1.1rem, 1.5vw + 0.25rem, 1.25rem)" }}
          aria-label="ShadeWorks home"
        >
          <span
            className="w-6 h-6 rounded-md bg-brand shrink-0"
            aria-hidden
          />
          ShadeWorks
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-brand text-brand-foreground hover:opacity-90 transition-opacity"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
