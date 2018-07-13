import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Player } from '../../models/player.model';
import { Deck } from '../../models/deck.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  players: Array<Player> = [
    new Player('Dealer', 'dealer'),
    new Player('Player 1', 'player')
  ];

  deckLoaded: boolean = false;

  deck: Deck;

  TOTAL_SET: number = 6;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getNewDeck(this.TOTAL_SET)
    .then((deck) => {
      this.deck = new Deck(deck.deck_id, deck.remaining, deck.shuffled, deck.success);
    }).then(() => {
      this.deckLoaded = true;
    });
  }
}
