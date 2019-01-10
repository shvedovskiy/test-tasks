// @flow
import { noun } from 'plural-ru';

import type { Reducer } from './store/types';

export function pluralStop(number: string): string {
  return noun(number, 'пересадка', 'пересадки', 'пересадок');
}

export function splitPrice(price: string): string {
  return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function createReducer<S: { asMutable: Function }, A: *>(
  initialState: S,
  handlers: { [reducer: string]: Reducer<S, A> },
) {
  return (state: S = initialState, action: A): S => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state.asMutable({ deep: true });
  };
}
