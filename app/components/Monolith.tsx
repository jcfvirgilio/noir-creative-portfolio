"use client";

import { useEffect, useRef } from "react";

/**
 * Brushed-steel monolith built from five CSS planes in real 3D space.
 * Decorative only: hidden from assistive tech, tilt follows the pointer on
 * hover-capable devices when motion is allowed.
 */
export function Monolith() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--tilt-y", `${(e.clientX / window.innerWidth - 0.5) * 10}deg`);
      el.style.setProperty("--tilt-x", `${-(e.clientY / window.innerHeight - 0.5) * 6}deg`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="monolith-stage" aria-hidden="true">
      <div className="monolith-floor" />
      <div className="monolith-tilt" ref={tiltRef}>
        <div className="monolith">
          <div className="face face-front" />
          <div className="face face-back" />
          <div className="face face-right" />
          <div className="face face-left" />
          <div className="face face-top" />
        </div>
      </div>
      <span className="figure-caption mono">FIG. 01 — FORM STUDY / CONCEPTUAL</span>
    </div>
  );
}
