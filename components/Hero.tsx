import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="scrolly-hero">
      {/* Giant ghost monogram — CSS-only visual anchor */}
      <span className="scrolly-hero__monogram" aria-hidden="true">AH</span>

      {/* Decorative corner brackets */}
      <div className="scrolly-hero__corner scrolly-hero__corner--tl" aria-hidden="true" />
      <div className="scrolly-hero__corner scrolly-hero__corner--tr" aria-hidden="true" />
      <div className="scrolly-hero__corner scrolly-hero__corner--bl" aria-hidden="true" />
      <div className="scrolly-hero__corner scrolly-hero__corner--br" aria-hidden="true" />

      {/* Main copy */}
      <div className="scrolly-hero__copy">
        <p className="scrolly-hero__eyebrow animate-fade-up delay-200">
          <span>Museum Exhibit</span>
        </p>

        <h1 className="scrolly-hero__title animate-fade-up delay-400">
          {siteConfig.name}
          <em className="scrolly-hero__subtitle">{siteConfig.subtitle}</em>
        </h1>

        <p className="scrolly-hero__dek animate-fade-up delay-600">
          {siteConfig.description}
        </p>

        <div className="scrolly-hero__meta animate-fade-up delay-800">
          {["51 Federalist Papers", "1st Secretary of the Treasury", "1755 – 1804"].map((pill) => (
            <span key={pill} className="scrolly-hero__pill">{pill}</span>
          ))}
        </div>

        <a href="#thesis" className="scrolly-hero__cta animate-fade-up delay-1000">
          <span>Enter the Exhibit</span>
          <span className="scrolly-hero__cta-arrow">→</span>
        </a>
      </div>

      {/* Blockquote — lower right */}
      <blockquote className="scrolly-hero__quote animate-fade-in delay-1200">
        <p>&ldquo;{siteConfig.quote}&rdquo;</p>
        <cite>— Alexander Hamilton</cite>
      </blockquote>

      {/* Scroll indicator */}
      <div className="scrolly-hero__scroll animate-fade-in delay-1200" aria-hidden="true">
        <span className="scrolly-hero__scroll-line" />
        <span className="scrolly-hero__scroll-label">Scroll</span>
      </div>
    </section>
  );
}
