import * as PostActions from '../actions/post.actions';
import {Post} from '../models/Post';

export type Action = PostActions.ALL;

// default app state
const defaultState: Post = {
  text: 'hello i´m the default post',
  likes: 0
};

// helper function to create new post object
const newState =  (state, newData) => {
  return Object.assign({}, state, newData);
};


// reducer function
export function postReducer(state: Post = defaultState, action: Action): any {
  console.log(state, action.type);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload});
      break;
    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});
      break;
    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});
      break;
    case PostActions.RESET:
      return defaultState;
      break;
    default:
      return state;
  }
}
