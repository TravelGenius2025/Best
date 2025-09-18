'use client';

import { useState } from 'react';

export default function Book() {
  const [origin, setOrigin] = useState('DEL');
  const [dest, setDest] = useState('CDG');
  const [depart, setDepart] = useState('2025-11-12');
  const [ret, setRet] = useState('2025-11-20');
  const [city, setCity] = useState('Paris');
  const [ci, setCi] = useState('2025-11-12');
  const [co, setCo] = useState('2025-11-20');
  const [adults, setAdults] = useState(2);
  const [links, setLinks] = useState([]);

  async function loadHotels() {
    const q = new URLSearchParams({ city, checkin: ci, checkout: co, adults: String(adults) });
    const r = await fetch(`/api/deeplink/hotels?${q.toString()}`);
    const j = await r.json();
    setLinks(j.links || []);
  }

  function openFlight() {
    const q = new URLSearchParams({ origin, dest, depart, ret });
    window.open(`/api/deeplink/flights?${q.toString()}`, '_blank');
  }

  return (
    <div className="card">
      <h2>Plan & Book</h2>
      <div className="grid">
        <div className="card">
          <h3>Flights</h3>
          <input className="input" value={origin} onChange={e=>setOrigin(e.target.value)} placeholder="Origin (e.g., DEL)" />
          <input className="input" value={dest} onChange={e=>setDest(e.target.value)} placeholder="Destination (e.g., CDG)" />
          <label>Depart</label>
          <input className="input" type="date" value={depart} onChange={e=>setDepart(e.target.value)} />
          <label>Return</label>
          <input className="input" type="date" value={ret} onChange={e=>setRet(e.target.value)} />
          <button className="btn" onClick={openFlight}>Search Flights (Kayak)</button>
        </div>
        <div className="card">
          <h3>Hotels</h3>
          <input className="input" value={city} onChange={e=>setCity(e.target.value)} placeholder="City (e.g., Paris)" />
          <label>Check-in</label>
          <input className="input" type="date" value={ci} onChange={e=>setCi(e.target.value)} />
          <label>Check-out</label>
          <input className="input" type="date" value={co} onChange={e=>setCo(e.target.value)} />
          <label>Adults</label>
          <input className="input" type="number" min="1" value={adults} onChange={e=>setAdults(parseInt(e.target.value||'1',10))} />
          <button className="btn" onClick={loadHotels}>Get Hotel Links</button>
          <ul>
            {links.map((l,i)=>(
              <li key={i}><a className="btn" href={l.url} target="_blank" rel="noreferrer">{l.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
