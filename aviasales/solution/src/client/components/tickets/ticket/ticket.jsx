import React from 'react';

import { CurrencyContext } from 'src/store/context';
import { RUSSIAN_ROUBLE, currencySymbols } from 'src/config/currency';
import currencyService from 'src/services/currency';
import TicketInfo from '../ticket-info/ticket-info';
import BuyButton from '../buy-button/buy-button';


const Ticket = ({ price, ...props }) => {
  const handleBuy = () => {
    alert('A ticket has been selected!'); // eslint-disable-line no-alert
  };

  return (
    <TicketInfo {...props}>
      <CurrencyContext.Consumer>
        {({ currency }) => {
          let output;
          if (currency && currencySymbols[currency]) {
            output = `${currencyService.getPrice(price, currency)} ${currencySymbols[currency]}`;
          } else {
            output = `${currencyService.getPrice(price, RUSSIAN_ROUBLE)} ${currencySymbols[RUSSIAN_ROUBLE]}`;
          }

          return (
            <BuyButton buyClick={handleBuy}>
              {output}
            </BuyButton>
          );
      }}
      </CurrencyContext.Consumer>
    </TicketInfo>
  );
};


export default Ticket;
