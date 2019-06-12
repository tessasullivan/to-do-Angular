import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterTaskList: Task [] = [
    new Task('Finish Angular homework', 1), 
    new Task('Watch Mosh video', 1),
    new Task('Come up with Friday project', 2)
  ];

  selectedTask = null;
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  finsishedEditing() {
    this.selectedTask = null;
  }
}

