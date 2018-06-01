import React from 'react';

/* eslint-disable import/extensions, import/no-unresolved, import/first */
import TicketInfo from '../ticket-info';
import BuyButton from '../buy-button';
import { CurrencyContext } from '~/store/context';

import {
  RUSSIAN_ROUBLE,
  US_DOLLAR,
  EURO,
} from '~/config';
/* eslint-enable import/extensions, import/no-unresolved */


const carrierLogos = {
  'TK': '',
  'S7': '',
  'SU': '',
  'BA': '',
};

const currencySymbols = {
  RUSSIAN_ROUBLE: '₽',
  US_DOLLAR: '$',
  EURO: '€',
};

const Ticket = ({ price, carrier, ...rest }) => {
  const carrierLogo = carrierLogos[carrier];

  return (
    <li>
      <TicketInfo
        carrierLogo={carrierLogo}
        carrierName={carrier}
        {...rest}
      >
        <CurrencyContext.Consumer>
          {({ currency }) => (
            <BuyButton>
              {price} {currencySymbols[currency]}
            </BuyButton>
          )}
        </CurrencyContext.Consumer>
      </TicketInfo>
    </li>
  );
};

export default Ticket;
