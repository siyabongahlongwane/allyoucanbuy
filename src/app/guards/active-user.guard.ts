import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserGuard implements CanActivate {
  constructor(private common: CommonService, private router: Router) { }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.common.getUser()) {
      return true;
    } else {
      this.router.navigate(['login']).then(res => {
        this.common.openSnackbar('Login to access this page!');
        return false;
      }
      )
    }
  }

}
