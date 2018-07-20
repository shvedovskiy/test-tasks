// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import type { Store } from 'redux';
import { stateTransformer } from 'redux-seamless-immutable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isProd } from 'src/utils';
import rootReducer from './rootReducer';
import type { State, Actions } from './types';


const composeEnhancers = isProd ? compose : composeWithDevTools;

const middlewares = [thunk];
if (!isProd) {
  middlewares.push(createLogger({ stateTransformer }));
}

const configureStore = (): Store<State, Actions> =>
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

export default configureStore;
