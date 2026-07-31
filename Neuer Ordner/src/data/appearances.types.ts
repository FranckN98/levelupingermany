/**
 * Domain types for Eddy's event-appearance showcase.
 *
 * Kept framework-agnostic so this can later be sourced from a CMS / database
 * (Prisma model, Sanity, Contentful, ...) without touching the UI layer.
 */

export type EventRole =
  | 'Master of Ceremonies'
  | 'Moderator'
  | 'Panel Host'
  | 'Keynote Host'
  | 'Conference Host'
  | 'Interviewer';

export type EventType =
  | 'Conference'
  | 'Award Ceremony'
  | 'Panel Discussion'
  | 'Gala'
  | 'Summit'
  | 'Product Launch'
  | 'Fireside Chat';

/** A single moderating moment captured on camera. */
export type EventMoment =
  | 'on-stage'
  | 'panel'
  | 'microphone'
  | 'audience'
  | 'introducing-speaker'
  | 'ceremony'
  | 'backstage'
  | 'guest-discussion'
  | 'branding'
  | 'high-energy';

export interface EventMedia {
  /** Public image path or remote URL. */
  src: string;
  /** Meaningful alt text for accessibility & SEO. */
  alt: string;
  /** Natural aspect ratio, used for masonry sizing. */
  width: number;
  height: number;
  /** Optional video (mp4/webm) for high-energy moments. */
  videoSrc?: string;
  moment: EventMoment;
}

export interface EventAppearance {
  /** Stable slug — future deep links: /appearances/[slug]. */
  slug: string;
  title: string;
  type: EventType;
  role: EventRole;
  /** Venue, hotel, theatre or precise event location. */
  venue?: string;
  city: string;
  country: string;
  /** ISO date (YYYY-MM-DD) for correct sorting & <time> semantics. */
  date: string;
  /** One-line outcome that communicates impact. */
  impact: string;
  /** Audience size, surfaced as a credibility stat. */
  audience?: number;
  /** Marks the hero / featured appearance. */
  featured?: boolean;
  /** Hidden events remain in administration but are excluded from the public site. */
  published?: boolean;
  cover: EventMedia;
  gallery?: EventMedia[];
}
