import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Card from "../../src/components/Card";

describe('Card', () => {
  const title = 'Regular card'
  const href = '/card-href'
  const linkText = 'Cool link text';
  const tags = [
    'First tag',
    'Second tag',
  ];

  beforeEach(() => {
    render(<Card title={title} href={href} linkText={linkText} tags={tags} />);
  })

  it('renders the card title', () => {
    const renderedTitle = screen.getByRole('heading');
    expect(renderedTitle).toBeInTheDocument();
    expect(renderedTitle).toHaveTextContent(title);
  });

  it('renders the card link', () => {
    const renderedLink = screen.getByRole('link');
    expect(renderedLink).toBeInTheDocument();
    expect(renderedLink).toHaveTextContent(linkText);
    expect(renderedLink).toHaveAttribute('href', href);
  })

  it('renders all card tags', () => {
    const renderedTags = screen.getAllByTestId('tag');
    expect(renderedTags).toHaveLength(tags.length);

    renderedTags.forEach((tag, index) => {
      expect(tag).toHaveTextContent(tags[index]);
    });
  })
})
