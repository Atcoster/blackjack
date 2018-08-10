import * as fromScoreBoard from '../actions/scoreboard.action';
import { ScoreBoard } from '../../models/scoreboard.model';

export interface ScoreBoardState {
  scoreBoard: ScoreBoard;
}

const initialState: ScoreBoardState = {
  scoreBoard: {}
};

export function reducer(
  state: ScoreBoardState = initialState,
  action: fromScoreBoard.ScoreBoardActions): ScoreBoardState {

    if (action.payload !== undefined) {
      // console.log(action.payload);
    }

    switch (action.type) {
      case fromScoreBoard.ScoreBoardActionTypes.UPDATE_SCOREBOARD: {
        return {
          ...state,
          scoreBoard: action.payload.scoreBoard
        };
      }
      default:
        return state;
    }
}
