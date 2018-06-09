export const getIsFetching = state => state.getIn(['isFetching']);

export const getErrorMessage = state => state.getIn(['errorMessage']);

export const getSortedIds = state => state.getIn(['ids']);

export const getTickets = state => state.getIn(['data']);

export const getTicket = (state, id) => state.getIn(['data'])[id];

export const getTicketStops = (state, id) => state.getIn(['data'])[id].stops;
