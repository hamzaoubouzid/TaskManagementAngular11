import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Tasks, TasksExcution } from './tasks-excution.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  readonly TaskApiUrl = "https://localhost:7188/api/Task/";

  constructor(private http:HttpClient) { }

  GetAllTask(){
    return this.http.get<Tasks[]>(this.TaskApiUrl + 'GetAllTask')
  }

  GetAllTaskExecution(){
    return this.http.get<TasksExcution[]>(this.TaskApiUrl + 'GetAllExecutionTask')
  }

  AddTasks(data:Tasks){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Tasks>(this.TaskApiUrl + 'AddTasks', data, httpOptions);
  }
  ExcuteTask(data:any){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Tasks>('https://localhost:7188/api/Task/TaskExcution',data,httpOptions)
  }
}
