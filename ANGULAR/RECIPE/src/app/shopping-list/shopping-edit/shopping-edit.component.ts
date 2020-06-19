import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAdd() {
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }
  onDelete() {
    this.shoppingListService.deleteIngredient();
  }
  onClear() {
    this.shoppingListService.clearIngredient();
  }
}
