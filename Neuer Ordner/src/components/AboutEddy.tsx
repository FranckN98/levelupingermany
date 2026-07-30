import Image from 'next/image';
import Reveal from './Reveal';

const expertise = [
  'Conferences',
  'Award ceremonies',
  'Panels & fireside chats',
  'Product launches',
  'Galas',
  'Corporate events',
];

/**
 * Premium portrait band.
 * Pairs Eddy's studio portrait with a short, confident bio — reinforcing the
 * luxury-blue identity and his authority as a host.
 */
export default function AboutEddy() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Portrait */}
        <Reveal className="order-1">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-royal/25 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-3xl border-hairline shadow-glow">
              <Image
                src="/appearances/eddy-portrait.jpg"
                alt="Studio portrait of Eddy in a navy suit holding a microphone"
                width={768}
                height={1152}
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="cine-image h-full w-full object-cover object-[50%_20%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent"
              />
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal className="order-2" delay={80}>
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-electric">
            About Eddy
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl"
          >
            <span className="text-silver-light">A host who makes the</span>{' '}
            <span className="text-gradient-blue">room feel in good hands</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-silver/80 text-pretty">
            From intimate panels to packed conference halls, I bring structure, warmth and
            energy to the stage. My job is to make speakers shine, keep the programme
            flowing, and leave every audience feeling something.
          </p>
          <p className="mt-4 text-base leading-relaxed text-silver/70 text-pretty">
            Calm under pressure, sharp with a script, and completely at ease with a live
            mic and an unscripted moment.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border-hairline glass px-4 py-2 text-sm font-medium text-silver-light"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
