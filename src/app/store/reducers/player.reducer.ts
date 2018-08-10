import * as fromPlayer from '../actions/player.action';
import { Player } from '../../models/player.model';

export interface PlayerState {
  players: Player[];
}

const initialState: PlayerState = {
  players: []
};

export function reducer(
  state: PlayerState = initialState,
  action: fromPlayer.PlayerActions
): PlayerState {

    switch (action.type) {

      case fromPlayer.PlayerActionTypes.ADD_PLAYER: {
        return {
          ...state,
          players: [...state.players, action.payload.player]
        };
      }

      case fromPlayer.PlayerActionTypes.ADD_CARD: {
        const players = state.players;
        players.map((player, index) => {
          if (player.id === action.payload.id) {
            players[index].cards.push(action.payload.card);
          }
        });

        return {
          ...state,
          players: players
        };
      }

      case fromPlayer.PlayerActionTypes.UPDATE_TOTAL: {
        const players = state.players;
        players.map((player, index) => {
          if (player.id === action.payload.id) {
            players[index].total = action.payload.total;
          }
        });

        return {
          ...state,
          players: players
        };
      }

      case fromPlayer.PlayerActionTypes.UPDATE_CARD_VALUE: {
        const players = state.players;
        players.map((player, index) => {
          if (player.id === action.payload.id) {
            players[index].cards[action.payload.index].value = 1;
          }
        });

        return {
          ...state,
          players: players
        };
      }

      case fromPlayer.PlayerActionTypes.UPDATE_IS_PLAYING: {
        const players = state.players;
        players.map((player, index) => {
          players[index].playing = !players[index].playing;
        });

        return {
          ...state,
          players: players
        };
      }

      default: {
        return state;
      }
    }
}
