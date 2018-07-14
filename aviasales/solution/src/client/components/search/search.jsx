// @flow
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import Head from '../head/head';
import Settings from '../settings/settings';
import Tickets from '../tickets/tickets';


const MainContainer = styled.div`
  max-width: 1000px;
  min-width: 320px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  grid-gap: 20px;
  padding: 0 35px 100px;
  
  @media screen and (max-width: 870px) {
    grid-template-columns: auto;
    grid-template-areas: "settings"
                         "tickets";
  }
  
  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  @media screen and (max-width: 340px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

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
