import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simply a test', '../../../assets/images/recipe1.jpg'),
    new Recipe('A test recipe', 'Simply a test', '../../../assets/images/recipe2.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
