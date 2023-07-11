import { Component } from '@angular/core';
// import { CardService } from 'src/app/services/cards.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
})
export class DeckBuilderComponent {
  //pass in the button's name which will be made from the API

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: '',
  });
  options = { headers: this.headers };

  addCard(cardName: string) {
    return this.http.post('http://localhost:7120/addCard', cardName).subscribe(
      (data) => {
        console.log(data, 'attempt made');
      },
      (err) => console.log(err)
    );
  }
}
