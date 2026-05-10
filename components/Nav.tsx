"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#thesis",   label: "About" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/timeline",  label: "Timeline" },
  { href: "/audience",  label: "Audience" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__brand">
          Alexander Hamilton
        </Link>

        <ul className="site-nav__links" style={{ display: "flex" }}>
          {links.map((l) => (
            <li key={l.href} className="hidden md:block">
              <Link href={l.href} className="site-nav__link">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "#d4a843", padding: "0.25rem", display: "none" }}
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(10,18,32,0.97)", borderTop: "1px solid rgba(184,134,11,0.15)", padding: "1.5rem 1.5rem 2rem" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="site-nav__link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
