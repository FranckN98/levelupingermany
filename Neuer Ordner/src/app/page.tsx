import EddyExperience from '@/components/EddyExperience';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <EddyExperience initialLanguage="fr" />
    </>
  );
}
