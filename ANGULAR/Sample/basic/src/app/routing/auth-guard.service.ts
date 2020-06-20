import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

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
}
