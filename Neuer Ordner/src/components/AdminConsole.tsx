'use client';

import { FormEvent, useState } from 'react';
import { Eye, LogIn, Save } from 'lucide-react';
import type { SiteData } from '@/lib/site-store';

export default function AdminConsole() {
  const [password, setPassword] = useState('');
  const [draft, setDraft] = useState('');
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const headers = () => ({ 'x-admin-password': password });

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    const response = await fetch('/api/admin/content', { headers: headers() });
    if (!response.ok) {
      setMessage('Mot de passe incorrect ou ADMIN_PASSWORD absent de la configuration.');
      return;
    }
    const data = await response.json() as SiteData;
    setDraft(JSON.stringify(data, null, 2));
    setAuthenticated(true);
  }

  async function save() {
    try {
      const payload = JSON.parse(draft) as SiteData;
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { ...headers(), 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setMessage(response.ok ? 'Modifications enregistrées. La page publique se met à jour immédiatement.' : 'Impossible d’enregistrer les modifications.');
    } catch {
      setMessage('Le contenu doit être du JSON valide avant d’être enregistré.');
    }
  }

  if (!authenticated) {
    return <main className="blue-stage flex min-h-screen items-center justify-center px-6"><form onSubmit={signIn} className="w-full max-w-md border border-white/15 bg-midnight/80 p-8 shadow-2xl backdrop-blur"><p className="text-xs font-bold uppercase tracking-[.2em] text-electric">Eddy Gaetan</p><h1 className="mt-4 font-display text-4xl font-semibold text-white">Administration</h1><p className="mt-4 text-sm leading-relaxed text-silver/70">Connectez-vous pour modifier les textes, contacts, statistiques, liens et galerie.</p><label className="mt-8 grid gap-2 text-xs font-bold uppercase tracking-[.12em] text-silver/70">Mot de passe administrateur<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="h-12 border border-white/20 bg-white/5 px-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-electric" /></label>{message && <p className="mt-4 text-sm text-red-300">{message}</p>}<button className="mt-7 flex w-full items-center justify-center gap-2 bg-electric px-5 py-4 text-sm font-bold text-midnight"><LogIn className="h-4 w-4" />Accéder à l’administration</button></form></main>;
  }

  return <main className="blue-stage min-h-screen px-4 py-8 sm:px-8"><div className="mx-auto max-w-6xl"><header className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-electric">Eddy Gaetan</p><h1 className="mt-3 font-display text-4xl font-semibold text-white">Éditeur de contenu</h1><p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver/70">Modifiez la structure sans toucher au code. Les contenus `fr`, `en` et `de`, les KPI, coordonnées, réseaux et images de galerie sont réunis ici.</p></div><a href="/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-electric hover:text-electric"><Eye className="h-4 w-4" />Voir le site</a></header><section className="mt-8"><label className="grid gap-3 text-xs font-bold uppercase tracking-[.12em] text-silver/70">Contenu de la page<textarea value={draft} onChange={(event) => setDraft(event.target.value)} spellCheck={false} className="min-h-[65vh] w-full resize-y border border-white/15 bg-midnight/70 p-5 font-mono text-sm normal-case leading-6 tracking-normal text-silver-light outline-none focus:border-electric" /></label><div className="mt-5 flex flex-wrap items-center gap-4"><button type="button" onClick={save} className="inline-flex items-center gap-2 bg-electric px-5 py-4 text-sm font-bold text-midnight transition hover:bg-electric-light"><Save className="h-4 w-4" />Enregistrer les modifications</button>{message && <p className="text-sm text-electric-light">{message}</p>}</div></section></div></main>;
}