import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { PlayerComponent } from './components/player/player.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ControlComponent } from './components/control/control.component';
import { HandComponent } from './components/hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TableComponent,
    PlayerComponent,
    ScoreboardComponent,
    ControlComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
