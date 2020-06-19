import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';

@NgModule({
  declarations: [ServicesComponent, AccountComponent, NewAccountComponent, InactiveUsersComponent, ActiveUsersComponent],
  imports: [CommonModule, FormsModule],
  // providers: [AccountsService, LoggingService]
  providers: []
})
export class ServicesModule {}
