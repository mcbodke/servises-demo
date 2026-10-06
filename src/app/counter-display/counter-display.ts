import { Component, inject } from '@angular/core';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css'
})
export class CounterDisplay {
  private readonly counterService = inject(Counter);

  getCurrentCount(): number {
    return this.counterService.getCount();
  }
}