import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor() { }

  public canActivate(route: ActivatedRouteSnapshot) {
    const isAdmin = true;
    return isAdmin;
  }
}
