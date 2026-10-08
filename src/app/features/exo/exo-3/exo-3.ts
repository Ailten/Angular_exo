import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ToTimeStrPipe } from '../../layout/toTimeStr/to-time-str-pipe';

@Component({
  selector: 'app-exo-3',
  imports: [ToTimeStrPipe],
  templateUrl: './exo-3.html',
  styleUrl: './exo-3.scss',
})
export class Exo3 implements OnInit {

  timeSeconde : WritableSignal<number> = signal(0);
  intervalTimeCount: NodeJS.Timeout|null = null; 

  ngOnInit(): void {
  }

  start(): void {
    console.log('start');
    if(this.intervalTimeCount !== null){
      console.log('already start !');
      return;
    }

    this.intervalTimeCount = setInterval(() => { 
      this.addTime();
    }, 1000);
  }
  pause(): void {
    console.log('pause');
    if(this.intervalTimeCount === null){
      console.log('already pause !');
      return;
    }

    clearInterval(this.intervalTimeCount);
    this.intervalTimeCount = null;

  }
  reset(): void {
    console.log('reset');
    this.timeSeconde.set(0);
  }

  addTime(addSeconde: number = 1): void {
    this.timeSeconde.update(v => v + addSeconde);
  }


}
