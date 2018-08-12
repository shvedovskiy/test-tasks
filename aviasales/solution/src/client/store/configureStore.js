// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import type { Store as ReduxStore } from 'redux';
import { stateTransformer } from 'redux-seamless-immutable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isProd } from 'shared/config';
import rootReducer from './rootReducer';
import type { State, Actions } from './types';


const composeEnhancers: Function = isProd ? compose : composeWithDevTools;

const middlewares: Array<any> = [thunk];
if (!isProd) {
  middlewares.push(createLogger({ stateTransformer }));
}
const enhancer: Function = composeEnhancers(applyMiddleware(...middlewares));

type Store = ReduxStore<State, Actions>;

export default function configureStore(): Store {
  return createStore(rootReducer, enhancer);
}
