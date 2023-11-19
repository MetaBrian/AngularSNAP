import { Component } from '@angular/core';
// import { CardService } from 'src/app/services/cards.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
})
export class DeckBuilderComponent {
  //pass in the button's name which will be made from the API

  constructor(private http: HttpClient) {}

  addCard(cardName: string) {
    this.http
      .post('http://localhost:7120/addCard', { cardName: cardName })
      .subscribe(
        (data) => {
          console.log(data, 'attempt made');
        },
        (err) => console.log(err)
      );
  }

  collectCards(){
    this.http.get('https://marvelsnap.io/database/characters/').subscribe((data)=>{console.log(data)}, (err)=>console.log(err))
  }

}
