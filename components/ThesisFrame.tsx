"use client";

import { useEffect, useRef } from "react";

interface ThesisFrameProps {
  id?: string;
  eyebrow?: string;
  lead: string;
  body?: string;
}

export default function ThesisFrame({ id, eyebrow, lead, body }: ThesisFrameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scrolly-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} className="thesis-frame">
      <div ref={ref} className="scrolly-scene thesis-inner">
        {eyebrow && (
          <p className="thesis-eyebrow">{eyebrow}</p>
        )}
        <p className="thesis-lead">{lead}</p>
        {body && <p className="thesis-body">{body}</p>}
      </div>
    </div>
  );
}
