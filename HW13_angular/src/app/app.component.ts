import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tasks = [];
  title: string;
  completed = 'false';
  id = 0;
  edit = 'false';


  addTask() {
    this.tasks.push({
      id: this.id,
      title: this.title,
      status: this.completed,
      edit: this.edit
    });
    this.title = '';
    this.id++;
  }

  editTask() {
    event.target.classList.toggle('editTask');
    event.target.previousSibling.classList.toggle('tastTitleEdit');
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  statusTask() {
    if (this.tasks.status !== 'true') {
      this.tasks.status = 'true';
    } else if (this.tasks.status === 'true') {
      this.tasks.status = 'false';
    }
    event.target.nextSibling.classList.toggle('statusTask');
  }
}
