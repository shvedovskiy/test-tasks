import React, { Fragment } from 'react';

/* eslint-disable import/no-unresolved, import/extensions */
import Head from '../head';
import Settings from '../settings';
import Tickets from '../tickets';
/* eslint-enable import/no-unresolved, import/extensions */


const Search = () => (
  <Fragment>
    <Head />
    <Settings />
    <Tickets />
  </Fragment>
);

export default Search;
