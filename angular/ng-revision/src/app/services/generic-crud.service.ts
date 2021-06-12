import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseObj } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericCrudService<T extends BaseObj> {
  private moduleApi: string;

  constructor(
    @Inject(String) private readonly moduleName: string,
    protected httpClient: HttpClient
  ) {
    this.moduleApi = environment.api.baseUrl + this.moduleName + '/';
  }

  findAll(): Observable<T[]> {
    // return of(TASKS);
    return this.httpClient.get<T[]>(this.moduleApi);
  }

  findById(obj: T): Observable<T> {
    return this.httpClient.get<T>(this.moduleApi + obj.id);
  }

  create(obj: T): Observable<T> {
    return this.httpClient.post<T>(this.moduleApi, obj);
  }

  update(obj: T): Observable<T> {
    return this.httpClient.patch<T>(this.moduleApi + obj.id, obj);
  }

  deleteById(obj: T): Observable<T> {
    return this.httpClient.delete<T>(this.moduleApi + obj.id);
  }
}
