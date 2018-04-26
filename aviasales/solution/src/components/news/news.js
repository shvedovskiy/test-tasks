import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import NewsList from './news-list';
import { fetchNewsAction } from '~/actions';


class News extends Component {
  static initialAction() {
    return fetchNewsAction();
  }

  componentDidMount() {
    if (!this.props.news || !this.props.news.length) {
      this.props.dispatch(News.initialAction());
    }
  }

  render() {
    const { news } = this.props;
    return (
      <div>
        <Link to="/">Home</Link> | <Link to="counter">Counter</Link>
        {
          news && news.length
            ? <NewsList news={news}/>
            : <p>Loading...</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default withRouter(connect(mapStateToProps)(News));
