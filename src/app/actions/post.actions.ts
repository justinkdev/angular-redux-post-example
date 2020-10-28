import {Action} from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[UPVOTE] Edit';
export const DOWNVOTE = '[DOWNVOTE] Edit';
export const RESET = '[RESET] Edit';

export class EditText implements Action {
  readonly type = EDIT_TEXT;

  constructor(public payload: string) {
  }
}

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type ALL = Upvote | Downvote | Reset | EditText;
