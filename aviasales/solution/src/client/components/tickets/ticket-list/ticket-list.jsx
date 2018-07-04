import React from 'react';
import styled from 'styled-components';

import Ticket from '../ticket'; // eslint-disable-line import/no-unresolved, import/extensions


const Tickets = styled.ul`
    max-width: 750px;
    margin: 0 auto;
`;

const TicketList = ({ ids, tickets }) => {
  const renderTicketById = (id) => {
    const { ...props } = tickets[id];

    return <Ticket key={id} {...props} />;
  };

  if (ids.length <= 0) {
    return <p>По заданным критериям билетов не найдено!</p>
  }

  return (
    <div>
      <Tickets>
        {ids.map(renderTicketById)}
      </Tickets>
    </div>
  );
};

TicketList.defaultProps = {
  ids: [],
  tickets: {},
};

export default TicketList;
