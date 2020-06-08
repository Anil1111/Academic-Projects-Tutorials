import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HellowWorldBean {
  // provide type support to the response object
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HellowWorldBean>(
      'http://localhost:8085/hello-world-bean'
    );
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    const basicAuthHeaderString = this.createBasicAuthorizationHttpHeader();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http.get<HellowWorldBean>(
      `http://localhost:8085/hello-world-path-variable/${name}`,
      { headers}
    );
  }

  createBasicAuthorizationHttpHeader() {
    const username = 'richard';
    const password = 'dummy';
    // encode the string into base64 string using `window.btoa`
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
