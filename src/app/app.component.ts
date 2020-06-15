import { Component } from '@angular/core';
import {Recipe} from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rapp';
  recipe: Recipe;

  constructor() {
    this.recipe = new Recipe('Banana bread',
      'This is the banana bread that we use to make when I was a child and it was sooo gooood',
      null, null, null);
  }
}
