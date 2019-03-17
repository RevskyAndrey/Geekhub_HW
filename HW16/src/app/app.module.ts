import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import {TodoService} from './todo.service';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'tasks', component: TasksComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TasksComponent,
    TaskItemComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
