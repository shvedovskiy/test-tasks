import React, { Component } from 'react';
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
    const { id } = this.props;

    return (
      <li>
        <TicketInfo>
          <BuyButton>
            {

            }
          </BuyButton>
        </TicketInfo>
      </li>
    )
  }
}

export default Ticket;
