import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Button from "../../src/components/Button";

describe('Button', () => {
  const text = 'Cool button text';
  const mockCallback = jest.fn();

  beforeEach(() => {
    render(<Button text={text} onClick={mockCallback} />);
  })

  it('should render the button, with correct text', () => {
    const button = screen.getByRole('button', { name: text });

    expect(button).toBeInTheDocument();
  });

  it('should execute the callback on user click', async () => {
    const button = screen.getByRole('button', { name: text });

    await userEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();
  })
})
