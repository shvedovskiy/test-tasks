const uuidv4 = require('uuid/v4');
const data = require('./tickets.json');


function getTickets() {
  if (!data) {
    return null;
  }

  data.tickets.forEach((ticket) => {
    ticket.id = uuidv4();
  });

  return data;
}

module.exports = getTickets;
