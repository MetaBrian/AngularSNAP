//components must be registered in this file if not created via ng g c NAME

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { CardRaterComponent } from './card-rater/card-rater.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cardrater', component: CardRaterComponent },
  { path: 'deckbuilder', component: DeckBuilderComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    DeckBuilderComponent,
    CardRaterComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
