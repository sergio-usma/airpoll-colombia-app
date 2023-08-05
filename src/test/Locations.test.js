import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Locations from '../components/Locations';

test('it renders Locations component', () => {
  const mockOnClick = jest.fn();

  render(
    <Locations
      city="Santa Marta"
      state="Magdalena"
      population={500000}
      onClick={mockOnClick}
      image="https://i.postimg.cc/QdKyzKMh/santamarta.jpg"
    />,
  );

  const image = screen.getByAltText('This is a city');
  expect(image).toBeInTheDocument();

  const cityTitle = screen.getByText('Santa Marta');
  expect(cityTitle).toBeInTheDocument();

  const stateSubtitle = screen.getByText('Magdalena');
  expect(stateSubtitle).toBeInTheDocument();

  const stateImage = screen.getByAltText('This is a city');
  expect(stateImage).toBeInTheDocument();

  userEvent.click(screen.getByRole('presentation'));
  expect(mockOnClick).toHaveBeenCalled();
});
