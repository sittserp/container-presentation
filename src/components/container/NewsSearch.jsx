import React, { Component } from 'react';
import { getArticles } from '../services/newsApi';
import Articles from '../presentation/Articles';

export default class NewsSearch extends Component {
    state = {
      articles: []
    }

    componentDidMount() {
      getArticles()
        .then(articles => this.setState({ articles }));
    }

    render() {
      const { articles } = this.state;

      return (
        <Articles articles={articles} />
      );
    }
} 
