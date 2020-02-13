import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';

@Injectable()
export class NoAuthGuardService implements CanActivate {
  constructor(
        private authService: AuthenticationService, private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.isUserLoggedIn()) {
      alert('You are not authorized to view this page');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}