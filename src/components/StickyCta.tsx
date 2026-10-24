export function StickyCta() {
  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-40 grid h-[calc(4rem+env(safe-area-inset-bottom,0px))] grid-cols-2 border-t border-fg/10 bg-bg/96 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href="tel:+919343726271"
        className="flex items-center justify-center border-r border-fg/10 text-[0.78rem] font-semibold tracking-[0.1em] text-fg uppercase"
      >
        Call
      </a>
      <a
        href="https://wa.me/919343726271"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-accent text-[0.78rem] font-semibold tracking-[0.1em] text-bg uppercase"
      >
        WhatsApp
      </a>
    </div>
  );
}
