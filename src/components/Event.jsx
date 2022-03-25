import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from '../utils/utils.js';
import { Button } from './Button';

export function Event({ loggedIn }) {

  const [comment, setComment] = useState('');
  const [signups, setRegistrations] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [event, setEvent] = useState([{}]);
  const [loading, setLoading] = useState();

  const { id: eSlug } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await fetch(
        `https://vef2-2022-v3.herokuapp.com/events/${eSlug}`
      );

      const { event, signups } = await result.json();

      setLoading(false);
      setEvent(event);
      setRegistrations(signups);
    }

    fetchData();
  }, [eSlug]);

  const submitRegistration = (e) => {
    e.preventDefault();
    setRegistrations([...signups, { username: 'Johnny Bravo', comment: comment }]);
    setComment('');
    setIsRegistered(true);
  };

  return (
    <div>
      {loading && <p>Sækir gögn...</p>}
      <h1 className="event-title">{event[0].name}</h1>
      <div className="event-info">
        <p className="event-desc">{event[0].description}</p>
        <p>
          Viðburður búinn til: {formatDate(event[0].created)} af {event[0].creator}
        </p>
      </div>
      <ul className="event-registered">
        {signups.map((signups, i) => (
          <li className="signups-registeredItem" key={i}>
            <p className="event-registeredName">{signups.username}</p>
            <p className="event-registeredComment">{signups.comment}</p>
          </li>
        ))}
      </ul>
      {loggedIn && !isRegistered && (
        <form onSubmit={submitRegistration}>
          <div className="field">
            <label>Athugasemd:</label>
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Button>Skrá á viðburð</Button>
        </form>
      )}
      <Link to={-1}>
        <p className="link">Til baka</p>
      </Link>
    </div>
  );
}
