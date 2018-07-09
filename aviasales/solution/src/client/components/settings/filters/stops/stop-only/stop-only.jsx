import React from 'react';
import styled from 'styled-components';

import { StopsListItem } from '../common';


const StopOnlyButton = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -15px;
    width: 15px;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.001), #fff 85%);
  }

  ${StopsListItem}:hover &,
  ${StopsListItem}:focus-within & {
    background-color: #f1fcff;
  }

  ${StopsListItem}:hover &::before,
  ${StopsListItem}:focus-within &::before {
    background: linear-gradient(90deg, rgba(255,255,255,0.001), #f1fcff 85%);
  }
`;

const Button = styled.a.attrs({
  role: 'button',
  tabIndex: '0',
})`
  display: block;
  position: relative;
  top: 25px;
  line-height: 36px;
  color: #2196f3;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .35px;
  cursor: pointer;
  opacity: 0;
  transition: opacity .15s, top .15s ease-out;
  outline: none;
  

  &:hover,
  &:focus {
    color: #ff9d1b;
  }
  
  &:focus {
    box-shadow: inset 0 0 0 1px #2196f3;
  }

  ${StopsListItem}:hover &,
  ${StopsListItem}:focus-within & {
    top: 0;
    opacity: 1;
  }
`;

const StopOnly = ({ handleSelect }) => {
  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      handleSelect();
    }
  };

  return (
    <StopOnlyButton>
      <Button onClick={handleSelect} onKeyDown={handleKeyDown}>Только</Button>
    </StopOnlyButton>
  );
};

export default StopOnly;
