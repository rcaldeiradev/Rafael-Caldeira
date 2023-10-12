import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '../../src/components/Button';

const text = 'Cool button text';
const mockCallback = jest.fn();

it('should render the button with correct text', () => {
  const { getByRole } = render(<Button text={text} onClick={mockCallback} />);
  const button = getByRole('button', { name: text });

  expect(button).toBeVisible();
  expect(button).toHaveTextContent(text);
});

it('should execute the callback on user click', async () => {
  const { getByRole } = render(<Button text={text} onClick={mockCallback} />);
  const button = getByRole('button', { name: text });

  await userEvent.click(button);

  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(1);
});
