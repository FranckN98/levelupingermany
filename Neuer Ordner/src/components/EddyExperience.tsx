'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Play,
  X,
} from 'lucide-react';
import { sortedAppearances } from '@/data/appearances';
import { content, siteSettings, type Language, type SiteContent, type SiteSettings } from '@/data/site-content';

const languages: { value: Language; label: string }[] = [
  { value: 'fr', label: 'FR' },
  { value: 'en', label: 'EN' },
  { value: 'de', label: 'DE' },
];

function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1100;
      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        setValue(Math.round(target * (1 - (1 - progress) ** 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value.toLocaleString('en-US')}+</span>;
}

function TikTokIcon({ className }: { className?: string }) {
  return <span aria-hidden className={className}>♪</span>;
}

export default function EddyExperience() {
  const [language, setLanguage] = useState<Language>('en');
  const [siteData, setSiteData] = useState<{ content: SiteContent; siteSettings: SiteSettings }>({ content, siteSettings });
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<(typeof sortedAppearances)[number] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const text = siteData.content[language];
  const settings = siteData.siteSettings;
  const locale = language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : 'en-GB';

  useEffect(() => {
    fetch('/api/site-content')
      .then((response) => response.ok ? response.json() : null)
      .then((data) => { if (data?.content && data?.siteSettings) setSiteData(data); })
      .catch(() => undefined);
  }, []);

  const navigateGallery = (direction: 1 | -1) => {
    setGalleryIndex((current) => (current + direction + settings.gallery.length) % settings.gallery.length);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const navItems = [
    { id: 'home', href: '#home' },
    { id: 'about', href: '#about' },
    { id: 'appearances', href: '#appearances' },
    { id: 'gallery', href: '#gallery' },
  ] as const;

  return (
    <main id="main" className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-midnight/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
          <a href="#home" className="font-display text-xl font-semibold tracking-[0.02em] text-white" aria-label="Eddy Gaetan home">
            EDDY<span className="text-electric">.</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.id} href={item.href} className="text-xs font-semibold uppercase tracking-[0.16em] text-silver/75 transition hover:text-white">{text.navigation[item.id]}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <div className="relative hidden border border-white/10 bg-white/5 sm:block">
              <label className="sr-only" htmlFor="language">Language</label>
              <select id="language" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="appearance-none bg-transparent py-2 pl-3 pr-8 text-xs font-bold tracking-[0.12em] text-white outline-none">
                {languages.map((item) => <option key={item.value} value={item.value} className="bg-midnight">{item.label}</option>)}
              </select>
              <ChevronDown aria-hidden className="pointer-events-none absolute right-2 top-2.5 h-3 w-3 text-electric" />
            </div>
            <a href="#contact" className="hidden bg-electric px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-midnight transition hover:bg-electric-light lg:inline-flex">{text.hero.book}</a>
            <button type="button" className="inline-flex p-2 text-white lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Open navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && <div className="mx-auto max-w-7xl border-x border-b border-white/10 bg-midnight/95 px-6 py-6 backdrop-blur-xl lg:hidden"><nav className="grid gap-5" aria-label="Mobile navigation">{navItems.map((item) => <a key={item.id} href={item.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-white">{text.navigation[item.id]}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 bg-electric px-4 py-3 text-center text-sm font-bold text-midnight">{text.hero.book}</a></nav></div>}
      </header>

      <section id="home" className="relative isolate flex min-h-[900px] items-end overflow-hidden pb-16 pt-32 sm:min-h-screen sm:pb-20">
        <Image src="/appearances/eddy-hero.jpg" alt="Eddy Gaetan hosting an event with a microphone" fill priority sizes="100vw" className="-z-30 object-cover object-[62%_center]" />
        <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,7,15,.98)_0%,rgba(5,7,15,.76)_40%,rgba(5,7,15,.08)_78%),linear-gradient(0deg,rgba(5,7,15,.96)_0%,transparent_55%)]" />
        <div aria-hidden className="absolute left-[8%] top-[20%] -z-10 h-56 w-56 rounded-full bg-electric/20 blur-[110px]" />
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.25em] text-electric sm:text-sm">{text.hero.eyebrow}</p>
            <h1 className="mt-7 animate-fade-up font-display text-5xl font-semibold leading-[0.94] text-white sm:text-7xl md:text-8xl" style={{ animationDelay: '100ms' }}>
              {text.hero.title}<br /><span className="text-gradient-blue">{text.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-xl leading-relaxed text-silver-light sm:text-2xl" style={{ animationDelay: '180ms' }}>{text.hero.introduction}</p>
            <p className="mt-4 max-w-lg animate-fade-up text-base leading-relaxed text-silver/75" style={{ animationDelay: '240ms' }}>{text.hero.roles}</p>
            <div className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: '300ms' }}>
              <a href="#contact" className="inline-flex items-center justify-center bg-electric px-6 py-4 text-sm font-bold text-midnight transition hover:translate-y-[-2px] hover:bg-electric-light">{text.hero.book}</a>
              <a href="#appearances" className="inline-flex items-center justify-center border border-white/25 px-6 py-4 text-sm font-bold text-white transition hover:border-electric hover:text-electric">{text.hero.appearances}<ArrowRight className="ml-2 h-4 w-4" /></a>
            </div>
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-2 border-t border-white/20 pt-6 sm:mt-24">
            <div className="border-r border-white/20 pr-6"><dt className="font-display text-4xl font-semibold text-white sm:text-5xl"><Counter target={settings.stats.events} /></dt><dd className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-silver/70">{text.stats.events}</dd></div>
            <div className="pl-6"><dt className="font-display text-4xl font-semibold text-white sm:text-5xl"><Counter target={settings.stats.people} /></dt><dd className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-silver/70">{text.stats.people}</dd></div>
          </dl>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="relative"><div aria-hidden className="absolute -bottom-6 -left-6 h-48 w-48 border-l border-b border-electric/70" /><div className="relative aspect-[4/5] overflow-hidden"><Image src="/appearances/eddy-portrait.jpg" alt="Portrait of Eddy Gaetan holding a microphone" fill sizes="(max-width: 1024px) 88vw, 38vw" className="object-cover object-[50%_20%]" /></div><p className="absolute -bottom-5 right-0 bg-electric px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-midnight">Eddy Gaetan</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-electric">{text.about.eyebrow}</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">{text.about.title}</h2><p className="mt-8 text-lg leading-relaxed text-silver-light">{text.about.body}</p><p className="mt-5 text-base leading-relaxed text-silver/70">{text.about.detail}</p><ul className="mt-9 grid gap-3 sm:grid-cols-2">{text.about.qualities.map((quality, index) => <li key={quality} className="flex items-center gap-3 border-t border-white/10 py-3 text-sm font-medium text-silver-light"><span className="font-display text-xl text-electric">0{index + 1}</span>{quality}</li>)}</ul></div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 border-y border-white/10 bg-navy/20 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-electric">{text.gallery.eyebrow}</p><h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-6xl">{text.gallery.title}</h2></div><p className="max-w-xs text-sm leading-relaxed text-silver/65">{text.gallery.hint}</p></div>
          <div className="mt-12 grid grid-cols-12 gap-3 sm:gap-5">{settings.gallery.map((photo, index) => <button type="button" key={photo.src} onClick={() => { setGalleryIndex(index); setGalleryOpen(true); }} className={`group relative overflow-hidden text-left ${index === 0 ? 'col-span-12 aspect-[16/8] sm:col-span-7' : index === 1 ? 'col-span-6 aspect-[4/5] sm:col-span-5' : 'col-span-6 aspect-square sm:col-span-4'}`}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, 40vw" className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-0 bg-midnight/0 transition group-hover:bg-midnight/20" /><span className="absolute bottom-4 left-4 flex h-8 w-8 items-center justify-center bg-electric text-midnight opacity-0 transition group-hover:opacity-100"><Play className="h-3 w-3 fill-current" /></span></button>)}</div>
        </div>
      </section>

      <section id="appearances" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:py-36"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-electric">{text.appearances.eyebrow}</p><h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-6xl">{text.appearances.title}</h2><p className="mt-6 text-lg leading-relaxed text-silver/70">{text.appearances.body}</p></div><div className="mt-14 grid gap-5 md:grid-cols-2">{sortedAppearances.map((event) => <article key={event.slug} className="group border border-white/10 bg-navy/25 transition hover:border-electric/55"><button type="button" onClick={() => setSelectedEvent(event)} className="block w-full text-left"><div className="relative aspect-[16/10] overflow-hidden"><Image src={event.cover.src} alt={event.cover.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 bg-electric px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-midnight">{event.role}</span></div><div className="p-6"><div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[.12em] text-electric"><time dateTime={event.date}>{new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(new Date(event.date))}</time><span>{event.city}</span></div><h3 className="mt-4 font-display text-2xl font-semibold text-white">{event.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-relaxed text-silver/70">{event.impact}</p><span className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[.1em] text-white">{text.appearances.explore}<ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span></div></button></article>)}</div></section>

      <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[linear-gradient(135deg,#0b1b3a_0%,#05070f_72%)] py-28 lg:py-36"><div aria-hidden className="absolute right-0 top-0 h-[32rem] w-[32rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-royal/30 blur-[130px]" /><div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-electric">{text.contact.eyebrow}</p><h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">{text.contact.title}</h2><p className="mt-7 max-w-lg text-lg leading-relaxed text-silver/75">{text.contact.body}</p><a href={`mailto:${settings.email}`} className="mt-10 inline-flex items-center gap-3 text-lg font-medium text-white transition hover:text-electric"><Mail className="h-5 w-5 text-electric" />{settings.email}</a><a href={settings.phoneHref} className="mt-4 flex items-center gap-3 text-lg font-medium text-white transition hover:text-electric"><Phone className="h-5 w-5 text-electric" />{settings.phone}</a><div className="mt-10 flex gap-3">{settings.social.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="flex h-10 w-10 items-center justify-center border border-white/20 text-[10px] font-bold tracking-[.08em] text-white transition hover:border-electric hover:bg-electric hover:text-midnight">{social.label === 'Instagram' ? 'IG' : social.label === 'LinkedIn' ? 'in' : 'TT'}</a>)}</div></div>
        <form onSubmit={submitForm} className="grid gap-5 border border-white/15 bg-midnight/45 p-6 backdrop-blur sm:grid-cols-2 sm:p-8"><h3 className="col-span-full font-display text-2xl font-semibold text-white">{text.contact.formTitle}</h3>{(['name', 'organisation', 'email', 'phone', 'date', 'location', 'type'] as const).map((field) => <label key={field} className="grid gap-2 text-xs font-bold uppercase tracking-[.1em] text-silver/65">{text.contact.fields[field]}<input required={field !== 'phone'} type={field === 'email' ? 'email' : field === 'date' ? 'date' : 'text'} name={field} className="h-11 border-b border-white/20 bg-transparent px-1 text-base font-normal normal-case tracking-normal text-white outline-none transition focus:border-electric" /></label>)}<label className="col-span-full grid gap-2 text-xs font-bold uppercase tracking-[.1em] text-silver/65">{text.contact.fields.message}<textarea required name="message" rows={4} className="border-b border-white/20 bg-transparent px-1 py-2 text-base font-normal normal-case tracking-normal text-white outline-none transition focus:border-electric" /></label><button type="submit" className="col-span-full mt-2 bg-electric px-5 py-4 text-sm font-bold text-midnight transition hover:bg-electric-light">{submitted ? '✓' : text.contact.send}</button></form>
      </div></section>

      <footer className="border-t border-white/10 px-6 py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-silver/50 sm:flex-row"><p>© {new Date().getFullYear()} Eddy Gaetan</p><p>Event Host · Moderator · Speaker</p></div></footer>

      {galleryOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label="Gallery"><button type="button" onClick={() => setGalleryOpen(false)} className="absolute right-5 top-5 p-3 text-white" aria-label={text.gallery.close}><X /></button><button type="button" onClick={() => navigateGallery(-1)} className="absolute left-3 p-3 text-white sm:left-8" aria-label={text.gallery.previous}><ArrowLeft /></button><div className="relative h-[80vh] w-full max-w-5xl"><Image src={settings.gallery[galleryIndex].src} alt={settings.gallery[galleryIndex].alt} fill sizes="90vw" className="object-contain" /></div><button type="button" onClick={() => navigateGallery(1)} className="absolute right-3 p-3 text-white sm:right-8" aria-label={text.gallery.next}><ArrowRight /></button></div>}
      {selectedEvent && <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight/90 px-4 py-8 backdrop-blur" role="dialog" aria-modal="true" aria-label={selectedEvent.title}><div className="relative mx-auto max-w-4xl border border-white/15 bg-midnight shadow-2xl"><button type="button" onClick={() => setSelectedEvent(null)} className="absolute right-4 top-4 z-10 bg-midnight/80 p-3 text-white" aria-label={text.appearances.close}><X /></button><div className="relative aspect-[16/7]"><Image src={selectedEvent.cover.src} alt={selectedEvent.cover.alt} fill sizes="(max-width: 900px) 100vw, 900px" className="object-cover" /></div><div className="p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.16em] text-electric">{selectedEvent.role} · {selectedEvent.type}</p><h3 className="mt-4 font-display text-4xl font-semibold text-white">{selectedEvent.title}</h3><p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver/80">{selectedEvent.impact}</p><dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3"><div><dt className="text-[10px] font-bold uppercase tracking-[.14em] text-silver/50">{text.appearances.date}</dt><dd className="mt-2 text-sm text-white">{new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(selectedEvent.date))}</dd></div><div><dt className="text-[10px] font-bold uppercase tracking-[.14em] text-silver/50">{text.appearances.location}</dt><dd className="mt-2 text-sm text-white">{selectedEvent.city}, {selectedEvent.country}</dd></div><div><dt className="text-[10px] font-bold uppercase tracking-[.14em] text-silver/50">{text.appearances.role}</dt><dd className="mt-2 text-sm text-white">{selectedEvent.role}</dd></div></dl></div></div></div>}
    </main>
  );
}