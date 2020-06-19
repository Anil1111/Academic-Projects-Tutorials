import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { Account } from './account.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  accounts: Account[] = [];
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];


  constructor(private accountsService: AccountsService, private usersService: UsersService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

}
