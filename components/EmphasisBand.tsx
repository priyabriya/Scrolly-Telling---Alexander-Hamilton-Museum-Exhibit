"use client";

import { useEffect, useRef } from "react";

interface Stat {
  value: string;
  label: string;
}

export default function EmphasisBand({ stats }: { stats: readonly Stat[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("scrolly-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="emphasis-band">
      <div className="emphasis-band__inner">
        {stats.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => { refs.current[i] = el; }}
            data-delay={i * 100}
            className="emphasis-card"
          >
            <div className="emphasis-card__value">{s.value}</div>
            <div className="emphasis-card__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
