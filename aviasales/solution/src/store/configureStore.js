import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { isProd } from '~/util';


const composeEnhancers = isProd ? compose : composeWithDevTools;

const middlewares = [thunk];
if (!isProd) {
  middlewares.push(createLogger());
}

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

export default configureStore;
