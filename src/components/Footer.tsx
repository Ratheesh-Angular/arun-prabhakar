export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-2 gap-x-6 border-t border-fg/12 px-[clamp(1.25rem,4vw,2.5rem)] py-7 text-[0.85rem] text-muted">
      <p className="m-0">Arun Prabhakar · Bangalore</p>
      <p className="m-0">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
