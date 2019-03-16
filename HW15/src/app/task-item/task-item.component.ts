import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task;

  @Output() updateTask = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  remove() {
    this.updateTask.emit('remove');
  }

  edit() {
    this.updateTask.emit('edit');
  }
}
