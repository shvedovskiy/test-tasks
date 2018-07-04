import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';


const Header = styled.header`
  padding-top: 40px;
  padding-bottom: 30px;
`;

const Logo = styled.div`
  width: 82px;
  height: 90px;
  margin-left: auto;
  margin-right: auto;
  background: url(${logo}) no-repeat center center;
  
  @media screen and (min-width: 600px) {
    padding-top: 20px;
    padding-bottom: 15px;
  }
`;

class Head extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Header>
        <a href="/">
          <Logo aria-label="Logo picture" />
        </a>
      </Header>
    );
  }
}

export default Head;
