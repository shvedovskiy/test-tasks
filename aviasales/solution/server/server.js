const path = require('path');
const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const qs = require('qs');

const { fetchCounter } = require('./api/counter');
const { fetchNews } = require('./api/news');

require('dotenv').config();


const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  const config = require('../config/webpack.config.dev');
  console.log('kek');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      writeToDisk: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use('/static/', express.static(path.resolve(__dirname, '..', 'src')));
} else if (process.env.NODE_ENV === 'production') {
  app.use('/static/', express.static(path.resolve(__dirname, '..', 'dist')));
}

app.get('/api/news', (req, res) => {
  fetchNews().then(news => res.json(news));
});

app.get('/api/counter', (req, res) => {
  // Queries работает, но не используется:
  const params = qs.parse(req.query);
  const counter = parseInt(params.counter, 10);

  if (counter) {
    res.json(counter);
  } else {
    fetchCounter(counter).then(counter => res.json(counter));
  }
});

app.get('*', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Demo</title>
        <style>
            body {
                font-family: Helvetica Neue, Arial, sans-serif;
                margin: 0;
            }
            html {
                box-sizing: border-box;
            }
            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }
        </style>
        <link rel="stylesheet" href="/static/main.css">
        <script src="/static/bundle.js" defer></script>
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>
  `);
});

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🌎 Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
  }
});
