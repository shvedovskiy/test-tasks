import path from 'path';
import express from 'express';
import cors from 'cors';

import './env';
import getTickets from './api/tickets';

import {
  NODE_ENV,
  STATIC_PATH,
  SERVER_HOSTNAME,
  SERVER_PORT,
  DEV_SERVER_PORT,
  HTTPS,
  NOW,
  NOW_URL,
} from './config';


const PORT = (NODE_ENV === 'production' ? SERVER_PORT : DEV_SERVER_PORT) || 3000;
const app = express();

app.use(cors());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/api/tickets/', (req, res) => {
  const response = getTickets();

  if (!response) {
    res.status(204).json({});
  } else {
    res.json(response);
  }
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'));
});

app.listen(PORT, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.error(err);
  } else {
    let message = '';
    if (NODE_ENV === 'production') {
      const address = NOW ? NOW_URL : `${HTTPS ? 's' : ''}://${SERVER_HOSTNAME || 'localhost'}:${PORT}/`;
      message = `(production).\nOpen up ${address} in your browser`;
    } else if (NODE_ENV === 'development') {
      message = `(development).\nOpen up http://localhost:${PORT}/ in your browser.\nKeep "npm run dev:wds" running in an other terminal`;
    }
    console.info(`==> 🌎 Server running on port ${PORT} ${message}`);
  }
  /* eslint-enable no-console */
});
