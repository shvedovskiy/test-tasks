import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '~/components/app';
import configureStore from '~/configure-store';


const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
}
