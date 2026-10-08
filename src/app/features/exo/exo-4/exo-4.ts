import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exo-4',
  imports: [],
  templateUrl: './exo-4.html',
  styleUrl: './exo-4.scss',
})
export class Exo4 {

  isOn: boolean = false;

  clickIsOn(): void{
    this.isOn = ! this.isOn;
  }

}
