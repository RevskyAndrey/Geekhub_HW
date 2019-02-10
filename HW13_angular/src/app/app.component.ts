import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [];
  title = '';

  addTask() {
    this.tasks.push(this.title);
    console.log(this.title);
   }

}
