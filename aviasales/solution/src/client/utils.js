// @flow
import { noun } from 'plural-ru';
import { NODE_ENV } from 'src/config';


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
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state.asMutable({ deep: true });
  };
}
