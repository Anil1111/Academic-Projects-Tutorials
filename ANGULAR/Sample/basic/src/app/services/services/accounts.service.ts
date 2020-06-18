import { Injectable } from '@angular/core';
import { Account } from '../account.model';

// @Injectable({
//   providedIn: 'root'
// })
export class AccountsService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test Account', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  constructor() { }

  addAccount(account: Account) {
    this.accounts.push(account);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
