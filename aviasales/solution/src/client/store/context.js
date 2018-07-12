// @flow
import { createContext } from 'react';

import { RUSSIAN_ROUBLE } from 'src/config/currency';


export type ContextState = {
  currency: string,
};

/* eslint-disable-next-line import/prefer-default-export */
export const CurrencyContext = createContext<ContextState>({
  currency: RUSSIAN_ROUBLE,
});
