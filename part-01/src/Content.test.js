import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Content from './Content';

const testPart = "Part 01";
const testPartNumExercises = 10;

test('Component only renders if the "part" prop is passed in.', () => {
  const content = render(<Content />);
  expect(()=>{screen.getAllByText(/./)}).toThrow();
  content.rerender(<Content part={testPart} />);
  expect(screen.getAllByText(/./).length > 0);
});

test('The "part" prop must be non-object value.', () => {
  const content = render(<Content part={{part:testPart}} />);
  expect(()=>{screen.getAllByText(/./)}).toThrow();
  content.rerender(<Content part={testPart} />);
  expect(screen.getByText(new RegExp(testPart,"i"))).toBeInTheDocument();
});

test('The "numExercises" prop must be able to be coerced to a number.', () => {
  const content = render(<Content part={testPart} numExercises={testPartNumExercises} />);
  expect(screen.getByText(new RegExp(testPart,"i"))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(testPartNumExercises,"i"))).toBeInTheDocument();
});
