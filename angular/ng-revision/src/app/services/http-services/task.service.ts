import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { GenericCrudService } from '../generic-crud.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends GenericCrudService<Task> {
  constructor(httpClient: HttpClient) {
    super('tasks' , httpClient);
  }
}
