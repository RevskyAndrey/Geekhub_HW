import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';

enum Filters {
  A = 'all',
  D = 'done'
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  todos: Task[];
  newValue: string;

  filters = Filters;
  activeFilter = Filters.A;

  get checkedTasks() {
    return this.todos.filter((task) => task.isChecked);
  }

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addNew(newValue: string) {
    this.todoService.addNewTask(newValue);
    this.newValue = null;
  }

  update(e, index) {
    switch (e) {
      case 'remove':
        this.todoService.remove(index);
        break;
      case 'edit':
        this.todoService.edit(index);
        break;
      default:
        console.log(111);
    }
  }

  show(e) {
    this.activeFilter = e;
  }
}
