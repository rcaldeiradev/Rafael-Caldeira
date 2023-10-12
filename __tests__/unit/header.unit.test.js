import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Brand from '../../src/components/layout/header/Brand';

it('should render the logo with a link to the homepage', async () => {
  render(<Brand lang="en" />);
  const logoLink = screen.getByLabelText('Go to the homepage');

  expect(logoLink).toBeVisible();
  expect(logoLink).toHaveTextContent('[ RC ]');
  expect(logoLink).toHaveAttribute('href', '/en');
});
