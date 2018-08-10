import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';
import { DataService } from '../../services/data.service';
import PLAYERS from '../../players';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  players: Player[];
  totalSet: number;
  tableReady: boolean = false;

  constructor(
    private data: DataService,
    private store: Store<fromStore.AppState>) {
      store.select(state => this.totalSet = state.deck.totalSet).subscribe();
  }

  ngOnInit() {
    this.initStore();
  }

  initStore() {
    this.data.getNewDeckFromApi(this.totalSet)
    .then((data) => {
      const deck = {
        id: data.deck_id
      };

      this.store.dispatch(
        new fromActions.Actions.addDeck({ deck })
      );

    }).then(() => {
      const players = PLAYERS;

      for (const player of players) {
        this.store.dispatch(
          new fromActions.Actions.addPlayer({ player })
        );
      }
    }).then(() => {
      this.store.select(state => {
        this.players = state.players.players;
        this.tableReady = true;
      }).subscribe();
    });
  }
}
