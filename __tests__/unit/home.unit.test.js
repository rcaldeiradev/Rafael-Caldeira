import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import About from "../../src/app/components/About";
import FeaturedProjects from "../../src/app/components/FeaturedProjects";

describe('About me block', () => {
  beforeEach(() => {
    render(<About />)
  })

  test('read more redirects to the about page', () => {
    const anchor = screen.getByText('Read more');
    expect(anchor).toHaveAttribute('href', '/about');
  })
});

describe('Featured projects block', () => {
  beforeEach(() => {
    render(<FeaturedProjects />)
  })

  test('see all projects redirects to the projects page', () => {
    const anchor = screen.getByText('See all projects');

    expect(anchor).toHaveAttribute('href', '/projects');
  })
})