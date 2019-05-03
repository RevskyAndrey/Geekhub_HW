import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: { id: number, text: string, isCompleted: boolean, isRemoved: boolean, isArchived: boolean; };

  constructor() {
  }

  ngOnInit() {
  }
  archiveTask(id) {
    this.task.isArchived = true;
    event.target.parentNode.classList.add('hide');
  }

  editTask(id) {
   console.log(event.target.parentNode.classList);
  }

  deleteTask(id) {
  this.task.isRemoved = true;
  event.target.parentNode.classList.add('hide');
  }
}
