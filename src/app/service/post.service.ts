import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { IPost } from '../models/post';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  //injecting HTTP class here:
  constructor( readonly http: HttpClient) { }

  // Get posts from RESTful API:
  getPosts(): Observable<IPost[]> {
    const api = new ApiService();
    console.log('Calling POST API service');
    return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostsFromAxios(){
    const api = new ApiService(); 
    return api.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
  }

  

  async getCompensationStatements() {

    return of({
      compeanstionName: '',
      statementDate: '',
      producerCode: '',
      payAmount: '',
      payCompany: '',
    });

    // const api = new ApiService(); 
    // return api.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
