import React from 'react';

/* eslint-disable import/extensions, import/no-unresolved, import/first */
import TicketInfo from '../ticket-info';
import BuyButton from '../buy-button';
import { CurrencyContext } from '~/store/context';
import { currencySymbols } from '~/config/currencies';
import { carrierLogos } from '~/config/carriers';
/* eslint-enable import/extensions, import/no-unresolved */


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