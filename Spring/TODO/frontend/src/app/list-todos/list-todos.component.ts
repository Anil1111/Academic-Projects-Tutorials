import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1, 'learn to dance', true, new Date()),
  //   new Todo(2, 'learn to code', false, new Date()),
  //   new Todo(3, 'learn to enjoy', true, new Date()),
  // ];

  todos: Todo[] = [];
  message: string;

  constructor(
    private router: Router,
    private todoDataService: TodoDataService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos(this.basicAuthenticationService.getAuthenticatedUser()).subscribe(
      (response) => {
        this.todos = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  deleteTodo(id: number) {
    console.log(`delete ${id}`);

    this.todoDataService.deleteTodo(this.basicAuthenticationService.getAuthenticatedUser(), id).subscribe(
      (response) => {
        console.log(response);
        this.message = `Delete oof todo ${id} successful`;
        this.refreshTodos();
      },
      (error) => console.log(error)
    );
  }

  updateTodo(id: number) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
