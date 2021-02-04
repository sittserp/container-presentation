import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {articleElements}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
  })).isRequired
};

export default Articles;
