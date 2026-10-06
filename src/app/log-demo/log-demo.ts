import { Component, inject } from '@angular/core';
import { Logger } from '../services/logger';

@Component({
  selector: 'app-log-demo',
  imports: [],
  templateUrl: './log-demo.html',
  styleUrl: './log-demo.css'
})
export class LogDemo {
  private readonly loggerService = inject(Logger);

  getServiceInstanceId(): number {
    return this.loggerService.getInstanceId();
  }

  onLogClick(): void {
    this.loggerService.log('This is a log message');
  }

  onWarnClick(): void {
    this.loggerService.warn('This is a warning message');
  }

  onErrorClick(): void {
    this.loggerService.error('This is an error message');
  }
}