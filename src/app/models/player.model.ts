import { Card } from './card.model';

export class Player {
  private cards: Array<Card> = [];
  private total: number;

  constructor(private name: string, private type: string) {}

  get Cards(): any {
    return this.cards;
  }

  set Cards(card: any) {
    this.cards.push(card);
  }

  get Total(): number {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
  }
}
