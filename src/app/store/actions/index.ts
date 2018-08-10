import {UpdateGameStatus} from './game.action';
import {AddPlayer, AddCard, UpdateTotal, UpdateCardValue, UpdateIsPlaying} from './player.action';
import {AddDeck} from './deck.action';
import {UpdateScoreBoard} from './scoreboard.action';

export const Actions = {
  addPlayer: AddPlayer,
  addDeck: AddDeck,
  addCard: AddCard,
  updateTotal: UpdateTotal,
  updateCardValue: UpdateCardValue,
  updateScoreBoard: UpdateScoreBoard,
  updateIsPlaying: UpdateIsPlaying,
  updateGameStatus: UpdateGameStatus
};

