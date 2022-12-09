import { createAction, props} from "@ngrx/store";
import { IMember } from "../models/member";
import { IPost } from "../models/post"


export const fetchMembers = createAction(
  '[Member - page] Fetch Members',
);

export const loadPlans = createAction(
  '[Plans - page] Load Plans',
);

//Actions for posts:

export const loadPosts = createAction(
  '[Posts page] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Posts page] Posts Load Success',
  props<{ payload: IPost[]}>()
);

export const loadPostsFailure = createAction(
  '[Posts page] Posts Load Failure',
  props<{ error: string }>()
);

export const loadMembers = createAction(
  '[Members page] Load Members'
);

export const loadMembersSuccess = createAction(
  '[Members page] Members Load Success',
  props<{ payload: IMember[]}>()
);

export const loadMembersFailure = createAction(
  '[Members page] Members Load Failure',
  props<{ error: string }>()
);