import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(<Search 
      search="dummy string"
      onChange={jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
