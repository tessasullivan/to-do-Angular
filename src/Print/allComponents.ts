app.component.ts

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
  selectedTask = null;

  masterTaskList: Task [] = [
    new Task('Finish Angular homework', 1), 
    new Task('Watch Mosh video', 1),
    new Task('Come up with Friday project', 2)
  ];

  addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }
  editButtonClicked(clickedTask) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

// -------------------------------------------------------------------------
new-task.component.ts

import { Component, Output, EventEmitter} from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() sendTask = new EventEmitter();

  submitForm(description: string, priority: string) {
    let newTask: Task = new Task(description, parseInt(priority));
    this.sendTask.emit(newTask);
  }
}
// -------------------------------------------------------------------------
edit-task.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
// -------------------------------------------------------------------------
task-list.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  priorityColor(currentTask) {
    if (currentTask.priority == 3) {
      return "bg-info";
    } else if (currentTask.priority == 2) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }
}

