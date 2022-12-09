import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';
import { Employee } from '../models/employee';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //injecting HTTP class here:
  constructor( readonly http: HttpClient) { }

  // Get posts from RESTful API:
  getEmployesFromAxios() {
    const api = new ApiService();
    return api.get<Employee[]>("https://myserver.com/employees")
  }

}
