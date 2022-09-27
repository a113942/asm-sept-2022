import { createReducer, on } from '@ngrx/store';
import { CounterEvents } from '../counter.actions';
export interface CountState {
  current: number;
}

const initialState: CountState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(
    CounterEvents.incremented,
    (currentState: CountState, action): CountState => {
      return {
        current: currentState.current + 1,
      };
    }
  ),
  on(CounterEvents.decremented, (s, a) => ({ current: s.current - 1 }))
);
