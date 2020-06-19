import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';
import { Account } from '../account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // we tell angular how to create the loggingService
})
export class NewAccountComponent {
  // we append the service into the constructor to instantiate it and let the angular know how to handle loggingService
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      console.log('New Status:' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(new Account(accountName, accountStatus));
    // this.loggingService.logStatusChange(accountStatus);
  }
}
