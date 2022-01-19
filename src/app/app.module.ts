import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoDetailComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
