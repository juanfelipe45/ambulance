import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthApplication } from './../../core/application/auth.application';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthenticationGuard implements CanActivate, CanLoad {

  constructor(
    private readonly _auth: AuthApplication,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.validUserLogged();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.validUserLogged();
  }

  private validUserLogged(): boolean {
    const isLogged = this._auth.isUserLogged;

    if (!isLogged)
      this._auth.logout();

    return isLogged;
  }

}
