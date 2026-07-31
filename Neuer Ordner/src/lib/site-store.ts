import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { appearances } from '@/data/appearances';
import type { EventAppearance } from '@/data/appearances.types';
import { content, siteSettings, type SiteContent, type SiteSettings } from '@/data/site-content';

export interface SiteData {
  content: SiteContent;
  siteSettings: SiteSettings;
  events: EventAppearance[];
}

const storePath = path.join(process.cwd(), '.data', 'site-content.json');

const defaults = (): SiteData => JSON.parse(JSON.stringify({ content, siteSettings, events: appearances }));

export async function readSiteData(): Promise<SiteData> {
  try {
    const saved = JSON.parse(await readFile(storePath, 'utf8')) as Partial<SiteData>;
    return { ...defaults(), ...saved, events: saved.events ?? appearances };
  } catch {
    return defaults();
  }
}

export async function writeSiteData(data: SiteData): Promise<void> {
  await mkdir(path.dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify(data, null, 2), 'utf8');
}