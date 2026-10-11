"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

function useInView<T extends HTMLElement>(threshold: number) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.12);
  return <div ref={ref} className={`reveal ${inView ? "is-visible" : ""} ${className}`}>{children}</div>;
}

/** Light each word in sequence once the paragraph enters the viewport. */
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const [ref, inView] = useInView<HTMLParagraphElement>(0.3);
  return (
    <p ref={ref} className={`words ${inView ? "is-visible" : ""} ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word" style={{ "--i": i } as CSSProperties}>{word} </span>
      ))}
    </p>
  );
}
