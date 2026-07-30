import Image from 'next/image';
import Link from 'next/link';
import {
  featuredAppearance,
  sortedAppearances,
} from '@/data/appearances';
import { formatEventDate } from '@/lib/format';
import Reveal from './Reveal';

/**
 * Event Appearances showcase.
 *
 * Vinh Giang–inspired structure:
 *  1. Centered section intro
 *  2. Featured large event photo with full story overlay
 *  3. Alternating (zig-zag) editorial image + text rows
 */
export default function AppearancesShowcase() {
  const featured = featuredAppearance;
  const rest = sortedAppearances.filter((e) => e.slug !== featured.slug);

  return (
    <section
      id="appearances"
      aria-labelledby="appearances-heading"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28"
    >
      {/* Intro — centered, editorial */}
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-electric">
          On stage
        </p>
        <h2
          id="appearances-heading"
          className="mt-4 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl"
        >
          <span className="text-silver-light">Event</span>{' '}
          <span className="text-gradient-blue">appearances</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver/75 text-pretty">
          A curated selection of stages — from international summits to black-tie galas.
          Active, experienced and at home in front of any audience.
        </p>
      </Reveal>

      {/* Featured appearance */}
      <Reveal className="mt-14" delay={80}>
        <Link
          href={`#${featured.slug}`}
          className="group relative block overflow-hidden rounded-3xl border-hairline shadow-glow transition duration-500 hover:shadow-glow-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="cine-image object-cover object-[50%_20%] transition duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-transparent"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-electric px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-midnight">
                Featured
              </span>
              <span className="rounded-full bg-royal/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                {featured.role}
              </span>
              <span className="rounded-full border-hairline glass px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-silver-light">
                {featured.type}
              </span>
            </div>

            <h3 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-white text-balance sm:text-4xl md:text-5xl">
              {featured.title}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-silver-light">
              <time dateTime={featured.date}>{formatEventDate(featured.date)}</time>
              <span aria-hidden className="text-silver-muted">·</span>
              <span>
                {featured.city}, {featured.country}
              </span>
              {featured.audience ? (
                <>
                  <span aria-hidden className="text-silver-muted">·</span>
                  <span>{featured.audience.toLocaleString('en-GB')} attendees</span>
                </>
              ) : null}
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-silver/85 text-pretty">
              {featured.impact}
            </p>
          </div>
        </Link>
      </Reveal>

      {/* Alternating (zig-zag) editorial rows */}
      <div className="mt-24 space-y-24 lg:space-y-32">
        {rest.map((event, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={event.slug}>
              <article
                id={event.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div className={reversed ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="group relative overflow-hidden rounded-3xl border-hairline shadow-glow">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={event.cover.src}
                        alt={event.cover.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="cine-image object-cover object-[50%_20%] transition duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={reversed ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-royal/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                      {event.role}
                    </span>
                    <span className="rounded-full border-hairline glass px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-silver-light">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-semibold text-silver-light text-balance sm:text-4xl">
                    {event.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium uppercase tracking-widest text-electric">
                    <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                    <span aria-hidden className="text-silver-muted">·</span>
                    <span className="text-silver-muted">
                      {event.city}, {event.country}
                    </span>
                    {event.audience ? (
                      <>
                        <span aria-hidden className="text-silver-muted">·</span>
                        <span className="text-silver-muted">
                          {event.audience.toLocaleString('en-GB')} attendees
                        </span>
                      </>
                    ) : null}
                  </div>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-silver/80 text-pretty">
                    {event.impact}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
