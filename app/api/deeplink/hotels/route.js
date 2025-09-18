import { NextResponse } from 'next/server';
import { AFFILIATES } from '@/lib/affiliates';

const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') ?? 'Paris';
  const checkin = searchParams.get('checkin') ?? '2025-11-12';
  const checkout = searchParams.get('checkout') ?? '2025-11-20';
  const adults = searchParams.get('adults') ?? '2';

  const links = [
    { name: 'Google Hotels', url: `https://www.google.com/travel/hotels?destination=${p(city)}&dates=${p(checkin)}%2C${p(checkout)}&adults=${p(adults)}` },
    { name: 'Booking.com', url: `https://www.booking.com/searchresults.html?ss=${p(city)}&checkin=${p(checkin)}&checkout=${p(checkout)}&group_adults=${p(adults)}&aid=${p(AFFILIATES.BOOKING_AID)}` },
    { name: 'Agoda', url: `https://www.agoda.com/search?city=${p(city)}&checkIn=${p(checkin)}&checkOut=${p(checkout)}&adults=${p(adults)}&cid=${p(AFFILIATES.AGODA_CID)}` },
    { name: 'Expedia', url: `https://www.expedia.com/Hotel-Search?destination=${p(city)}&chkin=${p(checkin)}&chkout=${p(checkout)}&adults=${p(adults)}&affcid=${p(AFFILIATES.EXPEDIA_CAMPAIGN)}` },
    { name: 'Hotels.com', url: `https://www.hotels.com/Hotel-Search?destination=${p(city)}&chkin=${p(checkin)}&chkout=${p(checkout)}&adults=${p(adults)}&affcid=${p(AFFILIATES.HOTELS_CAMPAIGN)}` }
  ];

  return NextResponse.json({ links, url: links[0].url });
}
