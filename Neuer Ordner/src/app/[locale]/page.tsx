import { notFound } from 'next/navigation';
import EddyExperience from '@/components/EddyExperience';
import JsonLd from '@/components/JsonLd';
import type { Language } from '@/data/site-content';

const locales = ['fr', 'en', 'de'] as const;

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!locales.includes(locale as Language)) notFound();

  return (
    <>
      <JsonLd />
      <EddyExperience initialLanguage={locale as Language} />
    </>
  );
}