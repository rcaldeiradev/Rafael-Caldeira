import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../src/app/[lang]/components/About';
import FeaturedProjects from '../../src/app/[lang]/components/FeaturedProjects';

it('should redirect the "more about me" button to the about page', async () => {
  const { findByRole } = render(await About({ lang: 'en' }));

  const anchor = await findByRole('link', { name: 'More about me' });
  expect(anchor).toBeVisible();
  expect(anchor).toHaveAttribute('href', '/en/about');
});

it('should redirect the "see all projects" button to the projects page', async () => {
  const { findByRole } = render(await FeaturedProjects({ lang: 'en' }));

  const anchor = await findByRole('link', { name: 'See all projects' });

  expect(anchor).toBeVisible();
  expect(anchor).toHaveAttribute('href', '/en/projects');
});
