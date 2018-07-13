import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  getHandTotal(cards: Array<Card>): number {
    console.log(cards);
    return cards.reduce((sum, current) => {
      const val = this.getValue(current.Value);
      return sum += val;
    }, 0);
  }

  getValue(cardValue: any): number {
    let value: number;

    console.log(cardValue);

    switch (cardValue) {
      case 'KING':
      case 'QUEEN':
      case 'JACK':
        value = 10;
        break;
      case 'ACE':
        value = 11;
        break;
      default:
        value = Number.parseInt(cardValue);
        break;
    }
    return value;
  }
}
