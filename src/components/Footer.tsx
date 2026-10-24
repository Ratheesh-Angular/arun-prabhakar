import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-fg/10 bg-bg-elevated">
      <div className="site-shell flex flex-wrap items-center justify-between gap-3 gap-x-6 py-8 text-[0.78rem] tracking-wide text-muted">
        <p className="m-0">arunprabhakarfilms.com</p>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          <Link href="/about-us" className="transition-colors hover:text-accent">
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="transition-colors hover:text-accent"
          >
            Contact Us
          </Link>
        </nav>
        <p className="m-0">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
