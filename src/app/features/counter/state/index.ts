import { ActionReducerMap } from '@ngrx/store';
import * as fromCount from './reducers/counter.reducer';



export const FEATURENAME = 'Counter';



// TypeScript needs this.
export interface CounterState {
  count: fromCount.CountState;
}



export const reducers: ActionReducerMap<CounterState> = {
  count: fromCount.reducer,
};
