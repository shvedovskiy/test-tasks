import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  return (
    <Tickets>
      {/*<ReactCSSTransitionGroup*/}
        {/*transitionName="tickets"*/}
        {/*transitionEnterTimeout={300}*/}
        {/*transitionLeaveTimeout={300}*/}
      {/*>*/}
        {ids.map(renderTicketById)}
      {/*</ReactCSSTransitionGroup>*/}
    </Tickets>
  );
};

TicketList.defaultProps = {
  ids: [],
  tickets: {},
};

export default TicketList;
