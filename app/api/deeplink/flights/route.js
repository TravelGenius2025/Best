import { NextResponse } from 'next/server';
import { AFFILIATES } from '@/lib/affiliates';

const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const origin = searchParams.get('origin') ?? 'DEL';
  const dest = searchParams.get('dest') ?? 'CDG';
  const depart = searchParams.get('depart') ?? '2025-11-12';
  const ret = searchParams.get('ret') ?? '2025-11-20';

  const kayak = `https://www.kayak.com/flights/${p(origin)}-${p(dest)}/${p(depart)}/${p(ret)}?sort=bestflight_a&partnerid=${p(AFFILIATES.KAYAK_PARTNERID)}`;

  return NextResponse.redirect(kayak);
}
