import styled from 'styled-components';

import logo from './logo.svg';


export const Header = styled.header`
  min-width: 320px;
  padding-top: 40px;
  padding-bottom: 30px;
`;

export const Logo = styled.a`
  display: block;
  width: 82px;
  height: 90px;
  margin-left: auto;
  margin-right: auto;
  background: url(${logo}) no-repeat center center;
  outline: none;
  
  @media screen and (min-width: 600px) {
    padding-top: 20px;
    padding-bottom: 15px;
  }
  
  &:focus {
    outline: 2px solid #2196f3;
  }
`;
