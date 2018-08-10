import { Action } from '@ngrx/store';
import { ScoreBoard } from '../../models/scoreboard.model';

export enum ScoreBoardActionTypes {
  UPDATE_SCOREBOARD = '[SCOREBOARD] UPDATE_SCOREBOARD'
}

// Update Deck
export class UpdateScoreBoard implements Action {
  readonly type = ScoreBoardActionTypes.UPDATE_SCOREBOARD;
  constructor(public payload: { scoreBoard: ScoreBoard }) {}
}

export type ScoreBoardActions = UpdateScoreBoard;
