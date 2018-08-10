import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Deck } from '../models/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: Store<fromStore.AppState>) {
    store.subscribe();
  }

  getNewDeckFromApi(total: number) {
    return axios
      .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${total}`)
      .then( response => response.data)
      .catch( error => console.error(error));
  }

  getNewCardFromApi(id: string) {
    return axios
      .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
      .then( response => response.data )
      .catch( error => console.error(error));
  }
}
