import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { BasicComponent } from './basic.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    BasicComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BasicModule { }
