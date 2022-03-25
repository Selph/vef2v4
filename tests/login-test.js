import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../components/Login';

test('Login component logs user in', async () => {
  let loggedIn = false;
  const setLoggedIn = (changed) => (loggedIn = changed);

  render(
    <BrowserRouter>
      <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </BrowserRouter>
  );
  const loginButton = screen.getByText(/Nýskráning/i);

  fireEvent.click(loginButton);

  const loggedInPrompt = screen.queryByText('Skráð/ur inn sem');

  expect(loggedIn).toBe(true);
  expect(loggedInPrompt).toBeDefined();
});
