import React from 'react';

import { pluralStops } from '~/util';


const TicketInfo = (props) => {
  const {
    children,
    carrierLogo,
    origin,
    destination,
    stops
  } = props;
  return (
    <div className="ticket-info">
      <div className="carrier-logo">
        <img src={carrierLogo} />
      </div>
      <div className="buy-ticket">
        {children}
      </div>
      <div className="origin">
        {origin.name} {origin.code}
        {origin.date}, {origin.time}
      </div>
      <div className="path">
        {pluralStops(stops)}
      </div>
      <div className="destination">
        {destination.name} {destination.code}
        {destination.date}, {destination.time}
      </div>
    </div>
  );
};

export default TicketInfo;
