import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
  {
    path: '', // default path to load the DefaultComponent with the basic layout
    component: DefaultComponent,
    children: [{
      path: '', // loads up the dashboard component
      component: DashboardComponent
    },
    {
      path: 'posts', // path available at  /posts
      component: PostsComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
