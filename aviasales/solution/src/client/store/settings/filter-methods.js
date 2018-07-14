// @flow
import type { State as TicketsState } from 'src/store/tickets/types';


/* eslint-disable-next-line import/prefer-default-export */
export function stops(
  fromTickets: { [action: string]: Function },
  ticketsState: TicketsState,
  ids: Array<string>,
  stopsFilter: Array<string>,
): Array<string> {
  return ids.filter((id) => {
    const ticketStops = fromTickets.getTicketStops(ticketsState, id);
    return stopsFilter.includes(ticketStops);
  });
}
