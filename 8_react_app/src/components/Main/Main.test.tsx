import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';

test('renders main', () => {
  render(<Main />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
