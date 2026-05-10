import Link from "next/link";
import type { AudienceCard as AudienceCardType } from "@/lib/data";

const romans = ["I", "II", "III"];

export default function AudienceCard({ card, index = 0 }: { card: AudienceCardType; index?: number }) {
  return (
    <div className="audience-card">
      <div className="audience-card__roman" aria-hidden="true">
        {romans[index] ?? "·"}
      </div>
      <h3 className="audience-card__title">{card.title}</h3>
      <p className="audience-card__desc">{card.description}</p>
      <Link href={card.entryRoute} className="audience-card__link">
        {card.entryLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
