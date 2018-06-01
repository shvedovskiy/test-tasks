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
} from './config';


const PORT = (NODE_ENV === 'production' ? SERVER_PORT : DEV_SERVER_PORT) || 3000;
const app = express();

app.use(cors());
app.use(STATIC_PATH, express.static('dist'));

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
    console.info(`==> 🌎 Server running on port ${PORT} ${NODE_ENV === 'production'
      ? `(production).\nOpen up http${HTTPS ? 's' : ''}://${SERVER_HOSTNAME}:${PORT}/ in your browser`
      : `(development).\nOpen up http://localhost:${PORT}/ in your browser.\nKeep "npm run dev:wds" running in an other terminal`}.`);
  }
  /* eslint-enable no-console */
});
