import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'src/store/tickets/actions';
import { CurrencyContext } from 'src/store/context';
import {
  getTickets,
  getIsFetching,
  getErrorMessage,
  getCurrency,
} from 'src/store/rootSelectors';
import TicketList from './ticket-list/ticket-list';
import Loading from '../common/loading';
import FetchError from '../common/error';
import EmptyResult from '../common/empty-result';


class Tickets extends Component {
  componentDidMount() {
    this.fetchTicketsData();
  }

  fetchTicketsData = () => {
    const { fetchTickets } = this.props;
    fetchTickets();
  };

  render() {
    const {
      ids,
      tickets,
      isFetching,
      errorMessage,
      currency,
    } = this.props;

    if (ids.length <= 0) {
      if (isFetching === true) {
        return <Loading />;
      } else if (errorMessage !== null) {
        return <FetchError message={errorMessage.message} onRetry={this.fetchTicketsData} />;
      }
      return <EmptyResult />;
    }

    return (
      <CurrencyContext.Provider value={{ currency }}>
        <TicketList ids={ids} tickets={tickets} />
      </CurrencyContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  const [ids, tickets] = getTickets(state);
  return {
    ids,
    tickets,
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
    currency: getCurrency(state),
  };
};

export default connect(mapStateToProps, actions)(Tickets);
