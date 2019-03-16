import { Injectable } from '@angular/core';
import { Task, todos } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  task: Task;
  todos: Task[] = todos;

  getTodos(): Task[] {
    return this.todos;
  }

  constructor() { }

  addNewTask(newValue: string) {
    this.task = new Task();
    this.task.value = newValue;
    this.task.isChecked = false;
    this.task.editing = false;

    this.todos.push(this.task);
  }

  remove(index) {
    this.todos.splice(index, 1);
  }

  edit(index) {
    this.todos[index].editing = !this.todos[index].editing;
  }
}
