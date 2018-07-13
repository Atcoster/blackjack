import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Player } from '../../models/player.model';
import { Deck } from '../../models/deck.model';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() deck: Deck;

  handLoaded: boolean = false;
  cardsAmount: number = 2;
  backCardImg: string = '../../assets/images/cardback.png';

  constructor(private data: DataService) { }

  ngOnInit() {
    const $this = this;

    for (let i = 0; i < $this.cardsAmount; i++) {
      $this.data.getCard($this.deck.ID)
      .then((deck) => {
        const card     = deck.cards[0];
        const value    = card.value, suit = card.suit, code = card.code;
        const isDealer = $this.player['type'] === 'dealer';
        const img      = isDealer && i === 0
                         ? $this.backCardImg
                         : card.image;

        $this.player.Cards = new Card(img, value, suit, code);

        if ( ++i === $this.cardsAmount ) {
          $this.handLoaded = true;
        }
      });
    }
  }
}
