import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../data.service';
import { CompilerConfig } from '@angular/compiler';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit, AfterContentInit {
  deck: Object;
  total: Number;

  TOTAL_DECKS: Number = 6;
  START_CARDS: Number = 2;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getNewDeck(this.TOTAL_DECKS)
    .then((deck) => {
      this.data.getDeckWithCards(deck.deck_id, this.START_CARDS)
      .then((startDeck) => {
        this.deck = startDeck;
        console.log(startDeck);
      });
    });
  }

  ngAfterContentInit() {
    // console.log('decks', this.decks$);
    // this.data.getCardsFromDesks(this.decks$['id'], 3).subscribe(data => this.cards$.push(data));
  }
}
