/* eslint-disable prefer-destructuring */
export const NODE_ENV = process.env.NODE_ENV || 'production';
export const STATIC_PATH = process.env.STATIC_PATH || '/static/';
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || '';
export const SERVER_PORT = process.env.SERVER_PORT || '3000';
export const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || '3000';
export const HTTPS = process.env.HTTPS || '';
export const FIXER_API_KEY = process.env.FIXER_API_KEY || '';
export const NOW = process.env.NOW || '';
export const NOW_URL = process.env.NOW_URL || '';
/* eslint-enable prefer-destructuring */

export const isProd = NODE_ENV === 'production';

export const port = (isProd ? SERVER_PORT : DEV_SERVER_PORT) || 3000;

export const address = do {
  if (isProd) {
    if (NOW) {
      `${NOW_URL}/`;
    } else {
      `http${HTTPS === 'true' ? 's' : ''}://${SERVER_HOSTNAME || 'localhost'}:${port}/`;
    }
  } else if (NODE_ENV === 'development') {
    `http://localhost:${port}/`;
  } else {
    '';
  }
};
