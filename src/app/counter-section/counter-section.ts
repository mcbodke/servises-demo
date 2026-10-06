import { Component } from '@angular/core';
import { CounterDisplay } from '../counter-display/counter-display';
import { CounterStatus } from '../counter-status/counter-status';
import { CounterControls } from '../counter-controls/counter-controls';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-counter-section',
  imports: [CounterDisplay, CounterStatus, CounterControls],
  providers: [Counter],
  templateUrl: './counter-section.html',
  styleUrl: './counter-section.css'
})
export class CounterSection {}