import { Component, inject } from '@angular/core';
import { Logger } from '../services/logger';

@Component({
  selector: 'app-another-demo',
  imports: [],
  templateUrl: './another-demo.html',
  styleUrl: './another-demo.css'
})
export class AnotherDemo {
  private readonly loggerService = inject(Logger);

  getInstanceId(): number {
    return this.loggerService.getInstanceId();
  }
}