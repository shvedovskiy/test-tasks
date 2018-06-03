import React from 'react';

/* eslint-disable import/extensions, import/no-unresolved, import/first */
import TicketInfo from '../ticket-info';
import BuyButton from '../buy-button';
import { CurrencyContext } from '~/store/context';
import { RUSSIAN_ROUBLE, currencySymbols } from '~/config/currency';
import getPrice from '~/services/currency';
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
              {
                currency && currencySymbols[currency]
                  ? `${getPrice(price, currency)} ${currencySymbols[currency]}`
                  : `${getPrice(price, RUSSIAN_ROUBLE)} ${currencySymbols[RUSSIAN_ROUBLE]}`
              }
            </BuyButton>
          )}
        </CurrencyContext.Consumer>
      </TicketInfo>
    </li>
  );
};

export default Ticket;
