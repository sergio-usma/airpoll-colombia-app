import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('it renders Header component', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );

  const title = screen.getByText(/airpoll/i);
  expect(title).toBeInTheDocument();
});
