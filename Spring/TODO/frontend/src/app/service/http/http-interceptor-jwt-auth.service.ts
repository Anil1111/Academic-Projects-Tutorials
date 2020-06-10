import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JwtAuthenticationService } from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJwtAuthService implements HttpInterceptor {
  // HttpInterceptor acts like a filter to add authorization header to the request and then forwarding the modified request

  constructor(private jwtAuthenticationService: JwtAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const jwtAuthHeaderString = this.jwtAuthenticationService.getAuthenticatedToken();
    const username = this.jwtAuthenticationService.getAuthenticatedUser();

    if (jwtAuthHeaderString && username) {
      req = req.clone({

        setHeaders: {
          Authorization: jwtAuthHeaderString,
        },
      });
    }

    return next.handle(req); // sending the modified request
  }
}
