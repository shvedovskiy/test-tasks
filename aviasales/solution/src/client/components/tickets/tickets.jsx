// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { fetchTicketsAction } from 'src/store/tickets/actions';
import { CurrencyContext } from 'src/store/context';
import type { ContextState } from 'src/store/context';
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
import type { TicketType } from './types';


type Props = {|
  ids: Array<string>,
  tickets: { [id: string]: TicketType },
  isFetching: boolean,
  errorMessage: ?{ message: string },
  currency: string,
  fetchTickets: Function,
|};

class Tickets extends React.Component<Props> {
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
      } else if (errorMessage !== null && errorMessage !== undefined) {
        return <FetchError message={errorMessage.message} onRetry={this.fetchTicketsData} />;
      }
      return <EmptyResult />;
    }

    const contextState: ContextState = { currency };
    return (
      <CurrencyContext.Provider value={contextState}>
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

export default connect(mapStateToProps, { fetchTickets: fetchTicketsAction })(Tickets);
