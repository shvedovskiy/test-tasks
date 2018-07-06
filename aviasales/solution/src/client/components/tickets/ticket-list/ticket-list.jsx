import React from 'react';
import styled from 'styled-components';

import Ticket from '../ticket'; // eslint-disable-line import/no-unresolved, import/extensions


const Tickets = styled.ul`
    max-width: 750px;
    margin: 0 auto;
    
    & > li {
      margin-bottom: 20px;
    }
`;

const TicketList = ({ ids, tickets }) => {
  const renderTicketById = (id) => {
    const { ...ticketProps } = tickets[id];

    return <Ticket key={id} {...ticketProps} />;
  };

  if (ids.length <= 0) {
    return <p>По заданным критериям билетов не найдено!</p>
  }

  return (
    <Tickets>
      {ids.map(renderTicketById)}
    </Tickets>
  );
};

TicketList.defaultProps = {
  ids: [],
  tickets: {},
};

export default TicketList;
