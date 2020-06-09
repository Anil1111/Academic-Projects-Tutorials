import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../basic-authentication.service';

export class HellowWorldBean {
  // provide type support to the response object
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient, private basicAuthenticationService: BasicAuthenticationService) {}

  executeHelloWorldBeanService() {
    return this.http.get<HellowWorldBean>(
      `${API_URL}/hello-world-bean`,
    );
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // const headers = this.createBasicAuthorizationHttpHeader();
    // return this.http.get<HellowWorldBean>(
    //   `http://localhost:8085/hello-world-path-variable/${name}`,
    //   { headers}
    // );

    // commented the above code as we have configured the HttpInterceptor to add the Authorization header on every request generated
    return this.http.get<HellowWorldBean>(
      `${API_URL}/hello-world-path-variable/${this.basicAuthenticationService.getAuthenticatedUser()}`
    );
  }

  // commenting as HttpInterceptor takes care of adding the authorization headers; below code is for hardcoded authentication
  // createBasicAuthorizationHttpHeader() {
  //   const username = 'richard';
  //   const password = 'dummy';
  //   // encode the string into base64 string using `window.btoa`
  //   const basicAuthHeaderString =
  //     'Basic ' + window.btoa(username + ':' + password);

  //   const headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString,
  //   });

  //   return headers;
  // }


}
