import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Hero from "../src/app/components/Hero";

describe('Homepage', () => {
  it('shows my name and role', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', {
      name: /Rafael Caldeira Software Engineer/i,
    });

    expect(heading).toBeInTheDocument();
  })
});

