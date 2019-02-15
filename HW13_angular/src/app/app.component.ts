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
  doneTask = 0;
  notDoneTask = 0;
  allTask = 0;

  private addTask() {
    this.tasks.push({
      id: this.id,
      title: this.title,
      status: this.completed,
    });
    this.title = '';
    this.id++;
  }

  private editTask() {
    event.target.classList.toggle('editTask');
    event.target.previousSibling.classList.toggle('taskTitleEdit');
  }

  private deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  private statusTask(i) {
    if (this.tasks.status !== 'true') {
      this.tasks.status = 'true';
    } else if (this.tasks.status === 'true') {
      this.tasks.status = 'false';
    }
    event.target.nextSibling.classList.toggle('statusTask');
    // event.target.parentNode.children[1].classList.toggle('statusTask');
  }

}
