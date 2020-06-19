import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Bread Omlette',
      'Yummy Omlette!',
      '../../../assets/images/recipe1.jpg',
      [new Ingredient('Bread', 12), new Ingredient('Omlette', 2)]
    ),
    new Recipe(
      'Herbal Mix',
      'Healthy Food!',
      '../../../assets/images/recipe2.jpg',
      [
        new Ingredient('Min Leaves', 23),
        new Ingredient('Cumin Seeds', 20),
        new Ingredient('Soya', 11),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // returning this.recipes will send the reference to the recipes list defined here
    // therefore any modification will be reflected on this main list
    // we use the slice() method to return a new recipes array
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsList(ingredients);
  }
}
