export class Deck {
  constructor(private id: string, private remaining: number, private shuffled: boolean, private success: boolean) {}

  get ID(): string {
    return this.id;
  }
}
