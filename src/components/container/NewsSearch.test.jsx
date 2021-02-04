global.fetch = require('node-fetch');
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import userEvent from '@testing-library/user-event';

describe('NewsSearch component', () => {
  it('changes the article list displayed via search input', () => {
    render(<NewsSearch />);
    const search = screen.getByPlaceholderText('Search Here');
    userEvent.type(search, 'dogs');
    return waitFor(() => {
      expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();  
    });
  });
});
