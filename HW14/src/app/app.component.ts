import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tasks: Array<{ id: number, text: string, status: boolean, removed: boolean, archived: boolean; }>;
  tasks = [];
  id = 0;
  text: string;
  status: boolean;
  removed: boolean;
  archived: boolean;

  addTask() {
    this.tasks.push({
      id: this.id,
      text: this.text,
      status: this.status = false,
      isRemoved: this.removed = false,
      isArchived: this.archived = false
    });
    this.text = null;
    this.id++;
  }

}
