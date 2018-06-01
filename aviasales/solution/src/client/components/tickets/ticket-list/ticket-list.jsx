import React from 'react';

import Ticket from '../ticket'; // eslint-disable-line import/no-unresolved, import/extensions


const TicketList = ({ ids, tickets }) => {
  const renderTicketById = (id) => {
    const { ...props } = tickets[id];
    return (
      <Ticket
        key={id}
        {...props}
      />
    );
  };

  return (
    <ul>
      {ids.map(renderTicketById)}
    </ul>
  );
};

export default TicketList;
