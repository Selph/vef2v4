import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await fetch('https://vef2-2022-v3.herokuapp.com/events/')
      const events = await result.json();

      setLoading(false);
      setEvents(events);
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Viðburðasíðan</h1>
      {loading && <p>Bíð eftir gögnum...</p>}
      <ul>
        {events.map((event) => (
          <li className="events-title" key={event.slug}>
            <Link className="events-link" to={`events/${event.slug}`}>
              {event.name}
            </Link>
            <p className="events-description">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
