import { sortedAppearances } from '@/data/appearances';

/**
 * Credentials marquee (Vinh Giang–style trust strip).
 * Reuses existing event data — a continuously scrolling line of stages Eddy
 * has hosted. No new content; purely a layout/positioning element.
 */
export default function TrustStrip() {
  const items = sortedAppearances.map((a) => a.title);
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Stages Eddy has hosted"
      className="relative border-y border-white/5 py-7"
    >
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.4em] text-silver-muted">
        Trusted on stages
      </p>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track items-center gap-10 px-5">
          {loop.map((title, i) => (
            <li key={`${title}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-lg font-medium text-silver/70">
                {title}
              </span>
              <span aria-hidden className="text-electric/60">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
