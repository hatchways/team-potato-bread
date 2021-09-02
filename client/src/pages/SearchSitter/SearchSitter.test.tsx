import { render } from '@testing-library/react';
import SearchSitter from './SearchSitter';
import { MemoryRouter } from 'react-router-dom';

describe('Login tests', () => {
  test('smoke test', () => {
    render(
      <MemoryRouter>
        <SearchSitter />
      </MemoryRouter>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SearchSitter />
      </MemoryRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can input values and submit form', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <SearchSitter />
      </MemoryRouter>,
    );
    const account = getByText("Don't have an account?");
    expect(account).toBeInTheDocument();
    const create = getByText('Sign up');
    expect(create).toBeInTheDocument();
    const title = getByText('Welcome back!');
    expect(title).toBeInTheDocument();
  });
});
