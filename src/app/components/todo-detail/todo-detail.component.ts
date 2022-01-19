import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  currentTodo: any = null;
  message = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id: string | null): void {
    this.todoService.get(id)
      .subscribe(
        data => {
          this.currentTodo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTodo(): void {
    this.todoService.update(this.currentTodo.id, this.currentTodo)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The todo was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTodo(): void {
    if (window.confirm("Delete this todo?")) {
      this.todoService.delete(this.currentTodo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/todos']);
        },
        error => {
          console.log(error);
        });
    }
  }

}

// updatePublished(status): void {
//   const data = {
//     title: this.currenttodo.title,
//     description: this.currenttodo.description,
//     published: status
//   };

//   this.todoService.update(this.currenttodo.id, data)
//     .subscribe(
//       response => {
//         this.currenttodo.published = status;
//         console.log(response);
//       },
//       error => {
//         console.log(error);
//       });
// }
