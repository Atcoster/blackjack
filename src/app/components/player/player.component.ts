import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LogicService } from '../../services/logic.service';
import { Player } from '../../models/player.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  deckId: string;
  handLoaded: boolean = false;
  cardsAmount: number = 2;
  backCardImg: string = '../../assets/images/cardback.png';

  constructor(private data: DataService, private logic: LogicService, private store: Store<fromStore.AppState>) {
    store.select(state => this.deckId = state.deck.deck.id).subscribe();
  }

  ngOnInit() {
    for (let i = 0; i < this.cardsAmount; i++) {
      this.addCard(i);
    }
  }

  addCard(i) {
    this.data.getNewCardFromApi(this.deckId)
      .then((deck) => {
        const card = deck.cards[0];
        const playerTotal = this.logic.getHandTotal(this.player.cards);
        const newCard = {
          image: card.image,
          value: this.logic.getValue(playerTotal, card.value),
          suit: card.suit,
          code: card.code
        };

        this.store.dispatch(
          new fromActions.Actions.addCard({
              card : newCard,
              id: this.player.id
            })
        );
      })
      .then(() => {
        const total = this.logic.getHandTotal(this.player.cards);

        this.store.dispatch(
          new fromActions.Actions.updateTotal({
            total: total,
            id: this.player.id
          })
        );

        this.handLoaded = true;

      });
  }
}
