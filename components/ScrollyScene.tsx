"use client";

import { useEffect, useRef } from "react";

interface ScrollySceneProps {
  number: string;
  label?: string;
  children: React.ReactNode;
  delay?: number;
  dark?: boolean;
}

export default function ScrollyScene({
  number,
  label = "Scene",
  children,
  delay = 0,
  dark = false,
}: ScrollySceneProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("scrolly-visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section ref={ref} className="scrolly-scene">
      {/* Rail: number · divider line · label */}
      <div className="scrolly-rail">
        <span className="scrolly-number">{number}</span>
        <span className="scrolly-rail-line" />
        <span className="scrolly-label">{label}</span>
      </div>

      {/* Card */}
      <article className={`scrolly-card${dark ? " scrolly-card--dark" : ""}`}>
        {children}
      </article>
    </section>
  );
}
