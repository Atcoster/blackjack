import { Card } from './card.model';

export interface Player {
  cards?: Card[];
  total?: number;
  name?: string;
  type?: string;
  id?: number;
  playing?: boolean;
}
