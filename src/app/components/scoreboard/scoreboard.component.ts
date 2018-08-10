import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';
import { ScoreBoard } from '../../models/scoreboard.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  scoreBoard: ScoreBoard;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    const scoreBoard = {
      rounds: 1, wins: 0, losses: 0, draws: 0
    };

    this.store.dispatch(
      new fromActions.Actions.updateScoreBoard({ scoreBoard })
    );

    this.store.select(state => this.scoreBoard = state.scoreBoard.scoreBoard).subscribe();
  }
}
