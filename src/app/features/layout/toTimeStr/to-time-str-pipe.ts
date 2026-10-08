import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTimeStr',
})
export class ToTimeStrPipe implements PipeTransform {
  transform(value: number): string {

    let secondes: number = value % 60;
    let minutes: number = (value - secondes) / 60;

    let secondesStr: string = (secondes < 10? '0': '') + secondes.toString();
    let minutesStr: string = (minutes < 10? '0': '') + minutes.toString();

    if (minutes == 0)
      return `${secondesStr} secondes`;
    
    return `${minutesStr} minutes ${secondesStr} secondes`;
  }
}
