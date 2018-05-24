import React from 'react';
import Ticket from '../ticket';

const FilteredTickets = ({ tickets }) => {
  const renderTicket = (ticket) => (
    <Ticket
      key={ticket.id}
      {...ticket}
    />
  );

  return (
    <ul>
      {
        tickets.map(renderTicket)
      }
    </ul>
  );
};

export default FilteredTickets