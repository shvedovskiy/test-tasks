import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilteredTickets from './filtered-tickets';
import * as actions from '~/store/tickets/actions';
import {
  getIsFetching,
  getErrorMessage,
  getFilteredTickets,
  getCurrentFilters
} from '~/store/rootReducer';


class Tickets extends Component {
  componentDidMount() {
    this.fetchTicketsData();
  }

  fetchTicketsData = () => {
    const { fetchTickets } = this.props;
    fetchTickets();
  };

  render() {
    const { tickets, isFetching, errorMessage } = this.props;
    return (
      <FilteredTickets tickets={tickets} />
    );
  }
}

const mapStateToProps = (state) => {
  const filters = getCurrentFilters(state);
  const rawTickets = getFilteredTickets(state, ...filters);
  const tickets = rawTickets.map(ticket => ({
    id: ticket.id,
    origin: {
      code: ticket.origin,
      name: ticket.origin_name,
      date: ticket.departure_date,
      time: ticket.detarture_time,
    },
    destination: {
      code: ticket.destination,
      name: ticket.destination_name,
      date: ticket.arrival_date,
      time: ticket.arrival_time
    },
    carrier: ticket.carrier,
    stops: ticket.stops,
    price: ticket.price
  }));

  return {
    tickets,
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
  }
};

export default connect(mapStateToProps, actions)(Tickets);
