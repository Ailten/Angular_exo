import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-2',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './exo-2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exo-2.scss',
})
export class Exo2 implements OnInit {
  isOne: boolean = false;
  countClick: number = 0;

  myVariable: string = 'world'; // or signal('world');

  ngOnInit(): void {}

  clickOnOff(): void {
    this.isOne = !this.isOne; // switch button value.
  }

  clickCountIncrement(): void {
    this.countClick++; // increment count click.
  }

  onKeyUpEnter(event: Event): void {
    console.log((event.target as HTMLInputElement).value);
  }
}
