import { ActionReducerMap } from '@ngrx/store';

import * as fromGame from './game.reducer';
import * as fromPlayer from './player.reducer';
import * as fromDeck from './deck.reducer';
import * as fromScoreBoard from './scoreboard.reducer';

export interface AppState {
  game: fromGame.GameState;
  players: fromPlayer.PlayerState;
  deck: fromDeck.DeckState;
  scoreBoard: fromScoreBoard.ScoreBoardState;
}

export const appReducer: ActionReducerMap<AppState> = {
  game: fromGame.reducer,
  players: fromPlayer.reducer,
  deck: fromDeck.reducer,
  scoreBoard: fromScoreBoard.reducer
};
