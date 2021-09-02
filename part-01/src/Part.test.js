import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Part from './Part';

const testPart = "Part 01";
const testPartNumExercises = 10;

test('Component only renders if the "part" prop is passed in.', () => {
  const part = render(<Part />);
  expect(()=>{screen.getAllByText(/./)}).toThrow();
  part.rerender(<Part part={testPart} />);
  expect(screen.getAllByText(/./).length > 0);
});

test('The "part" prop must be non-object value.', () => {
  const part = render(<Part part={{part:testPart}} />);
  expect(()=>{screen.getAllByText(/./)}).toThrow();
  part.rerender(<Part part={testPart} />);
  expect(screen.getByText(new RegExp(testPart,"i"))).toBeInTheDocument();
});

test('The "numExercises" prop must be able to be coerced to a number.', () => {
  const part = render(<Part part={testPart} numExercises={testPartNumExercises} />);
  expect(screen.getByText(new RegExp(testPart,"i"))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(testPartNumExercises,"i"))).toBeInTheDocument();
});
