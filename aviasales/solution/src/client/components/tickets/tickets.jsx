import React, { Component } from 'react';
import { connect } from 'react-redux';

/* eslint-disable import/no-unresolved, import/extensions, import/first */
import TicketList from './ticket-list';
import Loading from '../common/loading';
import FetchError from '../common/error';
import * as actions from '~/store/tickets/actions';
import { CurrencyContext } from '~/store/context';

import {
  getTickets,
  getIsFetching,
  getErrorMessage,
  getCurrency,
} from '~/store/selectors';
/* eslint-enable import/no-unresolved, import/extensions, import/first */


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

    if (isFetching === true && ids.length <= 0) {
      return <Loading />;
    } else if (errorMessage !== null && ids.length <= 0) {
      return (
        <FetchError
          message={errorMessage.message}
          onRetry={this.fetchTicketsData}
        />
      );
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
