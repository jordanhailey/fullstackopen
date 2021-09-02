import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Part from './Part';

test('Part renders', () => {
  const part = render(<Part />);
  part.debug();
  expect(()=>{screen.getAllByText(/./)}).toThrow();
});
