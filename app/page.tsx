import Hero from "@/components/Hero";
import ScrollyScene from "@/components/ScrollyScene";
import ThesisFrame from "@/components/ThesisFrame";
import EmphasisBand from "@/components/EmphasisBand";
import AudienceCard from "@/components/AudienceCard";
import Link from "next/link";
import { artifacts, timelineEvents, audienceCards, siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════
          1. HERO — full-screen cinematic entry
      ══════════════════════════════════════════ */}
      <Hero />

      {/* ══════════════════════════════════════════
          2. THESIS — the central claim
      ══════════════════════════════════════════ */}
      <ThesisFrame
        id="thesis"
        eyebrow="The Founding Argument"
        lead="One man. One pen. A nation built from words."
        body="From St. Croix to the Treasury — Hamilton's story is the original American story of radical self-invention, extraordinary output, and fatal ambition."
      />

      {/* ══════════════════════════════════════════
          3. STATS — key numbers
      ══════════════════════════════════════════ */}
      <EmphasisBand stats={siteConfig.stats} />

      {/* ══════════════════════════════════════════
          4. ARTIFACTS — primary sources as scrolly scenes
      ══════════════════════════════════════════ */}
      <section
        id="artifacts"
        className="scrolly-stack"
        style={{ background: "#f5edd8" }}
      >
        <div className="scrolly-stack__inner">

          {/* Section header */}
          <div className="scrolly-stack__header scrolly-scene">
            <p className="stack-eyebrow">Primary Sources &amp; Sites</p>
            <h2 className="stack-heading" style={{ color: "#1a1208" }}>
              Documents That Built a Nation
            </h2>
          </div>

          {/* Artifact scenes */}
          {artifacts.map((a, i) => (
            <ScrollyScene
              key={a.id}
              number={a.number}
              label={a.type}
              delay={i * 80}
            >
              {/* Ghost number */}
              <span className="artifact-number-bg" aria-hidden="true">{a.number}</span>

              <p className="artifact-meta">{a.type} · {a.year}</p>
              <h3 className="artifact-title">{a.title}</h3>
              <p className="artifact-desc">{a.description}</p>
              <p className="artifact-significance">{a.significance}</p>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="artifact-link"
              >
                {a.linkLabel} →
              </a>
            </ScrollyScene>
          ))}

          {/* CTA */}
          <div style={{ paddingTop: "1rem" }}>
            <Link
              href="/artifacts"
              style={{
                display: "inline-block",
                padding: "0.85rem 2.25rem",
                border: "1px solid #b8860b",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#b8860b",
                textDecoration: "none",
                transition: "background 0.25s, color 0.25s",
              }}
              className="hover:bg-[#b8860b] hover:text-[#f5edd8]"
            >
              View Full Artifacts Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Section ornamental divider */}
      <div style={{ background: "#1b2a4a", padding: "2rem 0" }}>
        <div className="section-divider">
          <span className="section-divider__line" />
          <span className="section-divider__ornament">✦ ✦ ✦</span>
          <span className="section-divider__line" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          5. TIMELINE — key events as dark scrolly scenes
      ══════════════════════════════════════════ */}
      <section
        id="timeline"
        className="scrolly-stack"
        style={{ background: "#1b2a4a" }}
      >
        <div className="scrolly-stack__inner">

          <div className="scrolly-stack__header scrolly-scene">
            <p className="stack-eyebrow" style={{ color: "#b8860b" }}>Chronology</p>
            <h2 className="stack-heading" style={{ color: "#f5edd8" }}>
              From St. Croix to the Treasury
            </h2>
          </div>

          {timelineEvents.slice(0, 4).map((ev, i) => (
            <ScrollyScene
              key={ev.id}
              number={String(i + 1).padStart(2, "0")}
              label="Event"
              delay={i * 90}
              dark
            >
              <p className="timeline-year">{ev.year}</p>
              <h3 className="timeline-event">{ev.event}</h3>
              <p className="timeline-detail">{ev.detail}</p>
            </ScrollyScene>
          ))}

          <div style={{ paddingTop: "1rem" }}>
            <Link
              href="/timeline"
              style={{
                display: "inline-block",
                padding: "0.85rem 2.25rem",
                border: "1px solid #b8860b",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#d4a843",
                textDecoration: "none",
                transition: "background 0.25s, color 0.25s",
              }}
              className="hover:bg-[#b8860b] hover:text-[#1b2a4a]"
            >
              View Full Timeline →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. AUDIENCE — three paths into the exhibit
      ══════════════════════════════════════════ */}
      <section id="audience" className="scrolly-stack" style={{ background: "#f5edd8" }}>
        <div className="scrolly-stack__inner">

          <div className="scrolly-stack__header scrolly-scene" style={{ textAlign: "center" }}>
            <p className="stack-eyebrow" style={{ justifyContent: "center" }}>
              Who This Exhibit Is For
            </p>
            <h2 className="stack-heading" style={{ color: "#1a1208" }}>
              Three Ways In
            </h2>
            <p
              style={{
                fontFamily: "IM Fell English, Georgia, serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "#8b3a1e",
                maxWidth: "50ch",
                margin: "1rem auto 0",
                lineHeight: 1.8,
              }}
            >
              &ldquo;His influence is still felt every time we use a $10 bill or trade stocks.&rdquo;
            </p>
          </div>

          <div className="audience-grid">
            {audienceCards.map((c, i) => (
              <AudienceCard key={c.id} card={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CLOSING ZONE
      ══════════════════════════════════════════ */}
      <div className="closing-zone scrolly-scene">
        <div className="closing-zone__inner">
          <p className="closing-zone__label">
            <span>Begin Your Journey</span>
          </p>
          <h2 className="closing-zone__title">
            The Story Doesn&apos;t End Here
          </h2>
          <p className="closing-zone__body">
            Explore the artifacts, walk the timeline, and discover the man behind the money —
            the orphan who wrote a nation into existence.
          </p>
          <nav className="closing-zone__links">
            <Link href="/artifacts" className="closing-zone__link">
              <span>Artifacts Gallery</span>
            </Link>
            <Link href="/timeline" className="closing-zone__link">
              <span>Full Timeline</span>
            </Link>
            <Link href="/audience" className="closing-zone__link">
              <span>Find Your Entry</span>
            </Link>
          </nav>
          <p className="closing-zone__ornament">✦ ✦ ✦</p>
        </div>
      </div>

    </main>
  );
}
