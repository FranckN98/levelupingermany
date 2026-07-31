'use client';

import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ProfileLink } from '@/data/links.types';

export default function LinksPage() {
  const [links, setLinks] = useState<ProfileLink[]>([]);

  useEffect(() => {
    fetch('/api/site-content').then((response) => response.ok ? response.json() : null).then((data) => setLinks(data?.links?.filter((link: ProfileLink) => link.published) ?? [])).catch(() => undefined);
  }, []);

  return <main className="blue-stage relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-14"><div aria-hidden className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/15 blur-[130px]" /><section className="relative w-full max-w-xl"><header className="text-center"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-electric/40 bg-navy/80 font-display text-4xl font-semibold text-electric shadow-glow">E</div><h1 className="mt-5 font-display text-4xl font-semibold text-white">Eddy Gaetan</h1><p className="mt-2 text-sm font-medium text-silver/70">Event Host · Moderator · Speaker</p><p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-silver/60">One place for every way to connect, collaborate and keep up with Eddy.</p></header><div className="mt-10 grid gap-3">{links.map((link) => <a key={link.id} href={link.url} target={link.url.startsWith('/') ? undefined : '_blank'} rel="noreferrer" className="group flex min-h-20 items-center gap-4 border border-white/15 bg-midnight/65 p-3 transition hover:-translate-y-0.5 hover:border-electric hover:bg-navy/70"><div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden bg-electric/15 text-electric">{link.image ? <img src={link.image} alt="" className="h-full w-full object-cover object-[50%_20%]" /> : <LinkIcon className="h-5 w-5" />}</div><div className="min-w-0 flex-1"><p className="truncate text-base font-bold text-white">{link.title}</p>{link.description && <p className="mt-1 truncate text-xs text-silver/60">{link.description}</p>}</div><ArrowUpRight className="h-5 w-5 shrink-0 text-silver/50 transition group-hover:text-electric" /></a>)}</div><footer className="mt-10 text-center text-xs text-silver/40">© {new Date().getFullYear()} Eddy Gaetan</footer></section></main>;
}