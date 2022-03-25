import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Innskráning</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label>Notandanafn:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Lykilorð:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>Skrá inn</Button>
      </form>
      <Link to={-1}>
        <p className="link">Til baka</p>
      </Link>
    </div>
  );
}
