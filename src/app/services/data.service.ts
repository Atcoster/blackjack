import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getNewDeck(total: number) {
    return axios
          .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${total}`)
          .then( response => response.data )
          .catch( error => console.error(error));
  }

  getCard(id: string) {
    return axios
          .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
          .then( response => response.data )
          .catch( error => console.error(error));
  }
}
