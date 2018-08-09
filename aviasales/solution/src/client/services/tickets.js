// @flow
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

import { address } from 'shared/config';


dayjs.locale('ru', {
  ...ru,
  weekdaysMin: 'Вс_Пт_Вт_Ср_Чт_Пт_Сб'.split('_'),
  monthsShort: 'янв_фев_мар_апр_мая_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
});

class TicketService {
  API_ENDPOINT = address;

  static formatDate(rawDate: string): string {
    return dayjs(rawDate.replace(/^(\d{2})\.(\d{2})\.(.*)$/, '$2.$1.$3')).format('D MMM YYYY, dd');
  }

  async getTickets() {
    const url = `${this.API_ENDPOINT}api/tickets`;
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

    return data.tickets.map((ticket) => {
      const departureDate = TicketService.formatDate(ticket.departure_date);
      const arrivalDate = TicketService.formatDate(ticket.arrival_date);

      return {
        id: ticket.id,
        origin: {
          code: ticket.origin,
          name: ticket.origin_name,
          date: departureDate,
          time: ticket.departure_time,
        },
        destination: {
          code: ticket.destination,
          name: ticket.destination_name,
          date: arrivalDate,
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
