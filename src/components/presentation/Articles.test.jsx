import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './Articles';

describe('Articles component', () => {
  afterEach(() => cleanup());
  it('renders Articles', () => {
    const { asFragment } = render(<Articles
      articles={[]} 
      author="dummy data author" 
      title="dummy data title"
      description="dummy data description"
      url="dummy data url"
      urlToImage="dummy data urlToImage"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
