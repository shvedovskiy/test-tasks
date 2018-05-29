import React from 'react';


const BuyButton = ({ children, buyClick }) => (
  <button type="button" onClick={buyClick}>
    Купить за {children}
  </button>
);

export default BuyButton;
