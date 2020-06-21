import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = 'id';
    const editParam = '';
    this.route.params.subscribe((params: Params) => {
      this.id = +params[idParam];
      this.editMode = params[idParam] != null;
      // /recipe/0/edit - checking whether a route param of id is present or not; if it is then it is always in edit mode
      // /recipe/new - if 'new' is provided then editMode is false as id is undefined
    });
    // console.log(this.editMode);
  }

}
