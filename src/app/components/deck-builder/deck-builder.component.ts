import { Component } from '@angular/core';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
})
export class DeckBuilderComponent {
  //pass in the button's name which will be made from the API
  addCard(cardName: string) {
    fetch('http://localhost:7120/addCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardName: cardName,
      }),
    }).catch((error) => console.log(error));
  }
}
