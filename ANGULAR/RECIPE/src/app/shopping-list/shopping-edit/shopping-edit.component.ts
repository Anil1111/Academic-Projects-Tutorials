import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @Output() ingredientList = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    let newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredients.push(newIngredient);
    this.emitIngredient(this.ingredients);
  }
  onDelete() {
    this.ingredients.pop();
    this.emitIngredient(this.ingredients);
  }
  onClear() {
    this.ingredients = [];
    this.emitIngredient(this.ingredients);
  }
  emitIngredient(ingredients: Ingredient[]) {
    this.ingredientList.emit(ingredients);
  }
}
