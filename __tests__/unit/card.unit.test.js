import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../../src/components/Card';

function setup() {
  const title = 'Regular card';
  const href = '/card-href';
  const linkText = 'Cool link text';
  const tags = ['First tag', 'Second tag'];

  const utils = render(
    <Card title={title} href={href} linkText={linkText} tags={tags} />,
  );

  return {
    ...utils,
    title,
    href,
    linkText,
    tags,
  };
}

it('should render the card title with correct text', () => {
  const { getByRole, title } = setup();
  const renderedTitle = getByRole('heading');

  expect(renderedTitle).toBeVisible();
  expect(renderedTitle).toHaveTextContent(title);
});

it('should render the card link with correct text and href', () => {
  const { getByRole, linkText, href } = setup();
  const renderedLink = getByRole('link');

  expect(renderedLink).toBeVisible();
  expect(renderedLink).toHaveTextContent(linkText);
  expect(renderedLink).toHaveAttribute('href', href);
});

it('should render all card tags with correct texts', () => {
  const { getAllByTestId, tags } = setup();
  const renderedTags = getAllByTestId('tag');

  expect(renderedTags).toHaveLength(tags.length);
  renderedTags.forEach((tag, index) => {
    expect(tag).toHaveTextContent(tags[index]);
  });
});
