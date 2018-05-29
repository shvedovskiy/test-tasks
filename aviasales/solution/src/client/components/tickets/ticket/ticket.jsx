import React, { Component } from 'react';

import { CurrencyContext } from '~/store/context';
import TicketInfo from '../ticket-info';
import BuyButton from '../buy-button';

import {
  RUSSIAN_ROUBLE,
  US_DOLLAR,
  EURO,
} from '~/config';


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

class Ticket extends Component {
  render() {
    const { price, carrier, ...rest } = this.props;
    const carrierLogo = carrierLogos[carrier];

    return (
      <li>
        <TicketInfo carrierLogo={carrierLogo} {...rest}>
          <CurrencyContext.Consumer>
            {({ currency }) => (
              <BuyButton>
                {price} {currencySymbols[currency]}
              </BuyButton>
            )}
          </CurrencyContext.Consumer>
        </TicketInfo>
      </li>
    )
  }
}

export default Ticket;
