import { createStore, applyMiddleware, compose } from 'redux';
import { stateTransformer } from 'redux-seamless-immutable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { isProd } from '~/utils'; // eslint-disable-line import/extensions, import/first, import/no-unresolved


const composeEnhancers = isProd() ? compose : composeWithDevTools;

const middlewares = [thunk];
if (!isProd()) {
  middlewares.push(createLogger({ stateTransformer }));
}

const configureStore = () =>
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

export default configureStore;
