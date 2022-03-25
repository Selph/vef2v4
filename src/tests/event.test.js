import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Event } from '../components/Event';

test('event renders for logged in user, able to post comment', () => {
  render(
    <BrowserRouter>
      <Event loggedIn={true} />
    </BrowserRouter>
  );
  const commentElement = screen.getByText(/Athugasemd:/i);

  expect(commentElement).toBeInTheDocument();
});
