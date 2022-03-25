import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Login = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="user">
      {loggedIn ? (
        <React.Fragment>
          <p className="user-loggedIn">Skráð/ur inn sem: Johnny Bravo</p>
          <Button onClick={() => setLoggedIn(false)}>Útskráning</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/login">Skrá inn</Link>
          <Button onClick={() => setLoggedIn(true)}>Nýskráning</Button>
        </React.Fragment>
      )}
    </div>
  );
};
