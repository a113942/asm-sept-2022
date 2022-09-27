import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { CounterEvents } from './state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  current = 0;
  constructor(private store: Store) {}

 increment() {
    this.store.dispatch(CounterEvents.incremented());
  }

 decrement() {
    this.store.dispatch(CounterEvents.decremented());
  }
}
