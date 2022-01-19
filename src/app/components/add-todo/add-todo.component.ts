import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo = {
    todo: '',
    completed: false
  };

  submitted = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  saveTodo(): void {
    const data = {
      todo: this.todo.todo,
      completed: this.todo.completed
    };

    this.todoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
    });

    // of(this.todoService.create(data)).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.submitted = true;
    //   },
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete')
    // })
  }

  newTodo(): void {
    this.submitted = false;
    this.todo = {
      todo: '',
      completed: false
    };
  }

}

//Subscribe changes
//throwError('I am an error').subscribe({error: console.error});
//of([1,2,3]).subscribe({complete: console.info});
