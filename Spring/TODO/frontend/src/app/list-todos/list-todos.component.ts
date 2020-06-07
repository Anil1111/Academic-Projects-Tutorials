import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.todoDataService.retrieveAllTodos('richard').subscribe(
      (response) => {
        this.todos = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
