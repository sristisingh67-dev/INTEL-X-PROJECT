import "./Navbar.css";

export function Navbar() {
  return (
    <header className="intel-navbar fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-black/60 backdrop-blur-[2px]">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-[0.22em] text-foreground md:text-xl"
        >
          INTEL<span className="text-cyan">-X</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
            <span className="hud text-cyan/80">Network // Online</span>
          </div>
          <span className="hud hidden border border-line/60 bg-black/40 px-3 py-1 text-[10px] md:inline-block">
            2026 Edition
          </span>
        </div>
      </nav>
    </header>
  );
}
