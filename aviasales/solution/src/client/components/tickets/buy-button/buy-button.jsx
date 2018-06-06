import React from 'react';

import { splitPrice } from '~/utils';


const BuyButton = ({ children, buyClick }) => (
  <button type="button" onClick={buyClick}>
    Купить за {splitPrice(children)}
  </button>
);

export default BuyButton;
