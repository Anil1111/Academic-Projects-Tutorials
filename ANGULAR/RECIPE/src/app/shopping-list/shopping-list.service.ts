import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChnaged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 15),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
    // since we are sending a new object of ingredients, any chnage in this will not automatically reflect in the shopping-list component
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChnaged.emit(this.getIngredients()); // on every change, emitting the updated ingredient[]
  }
  deleteIngredient() {
    this.ingredients.pop();
    this.ingredientChnaged.emit(this.getIngredients());
  }
  clearIngredient() {
    this.ingredients = [];
    this.ingredientChnaged.emit(this.getIngredients());
  }
  addIngredientsList(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {..    }
    this.ingredients.push(...ingredients); // pushing all the ingredients in one go in order to avoid multiple event emissions
    this.ingredientChnaged.emit(this.getIngredients());
  }
}
