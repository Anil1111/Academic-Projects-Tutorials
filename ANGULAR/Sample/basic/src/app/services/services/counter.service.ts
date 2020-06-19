import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterForActiveToInactiveUsers = 0;
  counterForInactiveToActiveUsers = 0;

  constructor() { }

  logActiveToInactiveUsers() {
    this.counterForActiveToInactiveUsers++;
    console.log(`The count of Active to Inactive Users is ${this.counterForActiveToInactiveUsers}`);
  }
  logInactiveToActiveUsers() {
    this.counterForInactiveToActiveUsers++;
    console.log(`The count of Inactive to Active Users is ${this.counterForInactiveToActiveUsers}`);
  }
}
