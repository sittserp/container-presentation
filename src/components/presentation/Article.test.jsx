import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article 
      author="dummy data author" 
      title="dummy data title"
      description="dummy data description"
      url="dummy data url"
      urlToImage="dummy data urlToImage"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
