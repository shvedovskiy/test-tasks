// @flow
import type { Immutable } from 'seamless-immutable';

import type { ExtractReturn } from 'src/store/types';
import * as actions from './actions';


export type LocationType = {|
  code: string,
  name: string,
  date: string,
  time: string,
|};

export type TicketType = {|
  id: string,
  carrier: string,
  price: string,
  stops: string,
  origin: LocationType,
  destination: LocationType,
|};

export type TicketsType = {
  [id: string]: TicketType,
};

export type Actions =
  ExtractReturn<typeof actions.requestTickets> |
  ExtractReturn<typeof actions.ticketsFetchingSuccess> |
  ExtractReturn<typeof actions.ticketsFetchingFailure> |
  ExtractReturn<typeof actions.fetchTicketsAction> |
  ExtractReturn<typeof actions.buyTicket>;

export type StateShape = {
  +data: TicketsType,
  +ids: Array<string>,
  +isFetching: boolean,
  +errorMessage: string,
};

export type State = Immutable<State>;
