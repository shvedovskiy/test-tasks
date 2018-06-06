import React from 'react';

import { pluralStop } from '~/utils'; // eslint-disable-line import/no-unresolved, import/extensions


const TicketInfo = ({children, carrierName, carrierLogo, origin, destination, stops }) => (
  <div className="ticket-info">
    <div className="carrier-logo">
      <img src={carrierLogo} alt={carrierName} />
    </div>
    <div className="buy-ticket">
      {children}
    </div>
    <div className="origin">
      {origin.name} {origin.code}
      {origin.date}, {origin.time}
    </div>
    <div className="path">
      {stops === '0' ? 'Без пересадок' : `${stops} ${pluralStop(stops)}`}
    </div>
    <div className="destination">
      {destination.name} {destination.code}
      {destination.date}, {destination.time}
    </div>
  </div>
);

export default TicketInfo;
