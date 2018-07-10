import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecksComponent } from './decks/decks.component';

const routes: Routes = [
  {
    path: '',
    component: DecksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
