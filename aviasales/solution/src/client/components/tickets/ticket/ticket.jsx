import React from 'react';

/* eslint-disable import/extensions, import/no-unresolved, import/first */
import TicketInfo from '../ticket-info';
import BuyButton from '../buy-button';
import { CurrencyContext } from '~/store/context';
import { RUSSIAN_ROUBLE, currencySymbols } from '~/config/currency';
import currencyService from '~/services/currency';
/* eslint-enable import/extensions, import/no-unresolved */


const Ticket = ({ price, ...props }) => (
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
          <BuyButton>
            {output}
          </BuyButton>
        );
      }}
    </CurrencyContext.Consumer>
  </TicketInfo>
);


export default Ticket;
