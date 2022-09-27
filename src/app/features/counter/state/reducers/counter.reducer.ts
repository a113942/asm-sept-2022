import { createReducer, on } from '@ngrx/store';
import { CountByEvents, CountByOptions, CounterEvents } from '../counter.actions';
export interface CountState {
  current: number;
  by: CountByOptions;
}

const initialState: CountState = {
  current: 0,
  by: 1
};

export const reducer = createReducer(
  initialState,
  on(CountByEvents.set, (s, a) => ({...s, by: a.payload.by})),
  on(
    CounterEvents.incremented,
    (currentState: CountState, action): CountState => {
      return {
        ...currentState, current: currentState.current + currentState.by,
      };
    }
  ),
  on(CounterEvents.decremented, (s, a) => ({ ...s, current: s.current - s.by })),
  on(CounterEvents.reset, () => initialState),
);
