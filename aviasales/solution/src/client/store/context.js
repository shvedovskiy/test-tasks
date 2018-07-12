// @flow
import { createContext } from 'react';


export type ContextState = {
  currency: ?string,
};

/* eslint-disable-next-line import/prefer-default-export */
export const CurrencyContext = createContext<ContextState>({
  currency: null,
});
