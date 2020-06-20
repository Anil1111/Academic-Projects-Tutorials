import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
  loggedIn = false;

  constructor() { }

  // faking authentication
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  // simulating the time taken to authenticate a user
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.loggedIn);
      }, 1000);
    });
    return promise;
  }
}
