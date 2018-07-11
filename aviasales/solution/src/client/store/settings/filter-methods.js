// @flow
/* eslint-disable-next-line import/prefer-default-export */
export const stops = (fromTickets, ticketsStore, ids, stopsFilter) =>
  ids.filter((id) => {
    const ticketStops = fromTickets.getTicketStops(ticketsStore, id);
    return stopsFilter.includes(ticketStops);
  });
