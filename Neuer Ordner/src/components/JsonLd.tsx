import { appearances } from '@/data/appearances';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eddy-host.com';

/**
 * JSON-LD structured data for rich results:
 *  - Person (Eddy) with job title
 *  - Each appearance as an Event with location
 */
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#eddy`,
        name: 'Eddy Gaetan',
        jobTitle: 'Event Host, Moderator & Speaker',
        description:
          'Event host, moderator and speaker bringing presence, energy and purpose to conferences, ceremonies and live conversations.',
        url: siteUrl,
      },
      ...appearances.map((e) => ({
        '@type': 'Event',
        name: e.title,
        startDate: e.date,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: `${e.city}, ${e.country}`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: e.city,
            addressCountry: e.country,
          },
        },
        performer: { '@id': `${siteUrl}/#eddy` },
        description: e.impact,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is static and trusted (built from local data).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
