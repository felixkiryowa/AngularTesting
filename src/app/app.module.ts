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
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import {FormsModule} from '@angular/forms';
import {AuthServiceService} from './service/auth-service.service';
import {TokenService} from './service/token.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, HttpClientModule
  ],
  providers: [DataService, MyResolver, AuthServiceService, TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
