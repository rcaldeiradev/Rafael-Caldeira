import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '../../src/components/Tag';

it('should render the tag with correct text', () => {
  const tagLabel = 'Tag label';
  const { getByTestId } = render(<Tag label={tagLabel} />);
  const tag = getByTestId('tag');

  expect(tag).toBeVisible();
  expect(tag).toHaveTextContent(tagLabel);
});
