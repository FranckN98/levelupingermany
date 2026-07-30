import type { EventAppearance } from './appearances.types';

/**
 * Real event photography of Eddy.
 *
 * Files live in `/public/appearances/`. Replace freely — keep the same file
 * names (or update the `src` strings here). `width`/`height` are approximate
 * natural ratios used only for masonry sizing.
 *
 * NOTE: titles, cities, dates and audience figures below are sensible defaults
 * aligned with what is visible in the photos. Adjust any detail in this single
 * file — no other code changes are needed.
 */

export const appearances: EventAppearance[] = [
  {
    slug: 'level-up-mega-conference-2025',
    title: 'Level Up Mega Conference',
    type: 'Conference',
    role: 'Master of Ceremonies',
    city: 'Frankfurt',
    country: 'Germany',
    date: '2025-10-04',
    impact:
      'Hosted the full programme, working the room with the mic and keeping a packed hall engaged from open to close.',
    audience: 350,
    featured: true,
    cover: {
      src: '/appearances/eddy-mega-conference.jpg',
      alt: 'Eddy hosting the Level Up Mega Conference, speaking among the audience with a microphone',
      width: 1152,
      height: 768,
      moment: 'audience',
    },
  },
  {
    slug: 'momo-by-mtn-activation',
    title: 'MoMo by MTN — Live Activation',
    type: 'Product Launch',
    role: 'Moderator',
    city: 'Frankfurt',
    country: 'Germany',
    date: '2025-07-12',
    impact:
      'Drove a high-energy open-air activation on the main stage, introducing artists and guiding the live audience.',
    audience: 500,
    cover: {
      src: '/appearances/eddy-momo-stage.jpg',
      alt: 'Eddy on the MoMo by MTN stage introducing a performer in front of event branding',
      width: 1600,
      height: 1480,
      moment: 'branding',
    },
  },
  {
    slug: 'diaspora-founders-panel',
    title: 'Diaspora Founders Panel',
    type: 'Panel Discussion',
    role: 'Panel Host',
    city: 'Frankfurt',
    country: 'Germany',
    date: '2025-06-21',
    impact:
      'Moderated a five-person panel of founders and experts, turning a dense topic into a sharp, accessible conversation.',
    audience: 180,
    cover: {
      src: '/appearances/eddy-panel.jpg',
      alt: 'Eddy moderating a five-person founders panel with a microphone',
      width: 1180,
      height: 660,
      moment: 'panel',
    },
  },
  {
    slug: 'level-up-in-germany-edition-1',
    title: 'Level Up in Germany — 1ère Édition',
    type: 'Conference',
    role: 'Conference Host',
    city: 'Frankfurt',
    country: 'Germany',
    date: '2024-10-05',
    impact:
      'Anchored the inaugural edition as host and organiser, setting the tone in front of the event branding.',
    audience: 250,
    cover: {
      src: '/appearances/eddy-levelup-edition.jpg',
      alt: 'Eddy hosting the first edition of Level Up in Germany in front of the event banner',
      width: 768,
      height: 1152,
      moment: 'branding',
    },
  },
  {
    slug: 'summer-open-air',
    title: 'Summer Open-Air Festival',
    type: 'Gala',
    role: 'Master of Ceremonies',
    city: 'Frankfurt',
    country: 'Germany',
    date: '2024-07-20',
    impact:
      'Brought warmth and momentum backstage and on stage, keeping the crowd energised between acts.',
    audience: 600,
    cover: {
      src: '/appearances/eddy-festival.jpg',
      alt: 'Eddy smiling with a microphone backstage at an open-air summer festival',
      width: 768,
      height: 1152,
      moment: 'backstage',
    },
  },
];

/** Newest first — used by the showcase. */
export const sortedAppearances = [...appearances].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const featuredAppearance =
  appearances.find((a) => a.featured) ?? sortedAppearances[0];

/** Aggregate credibility stats derived from the data (no hard-coded numbers). */
export const appearanceStats = {
  totalEvents: appearances.length,
  cities: new Set(appearances.map((a) => a.city)).size,
  countries: new Set(appearances.map((a) => a.country)).size,
  totalAudience: appearances.reduce((sum, a) => sum + (a.audience ?? 0), 0),
};
