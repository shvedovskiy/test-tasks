import React from 'react';

import Ticket from '../ticket';


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
