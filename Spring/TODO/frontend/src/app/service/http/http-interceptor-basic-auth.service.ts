import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  // HttpInterceptor acts like a filter to add authorization header to the request and then forwarding the modified request

  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const username = 'richard';
    // const password = 'dummy';
    // const basicAuthHeaderString =
    //    'Basic ' + window.btoa(username + ':' + password);

    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    const username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      // checking if token and username is stored in the session, if true only then add authorization to the header else do nothing
      req = req.clone({
        // cloning the request as we cannot modify the original request
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }

    return next.handle(req); // sending the modified request
  }
}
