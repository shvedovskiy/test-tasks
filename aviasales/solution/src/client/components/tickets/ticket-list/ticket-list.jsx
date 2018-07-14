// @flow
import * as React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import type { TicketsType } from 'src/store/tickets/types';
import Ticket from '../ticket/ticket';


const Tickets = styled.ul`
    max-width: 750px;
    margin: 0 auto;
    
    & > li {
      margin-bottom: 20px;
    }
`;

type Props = {|
  ids: Array<string>,
  tickets: TicketsType,
|};

const TicketList = ({ ids, tickets }: Props) => {
  const renderTicketById = (id: string) => {
    if (!tickets[id]) {
      return null;
    }
    const { ...ticketProps } = tickets[id];

    return <Ticket key={id} {...ticketProps} />;
  };

  return (
    <ReactCSSTransitionGroup
      component={Tickets}
      transitionName="tickets"
      transitionAppear
      transitionAppearTimeout={200}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {ids.map(renderTicketById)}
    </ReactCSSTransitionGroup>
  );
};

TicketList.defaultProps = {
  ids: [],
  tickets: {},
};

export default TicketList;
