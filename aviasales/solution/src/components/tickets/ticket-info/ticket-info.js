import React from 'react';

import { pluralStops } from '~/util';


const TicketInfo = (props) => {
  const {
    children,
    carrierLogo,
    cities,
    dates,
    transfers,
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
        {cities.origin}
        {dates.departure}
      </div>
      <div className="path">
        {pluralStops(transfers)}
      </div>
      <div className="destination">
        {cities.destination}
        {dates.arrival}
      </div>
    </div>
  );
};

export default TicketInfo;
