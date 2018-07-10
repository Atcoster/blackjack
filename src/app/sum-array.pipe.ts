import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumArray'
})
export class SumArrayPipe implements PipeTransform {

  transform(cards: Array, args?: any): Number {
    return cards.reduce((a, b) => a + b, 0);
  }
}
