import Image from 'next/image';
import Link from 'next/link';
import { appearanceStats } from '@/data/appearances';
import { formatCompactNumber } from '@/lib/format';

/**
 * Cinematic blue hero with a full-bleed photo of Eddy on stage.
 * Heavy midnight/royal gradients keep the text legible while the photo
 * carries the "stage presence" message.
 */
export default function Hero() {
  const whatsappHref = 'https://wa.me/4917676642953';

  const stats = [
    { label: 'Events hosted', value: `${appearanceStats.totalEvents}+` },
    { label: 'On stage', value: 'Live host' },
    {
      label: 'People reached',
      value: formatCompactNumber(appearanceStats.totalAudience),
    },
  ];

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      {/* Full-bleed stage photo */}
      <Image
        src="/appearances/eddy-hero.jpg"
        alt="Eddy hosting an event with a microphone in front of the crowd"
        fill
        priority
        sizes="100vw"
        className="cine-image -z-20 object-cover object-[50%_20%]"
      />
      {/* Cinematic blue grading overlays for depth + legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-transparent to-midnight/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-royal/30 blur-[120px] animate-glow-pulse"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.4em] text-electric">
            Moderator · Master of Ceremonies · Trilingual
          </p>

          <h1
            className="mt-6 animate-fade-up font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-silver-light">Commanding the stage with</span>{' '}
            <span className="text-gradient-blue">presence &amp; precision</span>
          </h1>

          <p
            className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-silver/85 text-pretty"
            style={{ animationDelay: '0.22s' }}
          >
            I&apos;m Eddy — an international moderator and communication expert. Trilingual in
            English, French and German, I host conferences, galas and high-profile panels,
            turning complex programmes into confident, memorable experiences.
          </p>

          <div
            className="mt-12 flex animate-scale-in flex-col items-start gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="#appearances"
              className="group relative inline-flex items-center gap-2 rounded-full bg-royal px-8 py-4 text-sm font-semibold text-white shadow-glow transition hover:bg-royal-light hover:shadow-glow-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
            >
              View event appearances
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-hairline glass px-8 py-4 text-sm font-semibold text-silver-light transition hover:border-electric/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            >
              Book Eddy
            </Link>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border-hairline glass">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-gradient-blue sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-silver-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
