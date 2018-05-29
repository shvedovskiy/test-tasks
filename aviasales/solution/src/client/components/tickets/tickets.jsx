import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketList from './ticket-list';
import * as actions from '~/store/tickets/actions';
import {
  getTickets,
  getIsFetching,
  getErrorMessage,
} from '~/store/selectors';


class Tickets extends Component {
  componentDidMount() {
    this.fetchTicketsData();
  }

  fetchTicketsData = () => {
    const { fetchTickets } = this.props;
    fetchTickets();
  };

  render() {
    const { ids, tickets, isFetching, errorMessage } = this.props;
    return (
      isFetching
        ? <p>Loading...</p>
        : errorMessage
          ? <p>Loading Error</p>
          : <TicketList ids={ids} tickets={tickets} />
    );
  }
}

const mapStateToProps = state => {
  const [ ids, tickets ] = getTickets(state);
  return {
    ids,
    tickets,
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
  };
};

export default connect(mapStateToProps, actions)(Tickets);
