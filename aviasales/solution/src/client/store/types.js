// @flow
import type { Immutable } from 'seamless-immutable';

import { type Actions as SettingsActions, type State as SettingsState } from './settings/types';
import { type Actions as TicketsActions, type State as TicketsState } from './tickets/types';
// import type { Reducers } from './rootReducer';


type _ExtractReturn<B, F: (...args: Array<any>) => B> = B; // eslint-disable-line no-unused-vars
export type ExtractReturn<F> = _ExtractReturn<*, F>;

type GetState<S> = () => S;
type Dispatch<S, A> = (action: A | ThunkAction<S, A> | Promise<A>) => any;
export type ThunkAction<S, A> = (dispatch: Dispatch<S, A>, getState: GetState<S>) => any;

export type Actions = SettingsActions | TicketsActions;

// type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
// export type State = $ObjMap<Reducers, $ExtractFunctionReturn>
export type State = Immutable<{
  settings: SettingsState,
  tickets: TicketsState,
}>;
export type Reducer<S, A: Actions> = (S, A) => A;
