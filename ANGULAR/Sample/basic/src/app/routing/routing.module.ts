import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RoutingComponent, UsersComponent, ServersComponent, HomeComponent, UserComponent, ServerComponent, EditServerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // added router module to support <router-outlet> in routing.component.html
  ]
})
export class RoutingModule { }
