import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MyResolver} from './my-resolver';


const routes: Routes = [
  /*route objects*/
    {
        path: '',
        component: NavbarComponent
    },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent,

  },
  {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
