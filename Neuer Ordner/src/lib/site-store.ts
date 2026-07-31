import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { list, put } from '@vercel/blob';
import { appearances } from '@/data/appearances';
import type { EventAppearance } from '@/data/appearances.types';
import { defaultProfileLinks, type ProfileLink } from '@/data/links.types';
import { content, siteSettings, type SiteContent, type SiteSettings } from '@/data/site-content';

export interface SiteData {
  content: SiteContent;
  siteSettings: SiteSettings;
  events: EventAppearance[];
  links: ProfileLink[];
}

const storePath = path.join(process.cwd(), '.data', 'site-content.json');
const blobPathname = 'cms/site-content.json';

const defaults = (): SiteData => JSON.parse(JSON.stringify({ content, siteSettings, events: appearances, links: defaultProfileLinks }));

export async function readSiteData(): Promise<SiteData> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: blobPathname });
      const contentBlob = blobs.find((blob) => blob.pathname === blobPathname);
      if (!contentBlob) return defaults();
      const saved = await fetch(contentBlob.url, { cache: 'no-store' }).then((response) => response.json()) as Partial<SiteData>;
      return { ...defaults(), ...saved, events: saved.events ?? appearances };
    } catch {
      return defaults();
    }
  }
  try {
    const saved = JSON.parse(await readFile(storePath, 'utf8')) as Partial<SiteData>;
    const base = defaults();
    const savedSocial = saved.siteSettings?.social ?? [];
    const social = [
      ...savedSocial,
      ...base.siteSettings.social.filter((item) => !savedSocial.some((savedItem) => savedItem.label === item.label)),
    ];
    return {
      ...base,
      ...saved,
      siteSettings: { ...base.siteSettings, ...saved.siteSettings, social },
      events: saved.events ?? appearances,
      links: saved.links ?? defaultProfileLinks,
    };
  } catch {
    return defaults();
  }
}

export async function writeSiteData(data: SiteData): Promise<void> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(blobPathname, JSON.stringify(data), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
    });
    return;
  }
  await mkdir(path.dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify(data, null, 2), 'utf8');
}