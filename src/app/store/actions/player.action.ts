import { Action } from '@ngrx/store';
import { Player } from '../../models/player.model';
import { Card } from '../../models/card.model';

export enum PlayerActionTypes {
  ADD_PLAYER = '[PLAYER] ADD_PLAYER',
  ADD_CARD = '[CARD] ADD_CARD',
  UPDATE_TOTAL = '[UPDATE] UPDATE_TOTAL',
  UPDATE_CARD_VALUE = '[UPDATE] UPDATE_CARD',
  UPDATE_IS_PLAYING = '[UPDATE] UPDATE_IS_PLAYING'
}

// Add Player
export class AddPlayer implements Action {
  readonly type = PlayerActionTypes.ADD_PLAYER;
  constructor(public payload: { player: Player } ) {}
}

// Add Card
export class AddCard implements Action {
  readonly type = PlayerActionTypes.ADD_CARD;
  constructor(public payload: { card: Card, id: number } ) {}
}

// Update Total
export class UpdateTotal implements Action {
  readonly type = PlayerActionTypes.UPDATE_TOTAL;
  constructor(public payload: { total: number, id: number } ) {}
}

// Update cardvalue
export class UpdateCardValue implements Action {
  readonly type = PlayerActionTypes.UPDATE_CARD_VALUE;
  constructor(public payload: { id: number, index: number } ) {}
}

// Update is playing
export class UpdateIsPlaying implements Action {
  readonly type = PlayerActionTypes.UPDATE_IS_PLAYING;
  constructor(public payload: { id: number } ) {}
}

export type PlayerActions = AddPlayer | AddCard | UpdateTotal | UpdateCardValue | UpdateIsPlaying;
