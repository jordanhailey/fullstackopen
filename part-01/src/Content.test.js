import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Content from './Content';

const testParts = [
  {part:"Part 01",exercises:10},
  {part:"Part 02",exercises:4},
]

test('Component only renders if the "parts" prop is passed in as an Array.', () => {
  const content = render(<Content />);
  expect(()=>{screen.getAllByText(/./)}).toThrow();
  content.rerender(<Content parts={testParts[0]} />);
  expect(()=>{screen.getAllByText(/./)}).toThrow();
  content.rerender(<Content parts={testParts} />);
  expect(screen.getAllByTestId("part").length > 0).toBe(true);
  expect(screen.getAllByTestId("part")[0].innerHTML).toMatch(new RegExp(`${testParts[0].part}.+${testParts[0].exercises}.+exercises`,"i"));
});

test('Component renders parts in their Array index order', () => {
  render(<Content parts={testParts} />);
  const [firstPart, secondPart] = screen.getAllByTestId("part");
  const [{part:p1,exercises:e1},{part:p2,exercises:e2}] = testParts;
  expect(firstPart.innerHTML).toMatch(new RegExp(`${p1}.+${e1}.+exercises`,"i"));
  expect(secondPart.innerHTML).toMatch(new RegExp(`${p2}.+${e2}.+exercises`,"i"));
  expect(Object.is(firstPart.nextElementSibling,secondPart)).toBe(true);
});
