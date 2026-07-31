import { NextRequest, NextResponse } from 'next/server';
import { readSiteData, writeSiteData, type SiteData } from '@/lib/site-store';

export const dynamic = 'force-dynamic';

function authorised(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  return Boolean(password && request.headers.get('x-admin-password') === password);
}

export async function GET(request: NextRequest) {
  if (!authorised(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await readSiteData(), { headers: { 'Cache-Control': 'no-store' } });
}

export async function PUT(request: NextRequest) {
  if (!authorised(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await request.json() as SiteData;
  if (!data.content || !data.siteSettings || !Array.isArray(data.events)) return NextResponse.json({ error: 'Invalid content payload' }, { status: 400 });
  await writeSiteData(data);
  return NextResponse.json({ ok: true });
}