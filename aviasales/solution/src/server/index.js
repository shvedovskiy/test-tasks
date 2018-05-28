const path = require('path');
const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const getTickets = require('./api/tickets');


require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());

// if (process.env.NODE_ENV === 'development') {
//   const config = require('@babel/core').transform(require('../../webpack/webpack.config.dev.babel'), {
//     plugins: ['@babel/plugin-syntax-dynamic-import'],
//   });
//   const compiler = webpack(config);
//   app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath,
//     stats: {
//       assets: false,
//       colors: true,
//       version: false,
//       hash: false,
//       timings: false,
//       chunks: false,
//       chunkModules: false,
//       writeToDisk: true,
//     },
//   }));
//   app.use(require('webpack-hot-middleware')(compiler));
//   app.use('/static/', express.static(path.resolve(__dirname, '..', 'src')));
// } else if (process.env.NODE_ENV === 'production') {
  app.use('/static/', express.static(path.resolve(__dirname, '..', 'dist')));
// }

app.get('/api/tickets/', (req, res) => {
  const response = getTickets();

  if (!response) {
    res.status(204).json({});
  } else {
    res.json(response);
  }
});

app.get('/', (req, res) => {
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

app.listen(PORT, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🌎 Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
  }
  /* eslint-enable no-console */
});
