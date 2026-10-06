import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Counter {
  private readonly count = signal<number>(0);

  readonly getCount = this.count.asReadonly();

  increment(): void {
    this.count.update(value => value + 1);
  }

  decrement(): void {
    this.count.update(value => value - 1);
  }

  reset(): void {
    this.count.set(0);
  }
}