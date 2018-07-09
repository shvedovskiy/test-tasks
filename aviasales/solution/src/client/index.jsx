import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Search from './components/search/search';
import configureStore from './store/configureStore';
import { APP_COMPONENT_SELECTOR } from './config/config';
import './global.css';


const rootEl = document.getElementById(APP_COMPONENT_SELECTOR);
const store = configureStore();

render(
  <Provider store={store}>
    <Search />
  </Provider>,
  rootEl,
);
