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
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { FakeAuthService } from './routing/fake-auth.service';
import { AuthGuardService } from './routing/auth-guard.service';
import { CanDeactivateGuardService } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { ServerResolverService } from './routing/servers/server/server-resolver.service';
import { ObservablesComponent } from './observables/observables.component';
import { ObsUserComponent } from './observables/obs-user/obs-user.component';
import { ObsHomeComponent } from './observables/obs-home/obs-home.component';

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: '', component: HomeComponent },
      // the path http://localhost:4200/routing will be mapped to this which renders the routing.component.html;
      // but with home.component being added into the <router-outlet> tag
      // adding parameters to the route by using `:` and any name for the parameter
      {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
      },
      {
        path: 'servers',
        component: ServersComponent,
        // this path will be activated only when the UAthGuard returns true
        canActivate: [AuthGuardService],
        // canActivateChild all the child routes of 'servers'
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: ':id',
            component: ServerComponent,
            // resolve is used to load any asynchronous data before the component is rendered
            // data resolved will be saved in 'server'
            resolve: { server: ServerResolverService },
          },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [CanDeactivateGuardService],
          },
        ],
      },
      {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page not found!' }, // passing static data in the route to display in ErrorPageComponent
      },
    ],
  },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: '', component: ObsHomeComponent },
      { path: 'user/:id', component: ObsUserComponent },
    ],
  },

  { path: 'redirect', redirectTo: '/error' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
