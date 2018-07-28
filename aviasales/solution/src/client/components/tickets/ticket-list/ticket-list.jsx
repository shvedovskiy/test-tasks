// @flow
import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import type { TicketsType } from 'src/store/tickets/types';
import Ticket from '../ticket/ticket';
import { Tickets } from './styled';


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
