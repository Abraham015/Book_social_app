import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenService.isTokenNotValid()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}