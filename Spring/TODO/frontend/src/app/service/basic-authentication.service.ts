import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export class AuthenticationBean {
  constructor(public message: string) {}
}

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeAuthenticationService(username: string, password: string) {
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        // we use the pipe operator to define an action that we need to perform if the request is successful
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data; // data is returned to whoever is using this service
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return user != null; // returns true
  }

  logout() {
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATED_USER);

  }
}
