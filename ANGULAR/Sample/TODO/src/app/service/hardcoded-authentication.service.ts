import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // service providing authentication logic
  authenticate(username: string, password: string){
    console.log('before authenticate ' + this.isUserLoggedIn());
    if (username === 'richard' && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after successful authenticate ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return (user !== null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
