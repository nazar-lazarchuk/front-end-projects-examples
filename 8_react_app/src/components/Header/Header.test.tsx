import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders header', () => {
  render(<Header />);
  expect(screen.getByText(/Header component/i)).toBeInTheDocument();
});
