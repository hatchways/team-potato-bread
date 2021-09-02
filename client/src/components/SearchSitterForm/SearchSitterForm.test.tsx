import { render } from '@testing-library/react';
import SearchSitterForm from './SearchSitterForm';

const props = { search: 'searching', handleChange: jest.fn() };

describe('Search tests', () => {
  test('smoke test', () => {
    render(<SearchSitterForm {...props} />);
  });

  test('loading snapshot test', () => {
    const { asFragment } = render(<SearchSitterForm {...props} />);
    expect(asFragment).toMatchSnapshot();
  });
});
