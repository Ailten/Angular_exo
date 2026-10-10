import { Component, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { ToTimeStrPipe } from '../../layout/toTimeStr/to-time-str-pipe';

@Component({
  selector: 'app-exo-6',
  imports: [ToTimeStrPipe],
  templateUrl: './exo-6.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exo-6.scss',
})
export class Exo6 {
  time: WritableSignal<number> = signal(0);
}
