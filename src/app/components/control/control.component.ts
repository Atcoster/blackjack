import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LogicService } from '../../services/logic.service';
import { Player } from '../../models/player.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input() player: Player;

  deckId: string;

  constructor(private data: DataService, private logic: LogicService, private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    const total = this.logic.getHandTotal(this.player.cards);
    if (total >= 21) {
      this.dealerPlay();
    }
    this.store.select(state => this.deckId = state.deck.deck.id).subscribe();
  }

  onHit() {
    this.data.getNewCardFromApi(this.deckId)
      .then((deck) => {
        const card  = deck.cards[0];
        const playerTotal = this.logic.getHandTotal(this.player.cards);
        const cardValue = this.logic.getValue(playerTotal, card.value);

        if ((playerTotal + cardValue) >= 21) {
          for (const index in this.player.cards) {
            if (this.player.cards[index].value === 11) {
              this.store.dispatch(
                new fromActions.Actions.updateCardValue({
                  id: this.player.id,
                  index: +index
                })
              );
            }
          }
        }

        const newCard = {
          image: card.image,
          value: cardValue,
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

        if (total >= 21) {
          this.dealerPlay();
        }
      });
  }

  onStay() {
    this.changeTurn();
  }

  changeTurn() {
    this.store.dispatch(
      new fromActions.Actions.updateIsPlaying({
        id: this.player.id
      })
    );

    this.dealerPlay();
  }

  dealerPlay() {
    let dealer: Player;
    this.store.select(state => dealer = state.players[0]).subscribe();

    console.log(dealer);
  }
}
