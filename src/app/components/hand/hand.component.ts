import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { LogicService } from '../../services/logic.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() player: Player;

  cardsLoaded: boolean = false;
  total: any;

  constructor(private logic: LogicService) { }

  ngOnInit() {
    this.player.Total = this.logic.getHandTotal(this.player.Cards);
    this.total = this.player.type === 'dealer' ? '??' : this.player.Total;
    this.cardsLoaded = true;
  }
}
