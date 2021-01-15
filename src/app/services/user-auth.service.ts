import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isUserLoggedIn = false;
  private isAdminLoggedIn = false;

  constructor(private router: Router) {}

  userLogin(): void {
    this.isUserLoggedIn = true;
    this.router.navigate(['']);
  }

  userLogout(): void {
    this.isUserLoggedIn = false;
    this.router.navigate(['login']);
  }

  getCurrentUserStatus(): boolean {
    return this.isUserLoggedIn;
  }

  adminLogin(): void {
    this.isUserLoggedIn = true;
    this.isAdminLoggedIn = true;
    this.router.navigate(['admin']);
  }

  adminLogout(): void {
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.router.navigate(['logout']);
  }

  getCurrentAdminStatus(): boolean {
    return this.isAdminLoggedIn;
  }
}
