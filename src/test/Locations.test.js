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
    />,
  );

  const image = screen.getByAltText('This is a city');
  expect(image).toBeInTheDocument();

  const cityTitle = screen.getByText('Santa Marta');
  expect(cityTitle).toBeInTheDocument();

  const stateSubtitle = screen.getByText('Magdalena');
  expect(stateSubtitle).toBeInTheDocument();

  userEvent.click(screen.getByRole('presentation'));
  expect(mockOnClick).toHaveBeenCalled();
});
