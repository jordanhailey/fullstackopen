import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

const testString = "Hello Header!";
const notTestString = "Hello World!";
const incorrectType = {message:testString}

test('Header accepts a string value passed into the "course" prop', () => {
  render(<Header course={testString} />);
  expect(()=>{screen.getByText(new RegExp(notTestString,"i"))}).toThrow();
  const shouldPass = screen.getByText(new RegExp(testString,"i"));
  expect(shouldPass).toBeInTheDocument();
});

test('Header rejects non-alphanumeric values passed into the "course" prop, returns nothing', () => {
  let header = render(<Header course={incorrectType} />);
  expect(()=>screen.getByText(/./)).toThrow();
  header.rerender(<Header course={JSON.stringify(incorrectType)} />);
  expect(screen.getByText(new RegExp(JSON.stringify(incorrectType),"i"))).toBeInTheDocument();
});
