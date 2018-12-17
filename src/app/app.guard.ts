import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private authservice: AuthService,
              private router: Router
              ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('app guard:', state);
    return this.authservice.loggedIn
      .map((isLoggedIn) => {
        if(!isLoggedIn) {
          this.router.navigate(['/test_login']);
        }
        return isLoggedIn;
      });
  }
}
