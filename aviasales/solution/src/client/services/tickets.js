import moment from 'moment';

/* eslint-disable import/no-unresolved, import/extensions */
import { isProd } from '~/utils';
import {
  SERVER_HOSTNAME,
  SERVER_PORT,
  DEV_SERVER_PORT,
  HTTPS,
} from '~/config';
/* eslint-enable import/no-unresolved, import/extensions */


moment.updateLocale('ru-RU', {
  weekdaysMin : 'Пн_Вт_Ср_Чт_Пт_Сб_Вс'.split('_'),
});
moment.locale('ru-RU');

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

    return data.tickets.map(ticket => {
      const departure_date = moment(ticket.departure_date, 'DD-MM-YY').format('D MMM YYYY, dd');
      const arrival_date = moment(ticket.arrival_date, 'DD-MM-YY').format('D MMM YYYY, dd');

      return {
        id: ticket.id,
        origin: {
          code: ticket.origin,
          name: ticket.origin_name,
          date: departure_date,
          time: ticket.departure_time,
        },
        destination: {
          code: ticket.destination,
          name: ticket.destination_name,
          date: arrival_date,
          time: ticket.arrival_time,
        },
        carrier: ticket.carrier,
        stops: ticket.stops.toString(),
        price: ticket.price.toString(),
      };
    });
  }
}

export default new TicketService();
