import * as fromDeck from '../actions/deck.action';
import { Deck } from '../../models/deck.model';

export interface DeckState {
  deck: Deck;
  totalSet: number;
}

const initialState: DeckState = {
  deck: null,
  totalSet: 6
};

export function reducer(
  state: DeckState = initialState,
  action: fromDeck.DeckActions): DeckState {

    if (action.payload !== undefined) {
      // console.log(action.payload);
    }

    switch (action.type) {
      case fromDeck.DeckActionTypes.ADD_DECK: {
        return {
          ...state,
          deck: action.payload.deck
        };
      }
      default:
        return state;
    }
}
