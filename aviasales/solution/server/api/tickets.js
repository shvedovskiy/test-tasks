const fs = require('fs');


function getTickets() {
  fs.readFile('./tickets.json', (err, data) => {
    if (err) {
      return null;
    }
    return JSON.parse(data);
  });
}

export default getTickets;
