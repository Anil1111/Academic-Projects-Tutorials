import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

// to ensure that CanDeactivateGuardService and edit-server.component have the method canDeactivate
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuardService
  implements CanDeactivate<CanComponentDeactivate> {
  // implements CanDeactivate provided by angular
  // it is a generic type that wraps our interface CanComponentDeactivate

  // Defines the canDeactivate method forced by the CanDeactivate angular interface
  // Method that will automatically called when user leaves the component
  // the component needs to be of type CanComponentDeactivate ie should implement its canDeactivate method

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot // optional
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate(); // calls the canDeactivate of the edit-server component
  }
}
