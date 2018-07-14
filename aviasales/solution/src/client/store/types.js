// @flow
import type { Immutable } from 'seamless-immutable';

import { type Actions as SettingsActions, type State as SettingsState } from './settings/types';
import { type Actions as TicketsActions, type State as TicketsState } from './tickets/types';


type _ExtractReturn<B, F: (...args: Array<any>) => B> = B; // eslint-disable-line no-unused-vars
export type ExtractReturn<F> = _ExtractReturn<*, F>;

type GetState<S> = () => S;
type Dispatch<S, A> = (action: A | ThunkAction<S, A> | Promise<A>) => any;
export type ThunkAction<S, A> = (dispatch: Dispatch<S, A>, getState: GetState<S>) => any;

export type Actions = SettingsActions | TicketsActions;
export type State = Immutable<{
  settings: SettingsState,
  tickets: TicketsState,
}>;
