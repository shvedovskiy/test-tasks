import React, { Component, Fragment } from 'react';

import Head from '../head';
import Tickets from '../tickets';


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
