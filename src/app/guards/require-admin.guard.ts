import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class RequireAdminGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuthService.getCurrentAdminStatus()) {
      console.log('RequireAdmin allowed user');
      return true;
    } else {
      console.log('RequireAdmin did not allow user');
      return false;
    }
  }
}
