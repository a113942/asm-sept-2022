import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs';
import { CountByEvents, CountByOptions, CountFeatureEvents } from '../counter.actions';



@Injectable()
export class CounterEffects {
 // logItOut$ = createEffect(
 //   () => {
 //     return this.actions$.pipe(tap((a) => console.log(a.type)));
 //   },
  //  { dispatch: false }
 // );

  loadCountBy$ = createEffect(()=> {
      return this.actions$.pipe(
        ofType(CountFeatureEvents.entered),
        map(()=> localStorage.getItem('by')),
        filter((val)=> val !== null),
        map((savedValue: string | null) => savedValue!),
        map((v) => +v),
        map((v)=> v as CountByOptions),
        filter((v) => v === 1 || v === 3 || v === 5),
        map((by) => CountByEvents.set({payload: { by }}))
      );
    },
    { dispatch : true}
  );

  saveCountBy$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CountByEvents.set), // Stop here if it isn't a 'set' action
        tap((a) => localStorage.setItem('by', a.payload.by.toString()))
      );
    },
    { dispatch: false }
  );


 constructor(private actions$: Actions) {}
}
