import { useEffect, useState } from "react";
import operative from "@/assets/operative.png";
import { WorldMap } from "./WorldMap";
import { IntelligenceHUD } from "./IntelligenceHUD";
import { Particles } from "./Particles";
import "./Hero.css";

export function Hero() {
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e) => {
      setP({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" className="intel-hero relative min-h-screen overflow-hidden bg-black">
      <WorldMap offsetX={p.x * 26} offsetY={p.y * 16} />
      <Particles />

      {/* operative */}
      <div
        className="operative-wrapper pointer-events-none absolute bottom-0 right-[-14%] z-10 h-[62%] w-[62%] opacity-45 sm:right-[-6%] sm:h-[72%] md:right-0 md:h-[92%] md:w-[36%] md:opacity-100"
        style={{
          transform: `translate3d(${p.x * -18}px, 0, 0)`,
          transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 top-[12%] bg-[radial-gradient(55%_45%_at_55%_35%,color-mix(in_oklab,var(--blue)_45%,transparent),transparent_70%)] blur-2xl" />
        <img
          src={operative}
          alt="Anonymous INTEL-X intelligence operative in a dark suit and fedora"
          width={912}
          height={1408}
          className="animate-breathe relative h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,transparent,#000_16%,#000_78%,transparent)]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(to_top,#000,transparent)]" />
      </div>

      <IntelligenceHUD offsetX={p.x * -6} offsetY={p.y * -4} />

      {/* content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-5 pb-32 pt-32 md:px-10">
        <div className="max-w-2xl">
          <div className="animate-rise flex items-center gap-3">
            <span className="h-px w-8 bg-cyan" />
            <p className="eyebrow">Enter the unknown</p>
          </div>

          <h1
            className="animate-rise font-display mt-6 font-bold leading-[0.86] tracking-[-0.02em]"
            style={{ fontSize: "clamp(52px, 13vw, 168px)", animationDelay: "80ms" }}
          >
            INTEL<span className="text-glow text-cyan">-X</span>
          </h1>

          <p
            className="animate-rise mt-7 max-w-md text-2xl leading-tight text-muted-foreground sm:text-3xl md:text-4xl"
            style={{ animationDelay: "160ms" }}
          >
            Where intelligence meets
            <br />
            exploration.
          </p>

          <p
            className="animate-rise mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground/80"
            style={{ animationDelay: "220ms" }}
          >
            A next-generation technology experience built around ideas, challenges, creativity and
            intelligent thinking.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#register"
              className="hud glow-cyan group inline-flex items-center justify-center gap-3 border border-cyan/60 bg-cyan/5 px-8 py-4 !text-soft-cyan transition-all duration-300 hover:border-cyan hover:bg-cyan/15 hover:shadow-[0_0_46px_-6px_var(--cyan)]"
            >
              Enter Intel-X
              <span className="font-sans text-base leading-none tracking-normal transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#event"
              className="hud inline-flex items-center justify-center border border-line px-8 py-4 transition-colors duration-300 hover:border-cyan/50 hover:!text-foreground"
            >
              Explore Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
