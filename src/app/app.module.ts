import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './reducers/simple.reducer';
import {postReducer} from './reducers/post.reducer';
import {FormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({message: simpleReducer, post: postReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
