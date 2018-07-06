import React from 'react';
import styled from 'styled-components';

import { splitPrice } from '~/utils';

const BuyButtonContainer = styled.button`
  display: block;
  width: 100%;
  height: 56px;
  padding: 0;
  color: #fff;
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  background-color: #ff6d00;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 1px 0 0 #d64d08, 0 2px 1px rgba(0, 0, 0, .1);
  transition: all .3s;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: #ff8124;
    box-shadow: 0 1px 0 0 #d64d08, 0 2px 3px 2px rgba(0, 0, 0, .1);
  }
  
  &:active {
    box-shadow: inset 0 1px 0 0 #d64d08;
  }
`;

const BuyButtonText = styled.span`
  display: block;
`;

const BuyButton = ({ children, buyClick }) => (
  <BuyButtonContainer onClick={buyClick}>
    <BuyButtonText>
      Купить
    </BuyButtonText>
    <BuyButtonText>
      за {splitPrice(children)}
    </BuyButtonText>
  </BuyButtonContainer>
);

export default BuyButton;
