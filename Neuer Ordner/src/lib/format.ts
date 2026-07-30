/** Small formatting helpers shared across the UI. */

export function formatEventDate(iso: string, locale = 'en-GB'): string {
  return new Date(iso).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function formatCompactNumber(value: number, locale = 'en-GB'): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}
