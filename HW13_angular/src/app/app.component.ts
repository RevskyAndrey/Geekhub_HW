import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tasks = [];
  title: string;
  completed = false;


  addTask() {
    this.tasks.push({
      title: this.title,
      status: this.completed
    });
    this.title = '';
  }

  listAction(event) {
    switch (event.target.classList.value) {
      case ('delete'):
        event.target.parentNode.remove();
    }
    console.warn(event);
    console.log(event.target);
  }
}
