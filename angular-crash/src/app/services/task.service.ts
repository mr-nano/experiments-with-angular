import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "https://mr-nano-experiments-with-angular-pjrr9ppphr55v-5000.githubpreview.dev/tasks";

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

}
