import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilteredTickets from './filtered-tickets';
import * as actions from '~/store/tickets/actions';
import {
  getIsFetching,
  getErrorMessage,
  getFilteredTickets,
} from '~/store/tickets/reducers';
import { getCurrentFilters } from '~/store/settings/reducers';


class Tickets extends Component {
  componentDidMount() {
    this.fetchTicketsData();
  }

  fetchTicketsData = () => {
    const { fetchTickets } = this.props;
    fetchTickets();
  };

  render() {
    const { tickets } = this.props;
    return (
      <FilteredTickets tickets={tickets} />
    );
  }
}

const mapStateToProps = (state) => {
  const filters = getCurrentFilters(state);
  return {
    tickets: getFilteredTickets(state, ...filters),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
  }
};

export default connect(mapStateToProps, actions)(Tickets);
