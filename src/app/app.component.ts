import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './models/AppState';
import {Observable} from 'rxjs';
import {Post} from './models/Post';
import * as PostActions from './actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post$: Observable<Post>;

  text: string; // from input val

  constructor(private store: Store<AppState>) {
    this.post$ = store.select('post');
  }

  editText(): void {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  reset(): void {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote(): void {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote(): void {
    this.store.dispatch(new PostActions.Downvote());
  }
}
