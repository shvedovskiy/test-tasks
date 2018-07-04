import React from 'react';

/* eslint-disable import/extensions, import/no-unresolved, import/first */
import TicketInfo from '../ticket-info';
import BuyButton from '../buy-button';
import { CurrencyContext } from '~/store/context';
import { RUSSIAN_ROUBLE, currencySymbols } from '~/config/currency';
import currencyService from '~/services/currency';
import { carrierLogos } from '~/config/carriers';
/* eslint-enable import/extensions, import/no-unresolved */


const Ticket = ({ price, carrier, ...rest }) => {
  const carrierLogo = carrierLogos[carrier];

  return (
    <TicketInfo
      carrierLogo={carrierLogo}
      carrierName={carrier}
      {...rest}
    >
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
};

export default Ticket;
