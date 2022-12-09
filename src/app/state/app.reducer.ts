import { createReducer, on } from '@ngrx/store';
import { IMember } from '../models/member';
import { IPost } from '../models/post';
import { fetchMembers, loadMembers, loadMembersSuccess, loadPlans, loadPosts, loadPostsSuccess } from './app.actions';

export interface IState {
  member: IMember;
  posts?: IPost[];
}

export const initialState: IState = {
  member: {
    memberCode: '',
    memberFirstName: '',
    memberLastName: ''
  }
}

const venkiData: IState = {
  member: {
    memberCode: '200',
    memberFirstName: 'Venki',
    memberLastName: 'Govindaiah'
  }
}

//Create the signature for our Reducer:

export const appReducer = createReducer(
  initialState,
  on(fetchMembers, (state) => state),

  //posts Reducers
  on(loadPosts, (state) => ({ ...state, status: 'loading' })),
  on(loadPostsSuccess, (state, { payload }) => ({
    ...state,
    post: payload,
    status: 'success',
    error: null
  })),

//Memver Reducers:
on(loadMembers, (state) => ({ ...state, status: 'loading' })),
on(loadMembersSuccess, (state, { payload }) => ({
  ...state,
  post: payload,
  status: 'success',
  error: null
})),

)