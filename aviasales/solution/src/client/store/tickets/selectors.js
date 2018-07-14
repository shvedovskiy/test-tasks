// @flow
import type { State, TicketsType, TicketType, ErrorType } from './types';


export const getIsFetching = (state: State): boolean =>
  state.getIn(['isFetching']);

export const getErrorMessage = (state: State): ErrorType =>
  state.getIn(['errorMessage']);

export const getSortedIds = (state: State): Array<string> =>
  state.getIn(['ids']);

export const getTickets = (state: State): TicketsType =>
  state.getIn(['data']);

export const getTicket = (state: State, id: string): TicketType =>
  state.getIn(['data'])[id];

export const getTicketStops = (state: State, id: string): string =>
  state.getIn(['data'])[id].stops;
