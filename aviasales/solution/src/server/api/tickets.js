import uuidv4 from 'uuid/v4';

import data from './tickets.json';


function getTickets() {
  if (!data) {
    return null;
  }

  data.tickets.forEach((ticket) => {
    ticket.id = uuidv4(); // eslint-disable-line no-param-reassign
  });

  return data;
}

export default getTickets;
