import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { BasicComponent } from './basic/basic.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { UsersComponent } from './routing/users/users.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UserComponent } from './routing/users/user/user.component';


const routes: Routes = [
  {path: '', component: BasicComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'services', component: ServicesComponent},
  {
    path: 'routing', component: RoutingComponent,
    children: [
      {path: '', component: HomeComponent},
      // the path http://localhost:4200/routing will be mapped to this which renders the routing.component.html;
      // but with home.component being added into the <router-outlet> tag
      {path: 'users', component: UsersComponent},
        // adding parameters to the route by using `:` and any name for the parameter
      {path: 'user/:id/:name', component: UserComponent},
      {path: 'servers', component: ServersComponent},
    ]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
