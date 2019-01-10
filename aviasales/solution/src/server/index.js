import path from 'path';
import express from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';

import getTickets from './api/tickets';
import '../shared/env';
import { STATIC_PATH, address, port, isProd } from '../shared/config';

const app = express();

app.use(cors());
app.use(favicon(path.resolve(__dirname, '..', '..', 'public', 'images', 'icons', 'favicon.ico')));
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

app.listen(port, err => {
  /* eslint-disable no-console */
  if (err) {
    console.error(err);
  } else {
    console.info(
      `==> 🌎 Server running on port ${port} ${
        isProd
          ? `(production).\nOpen up ${address} in your browser`
          : `(development).\nOpen up ${address} in your browser.\nKeep "npm run dev:wds" running in an other terminal`
      }`,
    );
  }
  /* eslint-enable no-console */
});
