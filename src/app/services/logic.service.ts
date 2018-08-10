import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  getHandTotal(cards: Array<Card>): number {
    return cards.reduce((sum, current) => {
      return sum += current.value;
    }, 0);
  }

  getValue( sum: number, cardValue: any): number {
    let value: number;
    switch (cardValue) {
      case 'KING':
      case 'QUEEN':
      case 'JACK':
        value = 10;
        break;
      case 'ACE':
        value = sum < 11 ? 11 : 1;
        break;
      default:
        value = Number.parseInt(cardValue);
        break;
    }
    return value;
  }
}
