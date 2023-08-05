import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Feed from '../components/Feed';
import detailsReducer from '../redux/getCitiesSlice';

test('it renders Feed component and filters locations', () => {
  const store = configureStore({
    reducer: {
      details: detailsReducer,
    },
    preloadedState: {
      details: {
        cities: [
          {
            id: 1, capital: 'Bogotá', department: 'Bogotá', capital_population: 1000000, image: 'https://i.postimg.cc/BvL4MnrK/bogota.jpg',
          },
          {
            id: 2, capital: 'Medellín', department: 'Antioquia', capital_population: 2000000, image: 'https://i.postimg.cc/6q9sJWmz/medellin.jpg',
          },
        ],
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    </Provider>,
  );

  const searchBar = screen.getByPlaceholderText('Enter a city in Colombia');
  expect(searchBar).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: 'Bogotá' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Medellín' })).toBeInTheDocument();

  fireEvent.change(searchBar, { target: { value: 'Bogotá' } });
  expect(screen.getByRole('heading', { name: 'Bogotá' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Medellín' })).not.toBeInTheDocument();
});
