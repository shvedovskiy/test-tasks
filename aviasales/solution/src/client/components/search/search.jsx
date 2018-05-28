import React, { Component, Fragment } from 'react';

import Head from 'components/head';
import Tickets from 'components/tickets';


class Search extends Component {
  render() {
    return (
      <Fragment>
        <Head />
        <Tickets />
      </Fragment>
    );
  }
}

export default Search;
