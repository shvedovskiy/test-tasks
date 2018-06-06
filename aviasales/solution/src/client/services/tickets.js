/* eslint-disable import/no-unresolved, import/extensions */
import { isProd } from '~/utils';
import {
  SERVER_HOSTNAME,
  SERVER_PORT,
  DEV_SERVER_PORT,
  HTTPS,
} from '~/config';
/* eslint-enable import/no-unresolved, import/extensions */

class TicketService {
  API_ENDPOINT = isProd()
    ? `http${HTTPS ? 's' : ''}://${SERVER_HOSTNAME}:${SERVER_PORT}`
    : `http://localhost:${DEV_SERVER_PORT}`;

  async getTickets() {
    const url = `${this.API_ENDPOINT}/api/tickets`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Tickets fetching failed');
    }

    const data = await response.json();

    return data.tickets.map(ticket => ({
      id: ticket.id,
      origin: {
        code: ticket.origin,
        name: ticket.origin_name,
        date: ticket.departure_date,
        time: ticket.departure_time,
      },
      destination: {
        code: ticket.destination,
        name: ticket.destination_name,
        date: ticket.arrival_date,
        time: ticket.arrival_time,
      },
      carrier: ticket.carrier,
      stops: ticket.stops.toString(),
      price: ticket.price.toString(),
    }));
  }
}

export default new TicketService();
