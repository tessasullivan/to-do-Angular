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

  // firstTask: Task = new Task("Finsish Angular homework and watch video");
  tasks: Task [] = [
    new Task('Finish Angular homework', 1), 
    new Task('Watch Mosh video', 1)
  ];

  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return "bg-info";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
}

