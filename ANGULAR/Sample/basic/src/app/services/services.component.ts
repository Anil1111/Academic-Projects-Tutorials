import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { Account } from './account.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [AccountsService]
})
export class ServicesComponent implements OnInit{
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
