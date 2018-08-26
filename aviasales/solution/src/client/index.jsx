// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Search from './components/search/search';
import configureStore from './store/configureStore';
import { APP_COMPONENT_SELECTOR } from './config/config';
import './styles/global.css';


const rootContainer = document.getElementById(APP_COMPONENT_SELECTOR);

if (rootContainer !== null) {
  render(
    <Provider store={configureStore()}>
      <Search />
    </Provider>,
    rootContainer,
  );
}
