import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: any;
  currentTodo: any = null;
  currentIndex = -1;
  todo = '';
  completed = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos(): void {
    this.todoService.getAll()
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTodos();
    this.currentTodo = null;
    this.currentIndex = -1;
  }

  setActiveTodo(todo: null, index: number): void {
    this.currentTodo = todo;
    this.currentIndex = index;
  }

}

// removeAlltodos(): void {
  //   this.todoService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrievetodos();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // searchByCompleted(): void {
  //   this.todoService.findByCompleted(this.completed)
  //     .subscribe(
  //       data => {
  //         this.todos = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
