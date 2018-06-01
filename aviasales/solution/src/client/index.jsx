import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/* eslint-disable import/no-unresolved, import/extensions, import/first */
import Search from './components/search';
import configureStore from '~/store/configureStore';
import { APP_COMPONENT_SELECTOR } from '~/config';
/* eslint-enable import/no-unresolved, import/extensions, import/first */

import './index.css';

const rootEl = document.getElementById(APP_COMPONENT_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppComponent />
  </Provider>
);

const store = configureStore();

render(wrapApp(Search, store), rootEl);

if (module.hot) {
  module.hot.accept('./components/search/search', () => {
    /* eslint-disable-next-line global-require */
    const NextApp = require('./components/search/search').default;
    render(wrapApp(NextApp, store), rootEl);
  });
}
