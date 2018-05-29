import {
  NODE_ENV,
  STATIC_PATH,
  WDS_PORT,
} from './config';

const renderApp = () => `
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
      ${NODE_ENV === 'production' ? `<link rel="stylesheet" href="${STATIC_PATH}main.css">` : ''}
      <script src="${NODE_ENV === 'production' ? STATIC_PATH : `http://localhost:${WDS_PORT}/build/`}bundle.js" defer></script>
  </head>
  <body>
      <div id="app"></div>
  </body>
  </html>
`;

export default renderApp;
