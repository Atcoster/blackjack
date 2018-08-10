import * as fromGame from '../actions/game.action';
import { GameType } from '../../models/game.model';

export interface GameState {
  game: GameType;
}

const initialState: GameState = {
  game: GameType.INGAME
};

export function reducer(
  state: GameState = initialState,
  action: fromGame.GameActions): GameState {

    if (action.payload !== undefined) {
      // console.log(action.payload);
    }

    switch (action.type) {
      case fromGame.GameActionTypes.UPDATE_GAME_STATUS: {
        return {
          ...state,
          game: action.payload.status
        };
      }
      default:
        return state;
    }
}
