import React from 'react';

import Ticket from '../ticket'; // eslint-disable-line import/no-unresolved, import/extensions


const TicketList = ({ ids, tickets }) => {
  const renderTicketById = (id) => {
    const { ...props } = tickets[id];

    return <Ticket key={id} {...props} />;
  };

  if (ids.length <= 0) {
    return <p>По заданным критериям билетов не найдено!</p>
  }

  return (
    <ul>
      {ids.map(renderTicketById)}
    </ul>
  );
};

TicketList.defaultProps = {
  ids: [],
  tickets: {},
};

export default TicketList;
