import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-electric">
          Let&apos;s talk
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
          <span className="text-silver-light">Bring</span>{' '}
          <span className="text-gradient-blue">presence</span>{' '}
          <span className="text-silver-light">to your next event</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-silver/75 text-pretty">
          Conferences, galas, panels and ceremonies. Tell me about your stage and audience —
          I&apos;ll make it unforgettable.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@eddy-host.com"
            className="inline-flex items-center gap-2 rounded-full bg-royal px-8 py-4 text-sm font-semibold text-white shadow-glow transition hover:bg-royal-light hover:shadow-glow-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            hello@eddy-host.com
          </a>
          <Link
            href="#appearances"
            className="inline-flex items-center gap-2 rounded-full border-hairline glass px-8 py-4 text-sm font-semibold text-silver-light transition hover:border-electric/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            See appearances
          </Link>
        </div>
      </div>

      <p className="mt-20 text-center text-xs text-silver-muted">
        © {new Date().getFullYear()} Eddy. Moderator &amp; Master of Ceremonies.
      </p>
    </footer>
  );
}
