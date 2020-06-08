import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idRouteParam = 'id';
    this.id = +this.route.snapshot.params[idRouteParam];

    // providing initial value for todo until the below asynchronous function returns the valid data
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id !== -1) {
      this.todoDataService.retrieveTodo('richard', this.id).subscribe(
        response => {
          console.log(response);
          this.todo = response;
        }, error => console.log(error)
      );
    }

  }

  saveTodo() {
    if (this.id === -1) { // create a new Todo
      this.todoDataService.createTodo('richard', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }, error => console.log(error)
      );

    } else { // Update existing todo
      this.todoDataService.updateTodo('richard', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']); // routing back to the todos page which shows the updated todos
        }, error => console.log(error)
      );
    }

  }

}
