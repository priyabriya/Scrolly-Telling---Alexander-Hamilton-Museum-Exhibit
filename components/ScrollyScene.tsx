"use client";

import { useEffect, useRef } from "react";

interface ScrollySceneProps {
  number: string;
  label?: string;
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollyScene({
  number,
  label = "Scene",
  children,
  delay = 0,
}: ScrollySceneProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("scrolly-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      className="scrolly-scene"
    >
      {/* Rail: number + label */}
      <div className="scrolly-rail">
        <span className="scrolly-number">{number}</span>
        <span className="scrolly-label">{label}</span>
      </div>

      {/* Card content */}
      <article className="scrolly-card">
        {children}
      </article>
    </section>
  );
}
