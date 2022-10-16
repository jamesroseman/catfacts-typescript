import React from 'react';
import { render, screen } from '@testing-library/react';

import CatFactComponent from '../CatFactComponent';

test('renders cat fact as expected', () => {
  const testFact: string = 'This is a fun cat fact.';
  render(<CatFactComponent fact={testFact} />);
  const factElement = screen.getByText(testFact);
  expect(factElement).toBeInTheDocument();
});
