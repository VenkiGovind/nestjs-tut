import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY, of, from} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostService } from "../service/post.service";
import { fetchMembers, loadPosts, loadPostsFailure, loadPostsSuccess } from "./app.actions";


@Injectable()
export class PostsEffects {

  constructor(private action$: Actions, private postService: PostService) { }

  loadPostEffect$ = createEffect(() => 
    this.action$.pipe(
      ofType(loadPosts),
      mergeMap(() => from(this.postService.getPostsFromAxios()).pipe(
        map(posts => loadPostsSuccess({
          payload: posts.data
        })),
        catchError((err: string) => of(loadPostsFailure({ error: err})))
      ))
    )
  )
  
};

