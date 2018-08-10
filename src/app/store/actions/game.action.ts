import { Action } from '@ngrx/store';
import { GameType } from '../../models/game.model';

export enum GameActionTypes {
  UPDATE_GAME_STATUS = '[UPDATE] UPDATE_GAME_STATUS'
}

// Update the status of the game
export class UpdateGameStatus implements Action {
  readonly type = GameActionTypes.UPDATE_GAME_STATUS;
  constructor(public payload: { status: GameType }) {}
}

export type GameActions = UpdateGameStatus;
