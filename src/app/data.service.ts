import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getNewDeck(total: Number) {
    return axios
          .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${total}`)
          .then( response => response.data )
          .catch( error => console.error(error));
  }

  getDeckWithCards(id: Number, total: Number) {
    return axios
          .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${total}`)
          .then( response => response.data )
          .catch( error => console.error(error));
  }
}
