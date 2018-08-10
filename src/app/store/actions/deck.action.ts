import { Action } from '@ngrx/store';
import { Deck } from '../../models/deck.model';

export enum DeckActionTypes {
  ADD_DECK = '[DECK] ADD_DECK'
}

// Add Deck
export class AddDeck implements Action {
  readonly type = DeckActionTypes.ADD_DECK;
  constructor(public payload: { deck: Deck }) {}
}

export type DeckActions = AddDeck;
