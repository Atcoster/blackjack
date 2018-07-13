export class Card {
  constructor(
    private image: string,
    private value: string,
    private suit: string,
    private code: string) { }

  get Value(): string {
      return this.value;
  }
}
