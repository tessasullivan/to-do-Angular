import { Task } from '../models/task.model';
import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  tasks: Task [] = [
    new Task('Finish Angular homework', 1), 
    new Task('Watch Mosh video', 1),
    new Task('Come up with Friday project', 2)
  ];

  priorityColor(currentTask) {
    if (currentTask.priority == 3) {
      return "bg-info";
    } else if (currentTask.priority == 2) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }

}
