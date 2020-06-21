import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private fakeAuthService: FakeAuthService, private router: Router) { }

  // canActivate can run both asynchronously(Observable and Promise) or Synchronously(boolean)
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.fakeAuthService.isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return true;
        }
        this.router.navigate(['/routing/']); // navigate back to root if not authenticated
        return false;
      });
  }

  // to protect the route along with the child routes
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
