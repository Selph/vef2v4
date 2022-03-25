import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Event } from './Event';
import { Events } from './Events';
import { Login } from './Login';
import { LoginForm } from './LoginForm';

export function Layout({ loggedIn, setLoggedIn }) {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events/:id" element={<Event loggedIn={loggedIn} />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </React.Fragment>
  );
}
