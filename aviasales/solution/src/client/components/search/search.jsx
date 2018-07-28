// @flow
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Head from '../head/head';
import Settings from '../settings/settings';
import Tickets from '../tickets/tickets';
import { MainContainer, Content } from './styled';


const Search = () => (
  <Fragment>
    <Head />
    <MainContainer>
      <Content>
        <aside><Settings /></aside>
        <main><Tickets /></main>
      </Content>
    </MainContainer>
  </Fragment>
);

export default hot(module)(Search);
