// @flow
import React from 'react';

import { CurrencyContext } from 'src/store/context';
import { RUSSIAN_ROUBLE, currencySymbols } from 'src/config/currency';
import currencyService from 'src/services/currency';
import TicketInfo from '../ticket-info/ticket-info';
import BuyButton from '../buy-button/buy-button';
import TicketBoundary from './ticket-boundary';
import type { LocationType } from '../types';


type Props<T> = T & {|
  id: string,
  price: string,
  carrier: string,
  origin: LocationType,
  destination: LocationType,
  stops: string,
|};

function Ticket<T: *>({ id, price, ...props }: Props<T>) {
  const handleBuy = () => {
    alert('A ticket has been selected!'); // eslint-disable-line no-alert
  };

  return (
    <TicketBoundary>
      <TicketInfo {...props}>
        <CurrencyContext.Consumer>
          {({ currency }) => {
            const calculatedPrice: ?number = currencyService.getPrice(price, currency) ||
              currencyService.getPrice(price, RUSSIAN_ROUBLE);

            if (calculatedPrice === null && calculatedPrice === undefined) {
              if (!currencySymbols[currency]) {
                throw new Error('There is no symbol for selected currency');
              }
              return (
                <BuyButton buyClick={handleBuy}>
                  {`${calculatedPrice} ${currencySymbols[currency]}`}
                </BuyButton>
              );
            }
            throw new Error('Inconsistent currency state');
        }}
        </CurrencyContext.Consumer>
      </TicketInfo>
    </TicketBoundary>
  );
}


export default Ticket;
