// @flow
/* eslint-disable prefer-destructuring */
if (!process.env.NODE_ENV) throw new Error('NODE_ENV missing');
export const NODE_ENV = process.env.NODE_ENV;
if (!process.env.STATIC_PATH) throw new Error('STATIC_PATH missing');
export const STATIC_PATH = process.env.STATIC_PATH;
if (!process.env.SERVER_HOSTNAME === undefined) throw new Error('SERVER_HOSTNAME missing');
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
if (!process.env.SERVER_PORT) throw new Error('SERVER_PORT missing');
export const SERVER_PORT = process.env.SERVER_PORT;
if (!process.env.DEV_SERVER_PORT) throw new Error('DEV_SERVER_PORT missing');
export const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT;
if (process.env.HTTPS === undefined) throw new Error('HTTPS missing');
export const HTTPS = process.env.HTTPS;
if (!process.env.FIXER_API_KEY) throw new Error('FIXER_API_KEY missing');
export const FIXER_API_KEY = process.env.FIXER_API_KEY;
/* eslint-enable prefer-destructuring */

export const APP_COMPONENT_SELECTOR = 'app';
