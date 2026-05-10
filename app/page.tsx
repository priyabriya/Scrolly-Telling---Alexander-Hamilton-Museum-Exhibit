import Hero from "@/components/Hero";
import ScrollyScene from "@/components/ScrollyScene";
import ThesisFrame from "@/components/ThesisFrame";
import AudienceCard from "@/components/AudienceCard";
import EmphasisBand from "@/components/EmphasisBand";
import Link from "next/link";
import { artifacts, timelineEvents, audienceCards, siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <main>
      {/* ── 1. Full-screen scrollytelling hero ── */}
      <Hero />

      {/* ── 2. Thesis frame ── */}
      <ThesisFrame
        id="thesis"
        eyebrow="The Founding Argument"
        lead="One man. One pen. A nation built from words."
        body="From St. Croix to the Treasury — Hamilton's story is the original American story of radical self-invention, extraordinary output, and fatal ambition."
      />

      {/* ── 3. Emphasis band: key stats ── */}
      <EmphasisBand stats={siteConfig.stats} />

      {/* ── 4. Artifacts as numbered scrolly scenes ── */}
      <section id="artifacts" className="scrolly-stack">
        <div className="scrolly-stack__inner">

          <div className="scrolly-stack__header scrolly-scene">
            <p className="section-label-eyebrow">Primary Sources &amp; Sites</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "Cinzel Decorative, serif",
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                color: "#1a1208",
                lineHeight: 1.25,
                margin: "0 0 0.5rem",
              }}
            >
              Documents That Built a Nation
            </h2>
            <div className="section-label-rule" />
          </div>

          {artifacts.map((a, i) => (
            <ScrollyScene
              key={a.id}
              number={a.number}
              label={a.type}
              delay={i * 60}
            >
              {/* Artifact card inside the scene */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                {/* Ghost background number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "1rem",
                    fontFamily: "Cinzel Decorative, serif",
                    fontSize: "4rem",
                    color: "#e8d9b8",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {a.number}
                </span>

                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8b3a1e",
                    marginBottom: "0.75rem",
                  }}
                >
                  {a.type} · {a.year}
                </p>

                <h3
                  style={{
                    fontFamily: "Cinzel Decorative, serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#1b2a4a",
                    marginBottom: "1rem",
                    lineHeight: 1.35,
                    maxWidth: "28ch",
                  }}
                >
                  {a.title}
                </h3>

                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.98rem",
                    color: "#1a1208",
                    opacity: 0.85,
                    lineHeight: 1.75,
                    marginBottom: "1rem",
                  }}
                >
                  {a.description}
                </p>

                <p
                  style={{
                    fontFamily: "IM Fell English, Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "#8b3a1e",
                    paddingTop: "1rem",
                    borderTop: "1px solid #e8d9b8",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                  }}
                >
                  {a.significance}
                </p>

                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#b8860b",
                    textDecoration: "none",
                    borderBottom: "1px solid transparent",
                    transition: "border-color 0.2s",
                  }}
                  className="hover:border-b-[#b8860b]"
                >
                  {a.linkLabel} →
                </a>
              </div>
            </ScrollyScene>
          ))}

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <Link
              href="/artifacts"
              className="inline-block px-8 py-3 border border-[#b8860b] font-serif text-[0.8rem] tracking-[0.15em] uppercase text-[#b8860b] hover:bg-[#b8860b] hover:text-[#fdf6e3] transition-colors no-underline"
            >
              View Full Artifacts Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Timeline as scrolly scenes on dark background ── */}
      <section id="timeline" className="scrolly-stack" style={{ background: "#1b2a4a", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="scrolly-stack__inner">
          <div className="scrolly-stack__header scrolly-scene" style={{ textAlign: "center" }}>
            <p className="section-label-eyebrow">Chronology</p>
            <h2
              style={{
                fontFamily: "Cinzel Decorative, serif",
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                color: "#f5edd8",
                lineHeight: 1.25,
                margin: "0 0 0.5rem",
              }}
            >
              From St. Croix to the Treasury
            </h2>
            <div className="section-label-rule" style={{ background: "#b8860b", margin: "0.75rem auto 1.5rem" }} />
          </div>

          {timelineEvents.slice(0, 4).map((ev, i) => (
            <ScrollyScene
              key={ev.id}
              number={String(i + 1).padStart(2, "0")}
              label="Event"
              delay={i * 80}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Cinzel Decorative, serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    color: "#d4a843",
                    marginBottom: "0.5rem",
                  }}
                >
                  {ev.year}
                </p>
                <h3
                  style={{
                    fontFamily: "IM Fell English, Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "1.25rem",
                    color: "#f5edd8",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {ev.event}
                </h3>
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.95rem",
                    color: "#e8d9b8",
                    opacity: 0.8,
                    lineHeight: 1.75,
                    maxWidth: "60ch",
                  }}
                >
                  {ev.detail}
                </p>
              </div>
            </ScrollyScene>
          ))}

          <div style={{ marginTop: "1rem" }}>
            <Link
              href="/timeline"
              className="inline-block px-8 py-3 border border-[#b8860b] font-serif text-[0.8rem] tracking-[0.15em] uppercase text-[#d4a843] hover:bg-[#b8860b] hover:text-[#1b2a4a] transition-colors no-underline"
            >
              View Full Timeline →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Audience cards ── */}
      <section id="audience" className="scrolly-stack" style={{ background: "#e8d9b8" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div className="scrolly-stack__header scrolly-scene" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <p className="section-label-eyebrow">Who This Exhibit Is For</p>
            <h2
              style={{
                fontFamily: "Cinzel Decorative, serif",
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                color: "#1a1208",
                margin: "0 0 0.5rem",
              }}
            >
              Three Ways In
            </h2>
            <div className="section-label-rule" style={{ margin: "0.75rem auto 1rem" }} />
            <p
              style={{
                fontFamily: "IM Fell English, Georgia, serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "#8b3a1e",
                maxWidth: "52ch",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              &ldquo;His influence is still felt every time we use a $10 bill or trade stocks.&rdquo;
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {audienceCards.map((c) => (
              <AudienceCard key={c.id} card={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Closing zone ── */}
      <div className="closing-zone scrolly-scene">
        <div className="closing-zone__inner">
          <p className="closing-zone__label">Begin Your Journey</p>
          <h2 className="closing-zone__title">The Story Doesn&apos;t End Here</h2>
          <p className="closing-zone__body">
            Explore the artifacts, walk the timeline, and discover the man behind the money —
            the orphan who wrote a nation into existence.
          </p>
          <nav className="closing-zone__links">
            <Link href="/artifacts" className="closing-zone__link">Artifacts Gallery</Link>
            <Link href="/timeline" className="closing-zone__link">Full Timeline</Link>
            <Link href="/audience" className="closing-zone__link">Find Your Entry Point</Link>
          </nav>
          <p className="closing-zone__ornament">✦ ✦ ✦</p>
        </div>
      </div>
    </main>
  );
}
