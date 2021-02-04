import React, { Component } from 'react';
import { getArticles } from '../services/newsApi';
import Articles from '../presentation/Articles';
import Search from '../presentation/Search';

export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: true,
      search: 'news'
    }

    componentDidMount() {
      getArticles()
        .then(articles => this.setState({ articles }))
        .then(() => this.setState({ loading: false }));
    }

    handleChange = ({ target }) => {
      target.value.trim() && getArticles(target.value)
        .then(articles => this.setState({ articles }));
    }

    render() {
      const { articles, loading, search } = this.state;

      return (
        <>
          <Search search={search} onChange={this.handleChange}/>
          {!loading ? <Articles articles={articles} />
            : <h1>Loading...</h1>
          }
        </>
      );
    }
} 
