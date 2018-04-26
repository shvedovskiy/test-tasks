import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import Sidebar from './sidebar';
import SidebarItem from './sidebar-item';
import Main from './main';
import NoMatch from '~/components/no-match';
import Loading from '~/components/loading';
import routes from '~/routes';
import { fetchGistsAction } from '~/actions';
import './app.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchGistsAction();
  }

  render() {
    const { gists } = this.props;
    return (
      <div className="app">
        <Sidebar>
          {
            gists && gists.length // SidebarItem components contained within are only rendered if there is actually gist data available. On the server, this is always the case.
              ? gists.map(gist => (
                <SidebarItem key={gist.id}>
                  <Link to={`/g/${gist.id}`}>{gist.description || '[no description]'}</Link>
                </SidebarItem>
              ))
              : <Loading /> // If the component is rendered in the client, we may be in the process of fetching fresh gist data
          }
        </Sidebar>
        <Main>
          <Switch>
            {
              routes.map((route, i) => <Route key={i} {...route} />)
            }
            <Route component={NoMatch} />
          </Switch>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gists: state.gists
});

const mapDispatchToProps = dispatch => ({
  fetchGistsAction() {
    return dispatch(fetchGistsAction());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
