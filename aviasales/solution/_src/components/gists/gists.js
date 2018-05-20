import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import Gist from './gist';
import { fetchGistsAction } from '~/actions';


class Gists extends Component {
  static initialAction() {
    return fetchGistsAction();
  }

  componentDidMount() {
    if (!this.props.gists || !this.props.gists.length) {
      this.props.dispatch(Gists.initialAction());
    }
  }

  render() {
    const { gists } = this.props;

    return (
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
        {
          gists && <Route path="/g/:gistId" render={({match}) =>
            <Gist gist={gists.find(g => g.id === match.params.gistId)}/>
          }/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gists: state.gists
});

export default connect(mapStateToProps)(Gists);
