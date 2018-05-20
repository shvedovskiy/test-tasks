import { combineReducers } from 'redux';

import {
  SET_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FETCH_NEWS_SUCCESS,
  FETCH_GISTS_SUCCESS,
  FETCH_COUNTER_SUCCESS
} from './actions';


const counter = (state = 0, action) => {
  switch (action.type) {
    case FETCH_COUNTER_SUCCESS:
      return action.payload;
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
  }
  return state;
};

const news = (state = [], action) => {
    switch (action.type) {
      case FETCH_NEWS_SUCCESS:
        return [
          ...state,
          ...action.payload
        ];
    }
    return state;
};

const gists = (state = [], action) => {
  switch (action.type) {
    case FETCH_GISTS_SUCCESS:
      return [
        ...state,
        ...action.payload
      ];
  }
  return state;
};

export default combineReducers({
    counter,
    news,
    gists
});
