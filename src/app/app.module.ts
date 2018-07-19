import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {MyResolver} from './my-resolver';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [DataService, MyResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
