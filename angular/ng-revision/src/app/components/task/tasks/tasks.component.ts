import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/http-services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask?: boolean;
  subscription: Subscription;

  constructor(
    private readonly taskService: TaskService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
    this.taskService.findAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteById(task).subscribe(() => {
      this.tasks = this.tasks.filter(
        (currentTask) => currentTask.id !== task.id
      );
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.update(task).subscribe((updatedTask) => {
      this.tasks.map((currentTask) =>
        updatedTask.id === currentTask.id ? updatedTask : currentTask
      );
    });
  }

  addTask(task: Task): void {
    this.taskService.create(task).subscribe((createdTask) => {
      this.tasks.push(createdTask);
    });
  }
}
