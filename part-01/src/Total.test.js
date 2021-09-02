import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Total from './Total';


test('The "total" prop accepts any value that can be coerced to a number', () => {
  const total = render(<Total />);
  expect(()=>{screen.getAllByText(new RegExp(/./))}).toThrow();
  total.rerender(<Total total />);
  expect(()=>{screen.getAllByText(new RegExp(/./))}).toThrow();
  total.rerender(<Total total={{total:10}} />);
  expect(()=>{screen.getAllByText(new RegExp(/./))}).toThrow();
  total.rerender(<Total total={10} />);
  expect(screen.getAllByText(new RegExp(/./)).length > 0).toBe(true);
});
