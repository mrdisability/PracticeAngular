import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodosListComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'add', component: AddTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
