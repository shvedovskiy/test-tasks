import React from 'react';
import Ticket from '../ticket';

const FilteredTickets = ({ tickets }) => {
  const renderTicket = ({id, ...rest}) => (
    <Ticket
      key={id}
      {...rest}
    />
  );

  return (
    <ul>
      {tickets.map(renderTicket)}
    </ul>
  );
};

export default FilteredTickets