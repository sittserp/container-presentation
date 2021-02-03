import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description, url, urlToImage }) => (
  <>
    <figure>
      <img src={urlToImage} />
      <figcaption>{title, author}</figcaption>
    </figure>
    <p>{description}</p>
    <p>{url}</p>
  </>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired
};

export default Article;
