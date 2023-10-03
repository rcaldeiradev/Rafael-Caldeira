import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Brand from '../../src/components/layout/header/Brand';

describe('Header', () => {
  it('redirects the logo to the homepage', async () => {
    render(<Brand />);

    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
