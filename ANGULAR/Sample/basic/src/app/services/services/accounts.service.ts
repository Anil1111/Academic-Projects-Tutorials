import { Injectable, EventEmitter } from '@angular/core';
import { Account } from '../account.model';
import { LoggingService } from './logging.service';
import { ServicesModule } from '../services.module';


@Injectable({
  providedIn: 'root'
}) // adding @injectable directive to allow other services to be injected into this service
export class AccountsService {
  statusUpdated = new EventEmitter<string>(); // defining the eventemitter to enable cross component communication
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test Account', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  constructor(private loggingService: LoggingService) { }

  addAccount(account: Account) {
    this.accounts.push(account);
    this.loggingService.logStatusChange(account.status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
