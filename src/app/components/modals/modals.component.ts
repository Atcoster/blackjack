import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  status: string;
  msg: string;

  constructor(private store: Store<fromStore.AppState>) {
    store.select(state => this.status = state.game.game).subscribe();
  }

  ngOnInit() {
    this.msg = 'Playing';
  }
}
