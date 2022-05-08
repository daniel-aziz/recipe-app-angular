import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'How to make an American Apple Pie','../../../assets/imgs/apple-pie.jpg'),
    new Recipe('Icecream', 'Homemade delicious Icecream','../../../assets/imgs/icecream.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
