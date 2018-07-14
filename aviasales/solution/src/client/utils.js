// @flow
import { noun } from 'plural-ru';
import { NODE_ENV } from 'src/config/config';


export function pluralStop(number: string): string {
  return noun(number, 'пересадка', 'пересадки', 'пересадок');
}

export function splitPrice(price: string): string {
  return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function isProd(): boolean {
  return NODE_ENV === 'production';
}

export function createReducer<S: { asMutable: Function }, A: { type: string }>(
  initialState: S,
  handlers: { [reducer: string]: (S, A) => S },
) {
  return (state: S = initialState, action: A): S => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state.asMutable({ deep: true });
  };
}
