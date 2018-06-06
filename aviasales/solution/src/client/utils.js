import { noun } from 'plural-ru';
import { NODE_ENV } from '~/config'; // eslint-disable-line import/extensions, import/no-unresolved


export function pluralStop(number) {
  return noun(number, 'пересадка', 'пересадки', 'пересадок');
}

export function splitPrice(price) {
  return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function isProd() {
  return NODE_ENV === 'production';
}
