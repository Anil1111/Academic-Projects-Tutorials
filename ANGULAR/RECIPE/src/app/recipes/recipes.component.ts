import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedRecipe(recipe: Recipe) {
    // console.log(recipe.name);
    this.selectedRecipe = recipe;

  }

}
