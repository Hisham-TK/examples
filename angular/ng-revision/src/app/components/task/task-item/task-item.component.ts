import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  faClose = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDeleteTask(task: any): void {
    this.deleteTask.emit(task);
  }
}
