import { NextResponse } from 'next/server';
import { readSiteData } from '@/lib/site-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(await readSiteData(), {
    headers: { 'Cache-Control': 'no-store' },
  });
}