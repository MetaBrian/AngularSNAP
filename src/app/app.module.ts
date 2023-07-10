//components must be registered in this file if not created via ng g c NAME

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 4aadcaae2804357d0a632703b7b0583d5be7471b

import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { CardRaterComponent } from './components/card-rater/card-rater.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

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
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
