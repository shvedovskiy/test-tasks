// @flow
import { noun } from 'plural-ru';
import { NODE_ENV } from '~/config'; // eslint-disable-line import/extensions, import/no-unresolved


export function pluralStop(number: number): string {
  return noun(number, 'пересадка', 'пересадки', 'пересадок');
}

export function splitPrice(price: string): string {
  return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function isProd(): boolean {
  return NODE_ENV === 'production';
}

export function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state.asMutable({ deep: true });
  };
}
