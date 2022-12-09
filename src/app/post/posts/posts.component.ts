import { ParseFlags } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from '../../models/post';
import { PostService } from '../../service/post.service';
import { loadPosts } from '../../state/app.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  myPosts: IPost[] = [];
  // Call the posts api and get the data from the remote server:
  constructor(private store: Store, readonly postSvc: PostService) { }

  ngOnInit() {
    let posts = [];
    //do Await/Async pattern:
    this.store.dispatch(loadPosts());  
  }
  
}
