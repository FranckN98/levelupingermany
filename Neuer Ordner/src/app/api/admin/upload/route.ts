import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  if (!process.env.ADMIN_PASSWORD || request.headers.get('x-admin-password') !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const formData = await request.formData();
  const image = formData.get('image');
  if (!(image instanceof File) || !image.type.startsWith('image/')) return NextResponse.json({ error: 'Veuillez sélectionner une image valide.' }, { status: 400 });
  if (image.size > 8 * 1024 * 1024) return NextResponse.json({ error: 'L’image doit faire moins de 8 Mo.' }, { status: 400 });
  const extension = image.name.split('.').pop()?.replace(/[^a-z0-9]/gi, '').toLowerCase() || 'jpg';
  const directory = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(directory, { recursive: true });
  const filename = `${randomUUID()}.${extension}`;
  await writeFile(path.join(directory, filename), Buffer.from(await image.arrayBuffer()));
  return NextResponse.json({ src: `/uploads/${filename}` });
}