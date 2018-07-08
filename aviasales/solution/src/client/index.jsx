import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/* eslint-disable import/no-unresolved, import/extensions, import/first */
import Search from './components/search';
import configureStore from '~/store/configureStore';
import { APP_COMPONENT_SELECTOR } from '~/config';
/* eslint-enable import/no-unresolved, import/extensions, import/first */
import './global.css';


const rootEl = document.getElementById(APP_COMPONENT_SELECTOR);
const store = configureStore();

render(
  <Provider store={store}>
    <Search />
  </Provider>,
  rootEl
);
