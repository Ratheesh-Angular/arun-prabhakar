export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-2 gap-x-6 border-t border-fg/10 px-[clamp(1.25rem,4vw,2.5rem)] py-6 text-[0.8rem] tracking-wide text-muted">
      <p className="m-0">arunprabhakarfilms.com</p>
      <p className="m-0">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
