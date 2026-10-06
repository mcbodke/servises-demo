import { Component, inject } from '@angular/core';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-counter-status',
  imports: [],
  templateUrl: './counter-status.html',
  styleUrl: './counter-status.css'
})
export class CounterStatus {
  private readonly counterService = inject(Counter);

  getStatus(): string {
    const count = this.counterService.getCount();

    if (count < 0) return 'Negative';
    if (count === 0) return 'Zero';
    if (count <= 5) return 'Low';
    if (count <= 10) return 'Medium';
    return 'High';
  }

  getStatusColor(): string {
    const count = this.counterService.getCount();

    if (count < 0) return '#e74c3c';
    if (count === 0) return '#95a5a6';
    if (count <= 5) return '#3498db';
    if (count <= 10) return '#f39c12';
    return '#27ae60';
  }
}